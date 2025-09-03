import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { LoginUserDto } from "src/utils/dtos/loginUser.dto";
import { UserService } from "src/users/user.service";
import { HttpCode } from "@nestjs/common";
import { ApiTokenService } from "src/api_tokens/api_tokens.service";
import { LoginResponseInterface } from "src/utils/interfaces/loginResponse.interface";
@Injectable()
export class AuthService {
    constructor(
        private readonly userService : UserService,
        private readonly tokenService : ApiTokenService
    ){}

    //login logic w/username & passowrd -> return api token & User object
    async loginUser(loginUserDto : LoginUserDto):Promise<LoginResponseInterface>{
        const user = await this.userService.find(loginUserDto)
        if(!user){
            throw new UnauthorizedException("No User Found by these credentials")
        }
          // craete & use a Create function in te token service/controller to use & call here
         //const token = 
         const token = await this.tokenService.createToken({api_token:''})
         return {user, token}
    }

    //auth logic w/username & passowrd -> return User object
    async authUser(loginUserDto : LoginUserDto){
        
    }
}