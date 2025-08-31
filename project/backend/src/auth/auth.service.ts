import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { LoginUserDto } from "src/utils/dtos/loginUser.dto";
import { UserService } from "src/users/user.service";
import { HttpCode } from "@nestjs/common";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService : UserService
    ){}

    //login logic w/username & passowrd -> return api token & User object
    async loginUser(loginUserDto : LoginUserDto){
        const found = await this.userService.find(loginUserDto)
        if(!found){
            throw new UnauthorizedException("No User Found by these credentials")
        }
          // craete & use a Create function in te token service/controller to use & call here
         //const token = 
    }

    //auth logic w/username & passowrd -> return User object
    async authUser(loginUserDto : LoginUserDto){
        
    }
}