import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JWTSchema } from 'src/utils/schemas/jwt.schema';
import { JWTRefreshSchema } from 'src/utils/schemas/jwtRefreshSchema';
import { JwtTokenService } from './jwt.service';
import { JwtService } from '@nestjs/jwt';

//create our JWT models for adding & searching for both access & refresh tokens in their respective DB tables
@Module({
    imports:[MongooseModule.forFeature([{ name: "JwtAccess", schema: JWTSchema }]),
    MongooseModule.forFeature([{ name: "JwtRefresh", schema: JWTRefreshSchema }])
    ],
    controllers: [],
    providers: [JwtTokenService, JwtService],
    exports: [JwtTokenService]
})

export class JwtTokenModule{}