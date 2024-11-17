import mongoose, { mongo } from "mongoose";

const initialized = false;

export const connect = async () => {
    mongoose.set('strictQuery',true);
    if (initialized) {
        console.log("Already connected to MongoDB");
        return;
    }try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName : 'zoro-blog',
            useNewUrlParser : true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
        initialized = true;
    }catch(error){
        console.log("Error connecting to MongoDB" ,error);
    }
}