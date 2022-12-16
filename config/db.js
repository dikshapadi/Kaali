const mongoose = require('mongoose')

const connectDB = async() => {
    try{
        
        mongoose.set('strictQuery', true)
        const db = process.env.MONGO_URI;
		await mongoose.connect(db);
        console.log(`MongoDB Connected`);
        
    }
    catch(err){
        console.error(err)
        process.exit(1)
    }
}
module.exports = connectDB