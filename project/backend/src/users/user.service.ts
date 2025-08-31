import { User } from "src/utils/interfaces/user.interface";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Injectable, NotFoundException } from "@nestjs/common";
import { FilterUserDto } from "src/utils/dtos/filterUser.dto";

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User')
        private readonly userModel : Model<User>
    ){}

    //simple finding logic for username, full_name, _id (Mongo generated) or password
    async find(filterUserDto: FilterUserDto){
        const user = await this.userModel.findOne(filterUserDto)
        if(user != null){
            return user
        }
        return new NotFoundException("No User found by those filters")
    }
}