import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

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

  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  icon: string;

  @ApiProperty()
  @IsString()
  watermark: string;

}

export class BaseWeaponDto extends NameWeaponDto {

}

/**
 * DTO for all types of weapon stats.
 * Types:
 * - AutoRifle: 6
 * - Shotgun: 7
 * - Machinegun: 8
 * - HandCannon: 9
 * - RocketLauncher: 10
 * - FusionRifle: 11
 * - SniperRifle: 12
 * - PulseRifle: 13
 * - ScoutRifle: 14
 * - Crm: 16
 * - Sidearm: 17 
 * - Sword: 18
 * - FusionRifleLine: 22
 * - GrenadeLauncher: 23
 * - SubmachineGun: 24
 * - TraceRifle: 25
 * - Bow: 31
 * - Glaive: 33
 */
export class WeaponDto extends BaseWeaponDto {
  /** Impact of the weapon hash: 4043523819 */
  @ApiProperty({ description: 'Impact of the weapon' })
  @IsNumber()
  Impact: number;

  /** Range of the weapon hash: 1240592695*/
  @ApiProperty({ description: 'Range of the weapon' })
  @IsNumber()
  Range: number;

  /** Stability of the weapon hash: 155624089 */
  @ApiProperty({ description: 'Stability of the weapon' })
  @IsNumber()
  Stability: number;

  /** Handling speed of the weapon hash: 943549884 */
  @ApiProperty({ description: 'Handling speed of the weapon' })
  @IsNumber()
  Handling: number;

  /** Reload speed of the weapon hash: 4188031367*/
  @ApiProperty({ description: 'Reload speed of the weapon' })
  @IsNumber()
  "Reload speed": number;

  /** Aim assistance of the weapon hash: 1345609583*/
  @ApiProperty({ description: 'Aim assistance of the weapon' })
  @IsNumber()
  "Aim assistance": number;

  /** Zoom level of the weapon hash: 3555269338 */
  @ApiProperty({ description: 'Zoom level of the weapon' })
  @IsNumber()
  Zoom: number;

  /** Airborne accuracy of the weapon hash: 2714457168 */
  @ApiProperty({ description: 'Airborne accuracy of the weapon' })
  @IsNumber()
  "Airborne accuracy": number;

  /** Rate of Fire (Rounds Per Minute) hash: 4284893193 */
  @ApiProperty({ description: 'Rate of Fire (Rounds Per Minute)' })
  @IsNumber()
  RPM: number;

  /** Magazine size of the weapon hash: 3871231066 */
  @ApiProperty({ description: 'Magazine size of the weapon' })
  @IsNumber()
  Magazine: number;

  /** Recoil direction of the weapon hash: 2715839340*/
  @ApiProperty({ description: 'Recoil direction of the weapon' })
  @IsNumber()
  "Recoil direction": number;

  /** Charge time of the weapon hash: 2961396640 */
  @ApiProperty({ description: 'Charge time of the weapon' })
  @IsNumber()
  "Charge time": number;

  /** Blast radius of the weapon hash: 3614673599*/
  @ApiProperty({ description: 'Blast radius of the weapon' })
  @IsNumber()
  "Blast radius": number;

  /** Velocity of the weapon hash: 2523465841*/
  @ApiProperty({ description: 'Velocity of the weapon' })
  @IsNumber()
  Velocity: number;

  /** Draw time of the weapon hash: 447667954*/
  @ApiProperty({ description: 'Draw time of the weapon' })
  @IsNumber()
  "Draw time": number;

  /** Accuracy of the weapon hash: 1591432999 */
  @ApiProperty({ description: 'Accuracy of the weapon' })
  @IsNumber()
  Accuracy: number;

  /** Range when firing from the hip */
  @ApiProperty({ description: 'Range when firing from the hip' })
  @IsNumber()
  "Range hip-fire": number;

  /** Range when aiming down sights (ADS) */
  @ApiProperty({ description: 'Range when aiming down sights (ADS)' })
  @IsNumber()
  "Range ADS": number;

  /** Damage dealt to the body */
  @ApiProperty({ description: 'Damage dealt to the body' })
  @IsNumber()
  "Damage body": number;

  /** Damage dealt to the critical hit areas */
  @ApiProperty({ description: 'Damage dealt to the critical hit areas' })
  @IsNumber()
  "Damage crit": number;

}