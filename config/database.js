import mongoose from "mongoose";

export const ConnectDB = async ()=>{
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI)
        //console.log("connection1",connection)

    }catch(error){
        //console.log("error1",error)
    }
} 
