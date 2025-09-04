import {Schema} from 'mongoose'

export const JWTSchema = new Schema({
    jwt : {type:String, required:true},
    user_id : {type:String, required:true}
})