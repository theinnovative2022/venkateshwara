const mongoose=require('mongoose')
// console.log(mongoose)
const {Schema}=mongoose;

const AdminSchema = new Schema({
    name:{type:String,required:true},
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    phone:{type:Number,required:true,unique:true},
    dateCreated:{type:Date,default:Date.now},
    email:{
        type:String,
        required:true,
        unique:true
    },
})

const Admin= mongoose.model("admin",AdminSchema);
Admin.createIndexes();
module.exports=Admin;