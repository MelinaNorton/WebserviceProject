import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/utils/schemas/user.schema';
import { UserService } from './user.service';
import { UserController } from './user.controller';

//create & export our Users model (which can search our DB table)
@Module({
    imports:[MongooseModule, MongooseModule.forFeature([{name: 'User', schema: UserSchema}])],
    controllers: [UserController],
    providers: [UserService],
    exports: [MongooseModule.forFeature([{name: 'User', schema: UserSchema}])]
})

export class UsersModule{}