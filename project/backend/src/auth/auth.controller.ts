import { Controller, Post, Get, Body, Req, Request, Param } from "@nestjs/common";
import { LoginUserDto } from "src/utils/dtos/loginUser.dto";
import { AuthService } from "./auth.service";

@Controller('authenticate')
export class AuthController{
    constructor(
        private readonly authService : AuthService
    ){}

//post endpoint that takes the username & password (outlined in loginUserDto) from the Body and the headers from the Req object
@Post()
async loginUser(@Req() req:Request, @Body() loginUserDto:LoginUserDto){
    return this.authService.loginUser(loginUserDto)
}

@Get(':apikey')
async auth(@Param('apikey') apikey: string){
    return this.authService.authUser(apikey)
}
}