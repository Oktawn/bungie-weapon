import { ApiSchema } from "@nestjs/swagger";
import { Column, Entity, PrimaryColumn } from "typeorm";

@ApiSchema({
  name: 'WeaponEntity',
})
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