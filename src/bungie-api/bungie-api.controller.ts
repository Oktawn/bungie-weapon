import { Controller, Get, HttpStatus, Inject, Query } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { BungieApiService } from './bungie-api.service';
import { ApiConsumes, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { NameWeaponDto, WeaponDto } from 'src/weapons/weapons.dto';

@ApiTags('Bungie API')
@Controller('bungie-api')
export class BungieApiController {
  constructor(
    @Inject('BUNGIE_API') private client: ClientProxy,
    private bungieApiService: BungieApiService) {
  }

  @Get('weapon')
  @ApiQuery({ name: 'name', required: true })
  @ApiOperation({ summary: 'Get stats weapon by name' })
  @ApiConsumes('application/json')
  @ApiResponse({ status: HttpStatus.OK, type: [WeaponDto] })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Weapons not found' })
  async getWeapon(@Query('name') name: string) {
    return this.client.send('get_weapon', name);
  }

  @Get('weaponsArrayByName')
  @ApiQuery({ name: 'name', required: true })
  @ApiOperation({ summary: 'Get an array of id`s weapon by name' })
  @ApiConsumes('application/json')
  @ApiResponse({ status: HttpStatus.OK, type: [NameWeaponDto] })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Weapons not found' })
  async getWeaponsByName(@Query('name') name: string) {
    return this.client.send('get_weapons_by_name', name);
  }

  @Get('weaponById')
  @ApiQuery({ name: 'id', required: true })
  @ApiOperation({ summary: 'Get stats weapon by id' })
  @ApiConsumes('application/json')
  @ApiResponse({ status: HttpStatus.OK, type: [WeaponDto] })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Weapons not found' })
  async getWeaponById(@Query('id') id: string) {
    return this.client.send('get_weapon_by_id', id);
  }

  @MessagePattern('get_weapon')
  async getWeaponFromService(name: string) {
    return this.bungieApiService.getWeapon(name);
  }

  @MessagePattern('get_weapons_by_name')
  async getWeaponFromServiceByName(name: string) {
    return this.bungieApiService.getNameWeapons(name);
  }

  @MessagePattern('get_weapon_by_id')
  async getWeaponFromServiceById(id: string) {
    return this.bungieApiService.getWeaponById(id);
  }

}
