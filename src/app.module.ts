import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BungieApiModule } from './bungie-api/bungie-api.module';
import { config } from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: /* process.env.DB_HOST */ 'localhost',
      port: /* Number(process.env.DB_PORT) */ Number(process.env.DB_EXTERN),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    })
    , BungieApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
