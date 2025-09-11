import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoadSchema } from 'src/utils/schemas/load.schema';
import { LoadsController } from './loads.controller';
import { LoadsService } from './loads.service';
import { AuthModule } from 'src/auth/auth.module';
import { TokensModule } from 'src/api_tokens/api_tokens.module';
import { UsersModule } from 'src/users/user.module';
import { UserService } from 'src/users/user.service';

//create & export our Loads model
@Module({
    //creates our DB model for the loads table & registers the modules used in this module
    imports:[MongooseModule.forFeature([{name: 'Loads', schema: LoadSchema}]), AuthModule, TokensModule, UsersModule],
    //registers this module's controller
    controllers: [LoadsController],
    //registers the services used in this module
    providers: [LoadsService, UserService],
    //exports the loads model for use outside this module
    exports: [MongooseModule.forFeature([{name: 'Loads', schema: LoadSchema}])]
})

export class LoadsModule{}