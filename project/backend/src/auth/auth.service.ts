import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { LoginUserDto } from "src/utils/dtos/loginUser.dto";
import { UserService } from "src/users/user.service";
import { ApiTokenService } from "src/api_tokens/api_tokens.service";
import { JwtTokenService } from "src/jwt/jwt.service";
import bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    //creates instances of all the services used in the auth logic below
    constructor(
        private readonly userService : UserService,
        private readonly apitokenService : ApiTokenService,
        private readonly tokenService : JwtTokenService
    ){}

    //accepts two arguments, the hashed password value grabbed from the DB (password) and the password value read from the 
    //JSON body (DTO) (userpass)
    async checkPass({password, userpass}:{password:string, userpass:string}):Promise<Boolean>{
        return await bcrypt.compare(userpass, password)
    }

    //login logic w/username & passowrd -> return api token & User object
    async loginUser(loginUserDto : LoginUserDto):Promise<any>{
        //find the username in the DB & return if not found
        const user = await this.userService.find({username: loginUserDto.username})
        if(!user){
            throw new UnauthorizedException("No User Found by these credentials")
        }

        //checks if the found user's password in the DB matches the passed-in value & returns if not
        const match = await this.checkPass({password:user.password, userpass:loginUserDto.password})
        if(!match){
            throw new UnauthorizedException("User credentials do not match; try again")
        }

        //create all necessary tokens via their respective services using the user's data from the returned User object
        const apitoken = await this.apitokenService.createToken(user)
        const accesstokendata = await this.tokenService.createJwtToken(user)
        const refreshtokendata  = await this.tokenService.createRefreshJwtToken(user)

        //populate return data
        const api_token = apitoken.api_key
        const accesstoken = accesstokendata.jwt
        const refreshtoken = refreshtokendata.jwtrefresh
        const full_name = user.full_name
        const menu_code = user.menu_code
        const dashboard_code = user.dashboard_code
        
        return {full_name, api_token, menu_code, dashboard_code}
    }

    //auth logic w/username & passowrd -> return User object
    async authUser(api_key : string){
        console.log("Api token passed to authUser: ", api_key)
        const api_key_parsed = api_key.match(/^Token\s+token="?([^",\s]+)"?/i)
        if(!api_key_parsed){
            throw new UnauthorizedException("no key parsed from value")
        }
        const found = await this.apitokenService.findToken(api_key_parsed[0])
        console.log("Api Key located")
        const user = await this.userService.find({_id : found})
        console.log("Api Key's Associated User located")
        return {full_name: user.full_name, api_token:api_key}
    }
}