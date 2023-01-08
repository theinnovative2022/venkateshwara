const mongoose =require('mongoose')
const {Schema}=mongoose;

const Announcement=new Schema({ 
    title:{type:String,required:true},
    addedBy:{type:Schema.Types.ObjectId},
    lastUpdatedBy:{type:Schema.Types.ObjectId},
    addedOn:{type:Date,default:Date.now},
    link:{type:String,required:true},
    hidden:{type:Boolean,default:false}
})

const Achievement=new Schema({
    image:{type:Buffer,required:true},
    description:{type:String,required:true},
    link:{type:String,required:true},
    addedBy:{type:Schema.Types.ObjectId},
    lastUpdatedBy:{type:Schema.Types.ObjectId},
    addedOn:{type:Date,default:Date.now},
    hidden:{type:Boolean, default:false}
})

const dashboard=new Schema({
    announcementTimeout:{type:Number,default:7},
    announcements:[Announcement],
    achievements:[Achievement]
})

const Dashboard=mongoose.model('dashboard',dashboard);
module.exports=Dashboard;