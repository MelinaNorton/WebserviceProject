import { Request, UnauthorizedException } from "@nestjs/common";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtTokenService } from "../jwt.service";

const jwtAccessTokenExtractor = (req : Request) =>{
    const accessToken = ExtractJwt.fromHeader("access")
    if(!accessToken){
        throw new UnauthorizedException("No access token found")
    }
    return accessToken
}

const jwtRefreshTokenExtractor = (req : Request) =>{
    const refreshToken = ExtractJwt.fromHeader("refresh")
    if(!refreshToken){
        throw new UnauthorizedException("No refresh token found; log in again")
    }
    return refreshToken
}
