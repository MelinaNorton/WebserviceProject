import {Schema} from 'mongoose'

export const LoadsSchema = new Schema({
    name : {type:String, required:true}
})