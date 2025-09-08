import { Load } from "src/utils/interfaces/load.interface";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateLoadDto } from "src/utils/dtos/createLoad.sto";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class LoadsService {
    //creates instances of the models & services used in this service
    constructor(
        @InjectModel('Loads')
        private readonly loadModel : Model<Load>,
        private readonly authService : AuthService
    ){}

    //uses the loadModel to create a new loads instance
    async createLoad(createLoadDto : CreateLoadDto):Promise<Load>{
        return this.loadModel.create(createLoadDto)
    }

    //authenticates the api key, and uses the return data from the auth endpoint to access the user's id & grab their loads list
    async getLoads(api_key : string):Promise<Array<Load>>{
        const authenticated = await this.authService.authUser(api_key)
        const loadslist = await this.loadModel.find({user_id : authenticated.user_id})
        if(!loadslist){
            throw new UnauthorizedException("")
        }
        return loadslist
    }
}