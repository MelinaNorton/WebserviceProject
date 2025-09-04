import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { LoginUserDto } from "src/utils/dtos/loginUser.dto";
import { UserService } from "src/users/user.service";
import { HttpCode } from "@nestjs/common";
import { ApiTokenService } from "src/api_tokens/api_tokens.service";
import { LoginResponseInterface } from "src/utils/interfaces/loginResponse.interface";
import { JwtTokenService } from "src/jwt/jwt.service";
import { JWTRefresh } from "src/utils/interfaces/jwtrefresh.interface";
import bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(
        private readonly userService : UserService,
        private readonly apitokenService : ApiTokenService,
        private readonly tokenService : JwtTokenService
    ){}

    async checkPass({password, userpass}:{password:string, userpass:string}):Promise<Boolean>{
        return await bcrypt.compare(userpass, password)
    }

    //login logic w/username & passowrd -> return api token & User object
    async loginUser(loginUserDto : LoginUserDto):Promise<any>{
        const user = await this.userService.find({username: loginUserDto.username})
        if(!user){
            throw new UnauthorizedException("No User Found by these credentials")
        }
        const match = await this.checkPass({password:user.password, userpass:loginUserDto.password})
        if(!match){
            throw new UnauthorizedException("User credentials do not match; try again")
        }
        const apitoken = await this.apitokenService.createToken(user)
        const accesstokendata = await this.tokenService.createJwtToken(user)
        const refreshtokendata  = await this.tokenService.createRefreshJwtToken(user)

        const apikey = apitoken.api_key
        const accesstoken = accesstokendata.jwt
        const refreshtoken = refreshtokendata.jwtrefresh
        return {user, apikey, accesstoken, refreshtoken}
    }

    //auth logic w/username & passowrd -> return User object
    async authUser(api_key : string){
        const found = await this.apitokenService.findToken(api_key)
        console.log("Api Key located")
        const user = await this.userService.find({_id : found})
        console.log("Api Key's Associated User located")
        return {full_name: user.full_name, api_key:api_key}
    }
}