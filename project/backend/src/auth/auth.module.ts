import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/user.module';
import { UserService } from 'src/users/user.service';
import { TokensModule } from 'src/api_tokens/api_tokens.module';
import { ApiTokenService } from 'src/api_tokens/api_tokens.service';
import { AuthService } from './auth.service';
import { JwtTokenModule } from 'src/jwt/jwt.module';
import { AuthController } from './auth.controller';

@Module({
    //imports the other modules used within this module
    imports:[UsersModule, TokensModule, JwtTokenModule],
    //registeres the Auth controller as this module's controller
    controllers: [AuthController],
    //names specific services used within the module
    providers: [UserService, ApiTokenService, AuthService],
    //makes the Auth logic available in other modules
    exports: [AuthService]
})

export class AuthModule{}