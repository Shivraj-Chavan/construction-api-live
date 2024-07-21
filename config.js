const mongoose=require("mongoose")

const getConnection=async()=>{

    try {
        mongoose.connect('mongodb+srv://shivrajchavan1902:WQgwA7BQFWyJA6KG@cluster0.1edqz2q.mongodb.net/')
        console.log('MongoDB Connected...');
    } catch (error) {
     console.log(`Error: ${error}`);
         process.exit(); 
    }
}
module.exports=getConnection;