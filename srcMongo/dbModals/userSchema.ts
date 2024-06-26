import mongoose from "mongoose";
const Schema=mongoose.Schema

const userSchema=new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    authentication:{
        password:{
            type:String,
            required:true,
            select:false
        },
        salt:{
            type:String,
            select:false
        },
        sessionToken:{
            type:String,
            select:false
        },
    }
},{timestamps:true})

export const userModel=mongoose.model('User',userSchema)