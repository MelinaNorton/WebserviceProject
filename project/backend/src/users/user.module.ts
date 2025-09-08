import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/utils/schemas/user.schema';
import { UserService } from './user.service';
import { UserController } from './user.controller';

//create & export our Users model (which can search our DB table)
@Module({
    //creates the User model for the users table in the DB
    imports:[MongooseModule, MongooseModule.forFeature([{name: 'User', schema: UserSchema}])],
    //registers this module's controller
    controllers: [UserController],
    //registers the service used in this module
    providers: [UserService],
    //exports the model for use outside the module
    exports: [MongooseModule.forFeature([{name: 'User', schema: UserSchema}])]
})

export class UsersModule{}