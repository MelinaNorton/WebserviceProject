import { User } from "./user.interface";
import { ApiKey } from "./apiToken.interface";
import { JWT } from "./jwt.interface";
import { JWTRefresh } from "./jwtrefresh.interface";

export interface LoginResponseInterface{
    user : User,
    apitoken : string,
    accesstoken : string,
    refreshtoken : string
}