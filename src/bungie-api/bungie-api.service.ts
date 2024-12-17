import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WeaponEntity } from 'src/entity/weapons.entity';
import { WeaponsService } from 'src/weapons/weapons.service';
import { Like, Repository } from 'typeorm';

@Injectable()
export class BungieApiService {

  constructor(
    @InjectRepository(WeaponEntity) private weaponRepository: Repository<WeaponEntity>,
    private httpService: HttpService,
    private weaponsService: WeaponsService
  ) { }

  async getWeapon(name: string) {
    try {
      const hasWeapon = await this.weaponRepository.findOne({ where: { name: name } });
      if (!hasWeapon) {
        throw new BadRequestException('Weapon not found');
      }
      const id = hasWeapon.id;
      const res = await this.httpService.axiosRef.get(`/Destiny2/Manifest/DestinyInventoryItemDefinition/${id}`);
      if (res.status !== 200) {
        throw new InternalServerErrorException('Server error');
      }
      return this.weaponsService.getPrettyInfo(hasWeapon, res.data.Response);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }

  }

  async getNameWeapons(name: string) {
    try {
      const getWeaponsByName = await this.weaponRepository.find({ where: { name: Like(`%${name}%`) } });
      if (getWeaponsByName.length === 0) {
        throw new BadRequestException('Weapons not found');
      }

      return getWeaponsByName;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getWeaponById(id: string) {
    try {
      const hasWeapon = await this.weaponRepository.findOne({ where: { id: id } });
      if (!hasWeapon) {
        throw new BadRequestException('Weapon not found');
      }
      const res = await this.httpService.axiosRef.get(`/Destiny2/Manifest/DestinyInventoryItemDefinition/${id}`);
      if (res.status !== 200) {
        throw new InternalServerErrorException('Server error');
      }
      return this.weaponsService.getPrettyInfo(hasWeapon, res.data.Response);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

}
