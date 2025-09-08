import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'; 
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from './users/user.module';
import { JwtModule } from '@nestjs/jwt';
import { TokensModule } from './api_tokens/api_tokens.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LoadsModule } from './loads/loads.module';

//set up nests built-in config module with basic settings, global & path
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true,
    envFilePath: ['.env.local', '.env'],
  }),
  MongooseModule.forRoot('mongodb+srv://linamelina0707:gfnmEAPfyM3BlMMJ@cluster0.gqer0il.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
  PassportModule,
  UsersModule,
  JwtModule,
  AuthModule,
  TokensModule,
  LoadsModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
