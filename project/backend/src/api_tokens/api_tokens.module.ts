import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiTokenSchema } from 'src/utils/schemas/api_token.schema';
import { UsersModule } from 'src/users/user.module';
import { UserService } from 'src/users/user.service';
import { ApiTokenService } from './api_tokens.service';

@Module({
    imports:[UsersModule, MongooseModule, MongooseModule.forFeature([{name: 'ApiKey', schema: ApiTokenSchema}])],
    controllers: [],
    providers: [UserService, ApiTokenService],
    exports: [MongooseModule.forFeature([{name: 'ApiKey', schema: ApiTokenSchema}])]
})

export class TokensModule{}