import { Module } from '@nestjs/common';
import { BungieApiService } from './bungie-api.service';
import { BungieApiController } from './bungie-api.controller';
import { HttpModule } from '@nestjs/axios';
import { config } from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeaponEntity } from 'src/entity/weapons.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { WeaponsService } from 'src/weapons/weapons.service';
config();
@Module({
  imports: [
    HttpModule.register({
      baseURL: process.env.BASE_URL,
      headers: {
        'X-API-Key': process.env.API_KEY
      }
    }),
    TypeOrmModule.forFeature([WeaponEntity]),
    ClientsModule.register([{
      name: 'BUNGIE_API',
      transport: Transport.RMQ,
      options: {
        urls: [`${process.env.RABBITMQ_URL}`],
        queue: 'bungie_queue',
        queueOptions: {
          durable: false,
        },
      },
    }])
  ],
  controllers: [BungieApiController],
  providers: [BungieApiService,WeaponsService],
})
export class BungieApiModule { }
