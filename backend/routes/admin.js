const router=require('express').Router();
const Admin=require('../models/Admin')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken');
const {validator,body,validationResult}=require('express-validator')

const jwtkey=process.env.JWT_SECRET_KEY;

//admin register post route
router.post('/register',[
    body("name","Enter valid Full Name").matches(/^([a-zA-Z]+[ ]{1})+[a-zA-Z]+$/),
    body("username","Username must not contain spaces or special characters").isAlphanumeric(),
    body("password","Password must have one capital, one small, one symbol and one number at least").isStrongPassword(),
    body("phone").isNumeric().withMessage("Enter Mobile Number without + or 91").matches(/^[6-9]\d{9}$/).withMessage("Enter a valid mobile number"),
    body("email","Email is invalid").isEmail(),
],async (req,res)=>{
    try{
        //logs
        console.log("Admin Register using: "+req.body.username);
        //validation
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.json({error:errors.errors});
        }

        //processing
        let {username,password,name,email,phone}=req.body;
        username=username.toLowerCase();
        const securedPassword=await bcrypt.hash(password,await bcrypt.genSalt(10));

        //check admin already exists
        if(await Admin.findOne({username:username})){
            return res.status(409).json({error:"Username Already Exists"})
        }
        else if(await Admin.findOne({phone:phone})){
            return res.status(409).json({error:"Mobile Number Already Exists"})
        }
        else if(await Admin.findOne({email:email})){
            return res.status(409).json({error:"Email Already Exists"})
        }
        
        //creating admin
        const admin=await Admin.create({
            username,password:securedPassword,name,email,phone
        });
        //forwarding to login
        res.redirect(201,"../login");
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
})

//admin login using post
router.post('/login',[
    body("username","Username must not contain spaces or special characters").isAlphanumeric(),
    body("password","Password must have one capital, one small, one symbol and one number at least").isStrongPassword(),
],async (req,res)=>{
    try{
        //logs
        console.log("Admin Login using: "+req.body.username);
        //validation
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.json({error:errors.errors});
        }

        //processing
        let {username,password}=req.body;
        username=username.toLowerCase();

        const admin= await Admin.findOne({username:username});
        if(!admin){
            return res.status(400).json({error:"Username not registered. Please register first"});
        }

        const passwordCompare=await bcrypt.compare(password,admin.password);
        if(!passwordCompare){
            return res.status(400).json({error:"Mismatch Credentials"});
        }
        //generating login token
        let token;
        if(req.body.remember){
            token=jwt.sign({adminId:admin.id},jwtkey);
        }
        else{
            token= jwt.sign({adminId:admin.id},jwtkey,{expiresIn:'10m'});
        }
        //sending token
        res.cookie('admtkn',token).json(token);
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error:"Bad Request"});
    }
})

module.exports=router;