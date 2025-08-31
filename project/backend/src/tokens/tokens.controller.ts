import { Controller, Post, Get, Body, Req, Request } from "@nestjs/common";


@Controller('token')
export class AuthController{
    constructor(
        
    ){}

//post endpoint that takes the username & password (outlined in loginUserDto) from the Body and the headers from the Req object
@Post()
async createToken(){
    
}

}