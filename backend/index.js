const express=require('express')
const dotenv= require("dotenv")
const path=require('path')
const cors=require("cors")
const cookieParser=require('cookie-parser')
const Admin=require('./models/Admin')

const port = 5000
const app=express();

require('dotenv').config({path: path.relative(process.cwd(), path.join(__dirname,'.env'))});
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const connectDB=require('./db.js');
const startApp=async ()=>{
  if(await connectDB()){ 
    app.use("/api/admin/",require('./routes/admin.js'))
    app.use("/api/dashboard/",require('./routes/dashboard.js'))
    
    app.get('/',(req,res)=>{
      res.sendFile(path.join(__dirname,'/index.html'));
    })

    app.get("/shoutout",(req,res)=>{
      res.send("<h2>NULM</h2>");
    })

    app.listen(port, () => {
      console.log(`NULM app listening on port ${port}`)
    })
  }
  else{
    throw TypeError("CANNOT CONNECT TO DATABASE");
  }
}
try{
  startApp();
}catch(e){
  app.get('*',(req,res)=>{res.send("INTERNAL SERVER ERROR");})
  console.log(e);
}