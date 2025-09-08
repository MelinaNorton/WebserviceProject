import { ApiKey } from "src/utils/interfaces/apiToken.interface";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { randomBytes } from "crypto";
import { User } from "src/utils/interfaces/user.interface";

@Injectable()
export class ApiTokenService {
    constructor(
        @InjectModel('ApiKey')
        private readonly tokenModel : Model<ApiKey>
    ){}

    //generate a new token using user info so it can be verified (?)
    //dont sign a jwt yet until you ask
    async createToken(user : User):Promise<ApiKey>{
        const user_id = user._id
        const newToken = randomBytes(32).toString('hex')
        return this.tokenModel.create({user_id:user_id, api_key:newToken})
    }

    async findToken(api_key : string):Promise<string>{
        const foundtoken = await this.tokenModel.findOne({api_key : api_key})
        if(!foundtoken){
            throw new UnauthorizedException("API key does not exist or is disabled")
        }
        console.log("Api Key's user_id: ", foundtoken.user_id)
        return foundtoken.user_id
    }
}