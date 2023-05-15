import mongoose from "mongoose";

export const ConnectDB = async ()=>{
    try{
        const uri = "mongodb+srv://deepak:19SyDnDLmS2Tv3am@cluster0.vsjcfja.mongodb.net/resumes";
        const connection = await mongoose.connect(uri)
        //console.log("connection1",connection)

    }catch(error){
        //console.log("error1",error)
    }
} 
