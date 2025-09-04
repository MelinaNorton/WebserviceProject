import {Schema} from 'mongoose'

export const JWTSchema = new Schema({
    jwt : {type:String, required:true},
    _id : {type:String, required:true},
})