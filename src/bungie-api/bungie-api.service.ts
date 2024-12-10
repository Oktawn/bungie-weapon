import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class BungieApiService {

  constructor(private httpService: HttpService) { }


  async getWeapon(id: string) {
    try {
      const res = this.httpService.axiosRef.get(`/Destiny2/Manifest/DestinyInventoryItemDefinition/${id}`);
      const ans = (await res).data.Response.stats.stats;
      return ans;
    } catch (error) {
      throw new BadRequestException();
    }

  }

}
