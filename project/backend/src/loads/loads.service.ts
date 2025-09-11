import { Load } from "src/utils/interfaces/load.interface";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateLoadDto } from "src/utils/dtos/createLoad.sto";
import { AuthService } from "src/auth/auth.service";
import { UserService } from "src/users/user.service";
import { PrunedLoadInterface } from "src/utils/interfaces/pruned_load.interface";

@Injectable()
export class LoadsService {
    //creates instances of the models & services used in this service
    constructor(
        @InjectModel('Loads')
        private readonly loadModel : Model<Load>,
        private readonly authService : AuthService,
        private readonly userService : UserService
    ){}

    //uses the loadModel to create a new loads instance
    async createLoad(createLoadDto : CreateLoadDto):Promise<Load>{
        return this.loadModel.create(createLoadDto)
    }

    //authenticates the api key, and uses the return data from the auth endpoint to access the user's id & grab their loads list
    async getLoads(api_key : string):Promise<Array<PrunedLoadInterface>>{
        const authenticated = await this.authService.authUser(api_key)
        if(!authenticated){
            throw new UnauthorizedException('API Token cannot be verified')
        }
        const user = (await this.userService.find({full_name : authenticated.full_name}))
        const user_id = user._id
        const loadslist = await this.loadModel.find({user_id : user_id})
        const loadslistpruned = new Array<PrunedLoadInterface>

        for(const load of loadslist){
            const prunedLoad = new PrunedLoadInterface()
            prunedLoad.id = load._id.toString()
            prunedLoad.active = load.active
            prunedLoad.current = load.current
            prunedLoad.display_identifier = load.display_identifier
            prunedLoad.load_status = load.load_status
            prunedLoad.load_status_label = load.load_status_label
            prunedLoad.sort - load.sort
            loadslistpruned.push(prunedLoad)
        }
        return loadslistpruned
    }
}