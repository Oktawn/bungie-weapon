import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BungieApiModule } from './bungie-api/bungie-api.module';
import { config } from 'dotenv';
config();
@Module({
  imports: [BungieApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
