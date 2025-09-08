import {Schema} from 'mongoose'

export const UserSchema = new Schema({
    full_name : {type:String, required:true},
    username : {type:String, required:true},
    password : {type:String, required:true},
    menu_code : {type:String, required:true},
    dashboard_code : {type:String, required:true}
})