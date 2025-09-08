import { Load } from "src/utils/interfaces/load.interface";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { randomBytes } from "crypto";
import { CreateLoadDto } from "src/utils/dtos/createLoad.sto";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class LoadsService {
    constructor(
        @InjectModel('Loads')
        private readonly loadModel : Model<Load>,
        private readonly authService : AuthService
    ){}

    async createLoad(createLoadDto : CreateLoadDto):Promise<Load>{
        return this.loadModel.create(createLoadDto)
    }

    async getLoads(api_key : string):Promise<Array<Load>>{
        const authenticated = await this.authService.authUser(api_key)
        const loadslist = await this.loadModel.find({user_id : authenticated.user_id})
        if(!loadslist){
            throw new UnauthorizedException("")
        }
        return loadslist
    }
}