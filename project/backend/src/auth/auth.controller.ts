import { Controller, Post, Get, Body, Req, Request } from "@nestjs/common";
import { LoginUserDto } from "src/utils/dtos/loginUser.dto";
@Controller('auth')
export class AuthController{
    consructor(

    ){}

//post endpoint that takes the username & password (outlined in loginUserDto) from the Body and the headers from the Req object
@Post('/auth')
async loginUser(@Req() req:Request, @Body() loginUserDto:LoginUserDto){

}

}