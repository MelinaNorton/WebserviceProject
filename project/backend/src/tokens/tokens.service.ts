import { Token } from "src/utils/interfaces/token.interface";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTokenDto } from "src/utils/dtos/createToken.dto";

@Injectable()
export class UserService {
    constructor(
        @InjectModel('Token')
        private readonly tokenModel : Model<Token>
    ){}

    //generate a new token using user info so it can be verified (?)
    //dont sign a jwt yet until you ask
    async create(createTokenDto : CreateTokenDto){
        const newToken = this.tokenModel.create()
    }
}