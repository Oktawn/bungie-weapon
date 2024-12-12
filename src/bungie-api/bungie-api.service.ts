import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WeaponEntity } from 'src/entity/weapons.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BungieApiService {

  constructor(
    @InjectRepository(WeaponEntity) private weaponRepository: Repository<WeaponEntity>,
    private httpService: HttpService) { }


  async getWeapon(name: string) {
    try {
      const hasWeapon = await this.weaponRepository.findOne({ where: { name: name } });
      if (!hasWeapon) throw new BadRequestException('Weapon not found');
      const id = hasWeapon.id;
      const res = await this.httpService.axiosRef.get(`/Destiny2/Manifest/DestinyInventoryItemDefinition/${id}`);
      if (res.status !== 200) throw new BadRequestException('Weapon not found');
      return res.data.Response.stats.stats;
    } catch (error) {
      throw new BadRequestException();
    }

  }

}
