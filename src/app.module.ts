import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BungieApiModule } from './bungie-api/bungie-api.module';
import { config } from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeaponsService } from './weapons/weapons.service';
config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    BungieApiModule],
  controllers: [AppController],
  providers: [AppService, WeaponsService],
})
export class AppModule { }
