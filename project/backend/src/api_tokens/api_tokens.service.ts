import { ApiToken } from "src/utils/interfaces/apiToken.interface";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTokenDto } from "src/utils/dtos/createToken.dto";
import { randomBytes } from "crypto";

@Injectable()
export class TokenService {
    constructor(
        @InjectModel('ApiToken')
        private readonly tokenModel : Model<ApiToken>
    ){}

    //generate a new token using user info so it can be verified (?)
    //dont sign a jwt yet until you ask
    async createToken(createTokenDto : CreateTokenDto):Promise<ApiToken>{
        const newToken = randomBytes(32).toString('hex')
        return this.tokenModel.create({api_key:newToken})
    }
}