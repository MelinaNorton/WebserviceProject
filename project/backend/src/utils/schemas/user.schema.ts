import {Schema} from 'mongoose'

export const UserSchema = new Schema({
    full_name : {type:String, required:true},
    username : {type:String, required:true},
    password : {type:String, required:true},
    is_team_driver_login : {type:Boolean, required:true},
    oidc_access_token : {type:String, required:true},
    oidc_expires_in : {type:String, required:true},
    oidc_refresh_token : {type:String, required:true},
})