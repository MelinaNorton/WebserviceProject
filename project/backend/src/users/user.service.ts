import { User } from "src/utils/interfaces/user.interface";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Injectable, NotFoundException } from "@nestjs/common";
import { FilterUserDto } from "src/utils/dtos/filterUser.dto";
import { CreateUserDto } from "src/utils/dtos/createUser.dt";
import bcrypt from 'bcrypt'

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User')
        private readonly userModel : Model<User>
    ){}

    async create(createUserDto : CreateUserDto){
        const salt = await bcrypt.genSalt(10)
        const securepass = await bcrypt.hash(createUserDto.password, salt)
        createUserDto.password = securepass
        return await this.userModel.create(createUserDto)
    }

    //simple finding logic for username, full_name, _id (Mongo generated) or password
    async find(filterUserDto: FilterUserDto){
        console.log(filterUserDto)
        const user = await this.userModel.findOne(filterUserDto)
        if(user == null){
            throw new NotFoundException("No User found by those filters")
        }
        return user
    }
}