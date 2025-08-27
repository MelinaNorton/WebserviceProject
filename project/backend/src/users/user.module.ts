import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/utils/schemas/user.schema';

//create & export our Users model (which can search our DB table)
@Module({
    imports:[],
    controllers: [],
    providers: [],
    exports: [MongooseModule.forFeature([{name: 'User', schema: UserSchema}])]
})

export class UsersModule{}