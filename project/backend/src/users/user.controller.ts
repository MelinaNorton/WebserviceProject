import { Controller, Post, Body} from "@nestjs/common";
import { CreateUserDto } from "src/utils/dtos/createUser.dt";
import { UserService } from "./user.service";

@Controller('User')
export class UserController{
    //creates instances of teh services used in this controller
    constructor(
        private readonly userService : UserService
    ){}

    //post endpoint to create a user (for testing)
    @Post()
    async createUser(@Body() createUserDto : CreateUserDto){
        return this.userService.create(createUserDto)
    }
}