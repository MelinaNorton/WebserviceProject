import {Schema} from 'mongoose'

export const ApiTokenSchema = new Schema({
    api_key : {type:String, required:false},
    user_id : {type:String, required:false}
})