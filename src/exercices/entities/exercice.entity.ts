import { Muscle } from './../../muscles/entities/muscle.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Equipement } from 'src/equipements/entities/equipement.entity';

@Entity()
export class Exercice extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id: string;

  @Column()
  @ApiProperty()
  name: string;

  @Column()
  @ApiProperty()
  description: string;

  @ManyToMany(() => Muscle, (muscle) => muscle.exercices)
  @JoinTable()
  muscles: Muscle[];

  @ManyToMany(() => Equipement, (equipement) => equipement.exercices)
  @JoinTable()
  equipements: Equipement[];
}
