import {Schema} from 'mongoose'

export const JWTRefreshSchema = new Schema({
    jwtrefresh : {type:String, required:true},
    user_id : {type:String, required:true},
})