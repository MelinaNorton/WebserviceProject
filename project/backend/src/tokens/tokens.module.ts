import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TokenSchema } from 'src/utils/schemas/token.schema';
import { UsersModule } from 'src/users/user.module';
import { UserService } from 'src/users/user.service';

//create & export our Users model (which can search our DB table)
@Module({
    imports:[UsersModule],
    controllers: [],
    providers: [UserService],
    exports: [MongooseModule.forFeature([{name: 'Token', schema: TokenSchema}])]
})

export class TokensModule{}