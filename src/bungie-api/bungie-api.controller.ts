import { Controller, Get, Query } from '@nestjs/common';
import { BungieApiService } from './bungie-api.service';

@Controller('bungie-api')
export class BungieApiController {
  constructor(private readonly bungieApiService: BungieApiService) { }


  @Get('weapon')
  async getWeapon(@Query('name') name: string) {
    return this.bungieApiService.getWeapon(name);
  }

}
