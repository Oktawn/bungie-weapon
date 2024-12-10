import { Module } from '@nestjs/common';
import { BungieApiService } from './bungie-api.service';
import { BungieApiController } from './bungie-api.controller';
import { HttpModule } from '@nestjs/axios';
import { config } from 'dotenv';
config();
@Module({
  imports: [
    HttpModule.register({
      baseURL: process.env.BASE_URL,
      headers: {
        'X-API-Key': process.env.API_KEY
      }
    }),],
  controllers: [BungieApiController],
  providers: [BungieApiService],
})
export class BungieApiModule { }
