import { Injectable } from '@nestjs/common';
import { NameWeaponDto, WeaponBowDto, WeaponEnumTypes, WeaponFuseDto, WeaponGrenadeDto, WeaponMostDto } from './weapons.dto';
import { config } from 'dotenv';

config();
@Injectable()
export class WeaponsService {

  getPrettyInfo(name: NameWeaponDto, rawData: any) {
    const typeWeapon = rawData.itemSubType;
    let data: WeaponMostDto = {
      id: name.id,
      name: name.name,
      icon: process.env.BNG_URL + name.icon,
      watermark: process.env.BNG_URL + name.watermark,
      Impact: rawData.stats.stats['4043523819'] ? rawData.stats.stats['4043523819'].value : undefined,
      Range: rawData.stats.stats['1240592695'] ? rawData.stats.stats['1240592695'].value : undefined,
      Stability: rawData.stats.stats['155624089'] ? rawData.stats.stats['155624089'].value : undefined,
      Handling: rawData.stats.stats['943549884'] ? rawData.stats.stats['943549884'].value : undefined,
      'Reload speed': rawData.stats.stats['4188031367'] ? rawData.stats.stats['4188031367'].value : undefined,
      'Aim assistance': rawData.stats.stats['1345609583'] ? rawData.stats.stats['1345609583'].value : undefined,
      Zoom: rawData.stats.stats['3555269338'] ? rawData.stats.stats['3555269338'].value : undefined,
      'Airborne accuracy': rawData.stats.stats['2714457168'] ? rawData.stats.stats['2714457168'].value : undefined,
      RPM: rawData.stats.stats['4284893193'] ? rawData.stats.stats['4284893193'].value : undefined,
      Magazine: rawData.stats.stats['3871231066'] ? rawData.stats.stats['3871231066'].value : undefined,
      'Recoil direction': rawData.stats.stats['2715839340'] ? rawData.stats.stats['2715839340'].value : undefined,
      'Range hip-fire': 0,
      'Range ADS': 0,
      'Damage body': 0,
      'Damage crit': 0,
    }
    for (let key in data) {
      if (data[key] === undefined)
        delete data[key];
    }
    switch (typeWeapon) {
      case WeaponEnumTypes.AutoRifle:
      case WeaponEnumTypes.Shotgun:
      case WeaponEnumTypes.Machinegun:
      case WeaponEnumTypes.HandCannon:
      case WeaponEnumTypes.SniperRifle:
      case WeaponEnumTypes.PulseRifle:
      case WeaponEnumTypes.ScoutRifle:
      case WeaponEnumTypes.Sidearm:
      case WeaponEnumTypes.SubmachineGun:
      case WeaponEnumTypes.TraceRifle:
        {
          return data;
        }
      case WeaponEnumTypes.FusionRifle:
      case WeaponEnumTypes.FusionRifleLine:
        {

          let fuseData: WeaponFuseDto = {
            ...data,
            "Charge time": rawData.stats.stats['2961396640'].value
          }

          return fuseData;
        }
      case WeaponEnumTypes.GrenadeLauncher:
      case WeaponEnumTypes.RocketLauncher:
        {
          let grenadeData: WeaponGrenadeDto = {
            ...data,
            "Blast radius": rawData.stats.stats['3614673599'].value,
            Velocity: rawData.stats.stats['2523465841'].value,

          }
          return grenadeData;
        }
      case WeaponEnumTypes.Bow:
        {
          let bowData: WeaponBowDto = {
            ...data,
            "Draw time": rawData.stats.stats['447667954'].value,
            "Charge time": rawData.stats.stats['2961396640'].value,
            Accuracy: rawData.stats.stats['1591432999'].value,
          }
          return bowData;
        }
    }
  }

}
