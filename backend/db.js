const { mongoose } = require("mongoose");
mongoose.set('strictQuery', true);

const mongoURI=process.env.MONGO_URI;

async function connectToMongo(){
    console.log("Connecting to Database")
    try{
        await mongoose.connect(mongoURI);
        console.log("Connected to Database");
        return true;
    }
    catch(e){
        console.log(e.message);
        return false;
    }   
}

module.exports=connectToMongo;