import {Schema} from 'mongoose'

export const JWTRefreshSchema = new Schema({
    jwtrefresh : {type:String, required:true},
    _id : {type:String, required:true},
})