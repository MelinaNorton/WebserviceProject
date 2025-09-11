import { Controller, Post, Get, Body, Req, Param, UnauthorizedException, HttpCode, All } from "@nestjs/common";
import { LoginUserDto } from "src/utils/dtos/loginUser.dto";
import { AuthService } from "./auth.service";
import { RequestMethod } from "@nestjs/common";
import type { Request } from "express";

@Controller('authenticate')
export class AuthController{
    constructor(
        private readonly authService : AuthService
    ){}

//post endpoint that takes the username & password (outlined in loginUserDto) from the Body and the headers from the Req object

@HttpCode(200)
@Post('')
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
    return this.authService.authUser(apikey)
}
}