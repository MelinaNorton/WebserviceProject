import {Schema} from 'mongoose'

export const UserSchema = new Schema({
    full_name : {type:String, required:true},
    username : {type:String, required:true},
    password : {type:String, required:true},
    is_team_driver_login : {type:Boolean, required:false},
    oidc_access_token : {type:String, required:false},
    oidc_expires_in : {type:String, required:false},
    oidc_refresh_token : {type:String, required:false},
})