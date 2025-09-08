import { User } from "./user.interface";

export interface LoginResponseInterface{
    user : User,
    apitoken : string,
    accesstoken : string,
    refreshtoken : string
}