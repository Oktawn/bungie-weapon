import { OmitType } from "@nestjs/mapped-types";

export enum WeaponEnumTypes {
  AutoRifle = 6,
  Shotgun = 7,
  Machinegun = 8,
  HandCannon = 9,
  RocketLauncher = 10,
  FusionRifle = 11,
  SniperRifle = 12,
  PulseRifle = 13,
  ScoutRifle = 14,
  Crm = 16,
  Sidearm = 17,
  Sword = 18,
  Mask = 19,
  Shader = 20,
  Ornament = 21,
  FusionRifleLine = 22,
  GrenadeLauncher = 23,
  SubmachineGun = 24,
  TraceRifle = 25,
  HelmetArmor = 26,
  GauntletsArmor = 27,
  ChestArmor = 28,
  LegArmor = 29,
  ClassArmor = 30,
  Bow = 31,
  DummyRepeatableBounty = 32,
  Glaive = 33,
}

export class NameWeaponDto {
  id: string;
  name: string;
  icon: string;
  watermark: string;
}

export class BaseWeaponDto extends NameWeaponDto {

}

/**
 * DTO for most types weapons stats.
 * Types:
 * - AutoRifle: 6
 * - Shotgun: 7
 * - Machinegun: 8
 * - HandCannon: 9
 * - SniperRifle: 12
 * - PulseRifle: 13
 * - ScoutRifle: 14
 * - Sidearm: 17 // Primary
 * - SubmachineGun: 24
 * - TraceRifle: 25
 */
export class WeaponMostDto extends BaseWeaponDto {
  /** Impact of the weapon hash: 4043523819 */
  Impact: number;

  /** Range of the weapon hash: 1240592695*/
  Range: number;

  /** Stability of the weapon hash: 155624089 */
  Stability: number;

  /** Handling speed of the weapon hash: 943549884 */
  Handling: number;

  /** Reload speed of the weapon hash: 4188031367*/
  "Reload speed": number;

  /** Aim assistance of the weapon hash: 1345609583*/
  "Aim assistance": number;

  /** Zoom level of the weapon hash: 3555269338 */
  Zoom: number;

  /** Airborne accuracy of the weapon hash: 2714457168 */
  "Airborne accuracy": number;

  /** Rate of Fire (Rounds Per Minute) hash: 4284893193 */
  RPM: number;

  /** Magazine size of the weapon hash: 3871231066 */
  Magazine: number;

  /** Recoil direction of the weapon hash: 2715839340*/
  "Recoil direction": number;

  /** Range when firing from the hip */
  "Range hip-fire": number;

  /** Range when aiming down sights (ADS) */
  "Range ADS": number;

  /** Damage dealt to the body */
  "Damage body": number;

  /** Damage dealt to the critical hit areas */
  "Damage crit": number;

}

/**
 * DTO for fuse weapons stats.
 * Types:
 * - FusionRifle: 11
 * - FusionRifleLine: 22
 */
export class WeaponFuseDto extends OmitType(WeaponMostDto, ['RPM']) {
  /** Charge time of the weapon hash: 2961396640 */
  "Charge time": number;
}

/**
 * DTO for grenade and rocket weapons stats.
 * Types:
 * - GrenadeLauncher: 23
 * - RocketLauncher: 10
 */
export class WeaponGrenadeDto extends OmitType(WeaponMostDto, ['Range']) {
  /** Blast radius of the weapon hash: 3614673599 */
  "Blast radius": number;

  /** Velocity of the weapon hash: 2523465841*/
  Velocity: number;
}

/**
 * DTO for bow weapons stats.
 * Types:
 * - Bow: 31
 */
export class WeaponBowDto extends WeaponFuseDto {
  /** Draw time of the weapon hash: 447667954 */
  "Draw time": number;

  /** Accuracy of the weapon hash: 1591432999 */
  Accuracy: number;
}