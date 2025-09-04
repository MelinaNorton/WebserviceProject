import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiTokenSchema } from 'src/utils/schemas/api_token.schema';
import { UsersModule } from 'src/users/user.module';
import { UserService } from 'src/users/user.service';
import { ApiTokenService } from './api_tokens.service';
//create & export our Users model (which can search our DB table)
@Module({
    imports:[UsersModule, MongooseModule, MongooseModule.forFeature([{name: 'ApiToken', schema: ApiTokenSchema}])],
    controllers: [],
    providers: [UserService, ApiTokenService],
    exports: [MongooseModule.forFeature([{name: 'ApiToken', schema: ApiTokenSchema}])]
})

export class TokensModule{}