const jwt=require("jsonwebtoken");
const Admin=require('../models/Admin')
const JWT_SECRET=process.env.JWT_SECRET_KEY;

const fetchAdmin=async (req,res,next)=>{
    const token=(req.cookies.admtkn)?req.cookies.admtkn:req.headers('admtkn');
    if(!token){
        return res.status(401).json({error:"Invalid Token"});
    }
    try {
        const data=jwt.verify(token,JWT_SECRET);
        const admin=await Admin.findById(data.adminId);
        if(!admin){
            return res.status(404).clearCookie(token).json("Not Found");
        }
        req.admin=data.adminId;
        next();
        
    } catch (error) {
        console.log("Error with token: { "+error.message+" }")
        res.status(419).json({error:error.message});
    }
}
module.exports=fetchAdmin;