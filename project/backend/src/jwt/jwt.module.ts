import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JWTSchema } from 'src/utils/schemas/jwt.schema';
import { JWTRefreshSchema } from 'src/utils/schemas/jwtRefreshSchema';

//create our JWT models for adding & searching for both access & refresh tokens in their respective DB tables
@Module({
    imports:[MongooseModule.forFeature([{ name: "JWT", schema: JWTSchema }]),
    MongooseModule.forFeature([{ name: "JWTRefresh", schema: JWTRefreshSchema }])
    ],
    controllers: [],
    providers: [],
    exports: []
})

export class JwtModule{}