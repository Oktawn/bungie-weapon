import { Module } from '@nestjs/common';
import { BungieApiService } from './bungie-api.service';
import { BungieApiController } from './bungie-api.controller';
import { HttpModule } from '@nestjs/axios';
import { config } from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeaponEntity } from 'src/entity/weapons.entity';
config();
@Module({
  imports: [
    HttpModule.register({
      baseURL: process.env.BASE_URL,
      headers: {
        'X-API-Key': process.env.API_KEY
      }
    }),
    TypeOrmModule.forFeature([WeaponEntity])],
  controllers: [BungieApiController],
  providers: [BungieApiService],
})
export class BungieApiModule { }
