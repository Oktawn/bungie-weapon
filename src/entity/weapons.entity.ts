import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('weapon')
export class WeaponEntity {

  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  type: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column({ type: 'array' })
  stats: string[];
}