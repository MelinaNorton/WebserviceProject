import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiTokenSchema } from 'src/utils/schemas/api_token.schema';
import { UsersModule } from 'src/users/user.module';
import { UserService } from 'src/users/user.service';
import { ApiTokenService } from './api_tokens.service';

//module config for the api_tokens resource
@Module({
    //creates the api_token model for use within/outside the module
    imports:[UsersModule, MongooseModule, MongooseModule.forFeature([{name: 'ApiKey', schema: ApiTokenSchema}])],
    controllers: [],
    //register tye services also used in this module (only registered individyal services since their dependencies are simple)
    providers: [UserService, ApiTokenService],
    //exports the api_token model for use outside this specific module
    exports: [MongooseModule.forFeature([{name: 'ApiKey', schema: ApiTokenSchema}])]
})

export class TokensModule{}