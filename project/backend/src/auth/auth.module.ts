import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/user.module';
import { UserService } from 'src/users/user.service';
//create & export our Users model (which can search our DB table)
@Module({
    imports:[UsersModule],
    controllers: [],
    providers: [UserService],
    exports: []
})

export class AuthModule{}