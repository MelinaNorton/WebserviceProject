import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Injectable, NotFoundException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt"
import { JWT } from "src/utils/interfaces/jwt.interface";
import { User } from "src/utils/interfaces/user.interface";
import { ConfigService } from "@nestjs/config";
import { randomUUID } from 'crypto';
import { Response } from "express";
import { FilterTokenDto } from "src/utils/dtos/filterToken.dto.ts";
import { JWTRefresh } from "src/utils/interfaces/jwtrefresh.interface";

@Injectable()
export class JwtTokenService {
    private readonly jwtsecret;
    private readonly jwtexpires;
    private readonly jwtrefreshexpires;

    constructor(
        @InjectModel('JwtAccess')
        private readonly jwtModel : Model<JWT>,
        @InjectModel('JwtRefresh')
        private readonly jwtRefreshModel : Model<JWTRefresh>,
        private readonly jwtService : JwtService,
        private readonly config : ConfigService
    ){
        this.jwtsecret = config.get('JWT_SECRET')
        this.jwtexpires = config.get('JWT_EXPIRES')
        this.jwtrefreshexpires = config.get('JWT_REFRESH_EXPIRES')
    }
    
    //generate a new access token using user info so it can be verified (?)
    //dont sign a jwt yet until you ask
    async createJwtToken(user : User):Promise<JWT>{
        const jti = randomUUID()
        const jwtval = await this.jwtService.sign({sub:user._id, username:user.username, type:'access', jti:jti}, {
             secret: this.jwtsecret,
             expiresIn:this.jwtexpires,
        })
        return await this.jwtModel.create({jwt : jwtval, user_id: user._id})
    }

    async createRefreshJwtToken(user : User):Promise<JWTRefresh>{
        const jti = randomUUID()
        const jwtval = await this.jwtService.sign({sub:user._id, username:user.username, type:'refresh', jti:jti}, {
             secret: this.jwtsecret,
             expiresIn:this.jwtrefreshexpires
        })
        return await this.jwtRefreshModel.create({jwtrefresh:jwtval, user_id:user._id})
    }

    async attachJwtToken(token:string, res:Response){
        res.cookie("accesstoken", token, {
            httpOnly: false,
            secure: true,
            sameSite: 'none',
            maxAge: this.jwtexpires,
            path: '/',
        });
    }

    async attachJwtRefreshToken(token:string, res:Response){
        res.cookie("refreshtoken", token, {
            httpOnly: false,
            secure: true,
            sameSite: 'none',
            maxAge: this.jwtrefreshexpires,
            path: '/',
        });
    }

    async findToken(filterTokenDto:FilterTokenDto){
        const tokenfilter = {jwt : filterTokenDto.user_id}
        if(filterTokenDto.type == 'access'){
            return this.jwtModel.find(tokenfilter)
        }
        return this.jwtRefreshModel.find(tokenfilter)
    }
}