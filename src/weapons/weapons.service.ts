import { Injectable } from '@nestjs/common';
import { WeaponEnumTypes } from './weapons.dto';

@Injectable()
export class WeaponsService {

  getWeapons(rawData: any) {

    const typeWeapon = rawData.itemType;

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
          return;
        }
      case WeaponEnumTypes.FusionRifle:
      case WeaponEnumTypes.FusionRifleLine:
        {
          return;
        }
      case WeaponEnumTypes.GrenadeLauncher:
      case WeaponEnumTypes.RocketLauncher:
        {
          return;
        }
      case WeaponEnumTypes.Bow:
        {
          return;
        }
    }

  }

}
