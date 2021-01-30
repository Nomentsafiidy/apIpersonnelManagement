import mongoose from "mongoose";


export type PersonalType = {
    name: string;
    firstName: string;
    email: string;
    post: string;
} 

const personalSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        trim: true
    },
    firstName : {
        type: String,
        required: true,
        trim: true
    },
    email : {
        type: String,
        lowercase: true,
        trim: true,
        required: true       
    },
    post : {
        type: String,
        required: true
    }
})

const Personal = mongoose.model('Personal', personalSchema)

export { Personal }