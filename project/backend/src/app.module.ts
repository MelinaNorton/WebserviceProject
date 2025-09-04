import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'; 
import { PassportModule } from '@nestjs/passport';
//set up nests built-in config module with basic settings, global & path
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true,
    envFilePath: ['.env.local', '.env'],
  }),PassportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
