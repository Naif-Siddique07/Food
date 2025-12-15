import mongoose from "mongoose";


export const connectDB = async(url)=>{
    await mongoose.connect(url)//use your mongodb url
    .then(()=>console.log("DB Connected"));
}