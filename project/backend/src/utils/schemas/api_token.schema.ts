import {Schema} from 'mongoose'

export const ApiTokenSchema = new Schema({
    api_token : {type:String, required:false},
    user_id : {type:String, required:false}
})