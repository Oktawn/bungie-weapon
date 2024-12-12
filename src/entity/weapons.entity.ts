import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('weapons')
export class WeaponEntity {

  @PrimaryColumn()
  id: string

  @Column()
  name: string;

  @Column()
  icon: string

  @Column()
  watermark: string
}