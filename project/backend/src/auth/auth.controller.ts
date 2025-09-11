import { Controller, Post, Get, Body, Req, Request, Param, UnauthorizedException, HttpCode } from "@nestjs/common";
import { LoginUserDto } from "src/utils/dtos/loginUser.dto";
import { AuthService } from "./auth.service";

@Controller('authenticate')
export class AuthController{
    constructor(
        private readonly authService : AuthService
    ){}

//post endpoint that takes the username & password (outlined in loginUserDto) from the Body and the headers from the Req object
@Post()
@HttpCode(200)
async loginUser(@Req() req:Request){
    if(req.body == null){
        throw new UnauthorizedException('No credentials found')
    }
    
    const username = req.body['username']
    const pass = req.body['password']
    const loginUserDto = new LoginUserDto()
    loginUserDto.username = username
    loginUserDto.password = pass
    
    return this.authService.loginUser(loginUserDto)
}

@Get(':apikey')
async auth(@Param('apikey') apikey: string){
    const api_key_parsed = apikey.match(/^Token\s+token="?([^",\s]+)"?/i)
    if(!api_key_parsed){
        throw new UnauthorizedException("No token parsed from value")
    }
    return this.authService.authUser(api_key_parsed[0])
}
}