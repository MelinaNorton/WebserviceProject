import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoadSchema } from 'src/utils/schemas/load.schema';
import { LoadsController } from './loads.controller';
import { LoadsService } from './loads.service';
import { AuthService } from 'src/auth/auth.service';
import { UserService } from 'src/users/user.service';
import { ApiTokenService } from 'src/api_tokens/api_tokens.service';
import { AuthModule } from 'src/auth/auth.module';
import { TokensModule } from 'src/api_tokens/api_tokens.module';
//create & export our Loads model
@Module({
    imports:[MongooseModule.forFeature([{name: 'Loads', schema: LoadSchema}]), AuthModule, TokensModule],
    controllers: [LoadsController],
    providers: [LoadsService],
    exports: [MongooseModule.forFeature([{name: 'Loads', schema: LoadSchema}])]
})

export class LoadsModule{}