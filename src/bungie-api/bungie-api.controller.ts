import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { BungieApiService } from './bungie-api.service';

@Controller('bungie-api')
export class BungieApiController {
  constructor(
    @Inject('BUNGIE_API') private client: ClientProxy
    , private bungieApiService: BungieApiService) {
  }

  @Get('weapon')
  async getWeapon(@Query('name') name: string) {
    return this.client.send('get_weapon', name);
  }

  @MessagePattern('get_weapon')
  async getWeaponFromService(name: string) {
    return this.bungieApiService.getWeapon(name);
  }

  @Get('nameWeapons')
  async getWeaponsByName(@Query('name') name: string) {
    return this.client.send('get_name_weapons', name);
  }

  @MessagePattern('get_name_weapons')
  async getNameWeapons(name: string) {
    return this.bungieApiService.getNameWeapons(name);
  }

  @Get('weaponById')
  async getWeaponById(@Query('id') id: string) {
    return this.client.send('get_weapon_by_id', id);
  }

}
