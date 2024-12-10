import { Controller, Get, Param } from '@nestjs/common';
import { BungieApiService } from './bungie-api.service';

@Controller('bungie-api')
export class BungieApiController {
  constructor(private readonly bungieApiService: BungieApiService) { }


  @Get('weapon/:id')
  async getWeapon(@Param('id') id: string) {
    return this.bungieApiService.getWeapon(id);
  }

}
