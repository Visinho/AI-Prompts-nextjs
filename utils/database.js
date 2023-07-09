import mongoose from "mongoose";

let isConnected = false; // for tracking the connection

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    if(isConnected){
        console.log("MongoDB is connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "Visinho_Prompts",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true;
        console.log("MongoDB Connected")
    } catch (error) {
        console.log(error)
    }
}