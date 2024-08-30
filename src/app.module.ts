import { Module } from '@nestjs/common';
import dotenv from 'dotenv';
import { AppController } from './app.controller';
import { AppService } from './app.service'; // Import the AppService class
import { TypeOrmModule } from '@nestjs/typeorm';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}