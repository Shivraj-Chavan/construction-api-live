const mongoose=require("mongoose")

const getConnection=async()=>{

    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log('MongoDB Connected...');
    } catch (error) {
     console.log(`Error: ${error}`);
         process.exit(); 
    }
}
module.exports=getConnection;