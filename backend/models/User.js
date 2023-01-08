const mongoose=require('mongoose')
// console.log(mongoose)
const {Schema}=mongoose;

const UserSchema = new Schema({
    name:{type:String,required:true},
    phone:{type:Number,required:true,unique:true},
    password:{type:String,required:true},
    dateCreated:{type:Date,default:Date.now},
    email:{
        type:String,
        unique:true,
        default:"none"
    },
})

const User= mongoose.model("user",UserSchema);
User.createIndexes();
module.exports=User;