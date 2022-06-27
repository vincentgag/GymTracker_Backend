import { ApiProperty } from '@nestjs/swagger';
import { Exercice } from 'src/exercices/entities/exercice.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Equipement extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id: string;

  @Column()
  @ApiProperty()
  name: string;

  @Column()
  @ApiProperty()
  description: string;

  @ManyToMany(() => Exercice, (exercice) => exercice.equipements)
  exercices: Exercice[];
}
