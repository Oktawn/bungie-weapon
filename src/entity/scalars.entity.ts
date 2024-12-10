import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity('scalars-primary')
export class ScalarsEntity {

  @PrimaryColumn()
  id: string;

  @Column()
  type: string;

  @Column()
  value: string;



}