import { Controller, Post, Get, Body, Req, Request } from "@nestjs/common";
import { LoginUserDto } from "src/utils/dtos/loginUser.dto";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(
        private readonly authService : AuthService
    ){}

//post endpoint that takes the username & password (outlined in loginUserDto) from the Body and the headers from the Req object
@Post('/auth')
async loginUser(@Req() req:Request, @Body() loginUserDto:LoginUserDto){
    return this.authService.loginUser(loginUserDto)
}

}