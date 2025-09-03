import { User } from "./user.interface";
import { ApiToken } from "./apiToken.interface";

export interface LoginResponseInterface{
    user : User,
    token : ApiToken
}