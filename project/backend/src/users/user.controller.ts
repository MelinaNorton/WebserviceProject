import { Controller, Post, Get, Body, Req, Request } from "@nestjs/common";
import { CreateUserDto } from "src/utils/dtos/createUser.dt";
import { UserService } from "./user.service";

@Controller('User')
export class UserController{
    constructor(
        private readonly userService : UserService
    ){}

    @Post()
    async createUser(@Body() createUserDto : CreateUserDto){
        console.log("User Data Recieved: ", createUserDto)
        return this.userService.create(createUserDto)
    }
}