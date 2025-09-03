import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/user.module';
import { UserService } from 'src/users/user.service';
import { TokensModule } from 'src/api_tokens/api_tokens.module';
import { TokenService } from 'src/api_tokens/api_tokens.service';

//create & export our Users model (which can search our DB table)
@Module({
    imports:[UsersModule, TokensModule],
    controllers: [],
    providers: [UserService, TokenService],
    exports: []
})

export class AuthModule{}