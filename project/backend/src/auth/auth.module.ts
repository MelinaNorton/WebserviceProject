import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/user.module';
import { UserService } from 'src/users/user.service';
import { TokensModule } from 'src/api_tokens/api_tokens.module';
import { ApiTokenService } from 'src/api_tokens/api_tokens.service';
import { AuthService } from './auth.service';
//create & export our Users model (which can search our DB table)
@Module({
    imports:[UsersModule, TokensModule],
    controllers: [],
    providers: [UserService, ApiTokenService, AuthService],
    exports: []
})

export class AuthModule{}