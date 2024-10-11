import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: [
        path.resolve(__dirname, `../config/.env.${process.env.NODE_ENV}.local`),
        path.resolve(__dirname, `../config/.env.${process.env.NODE_ENV}`),
        path.resolve(__dirname, `../config/.env`),
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
