import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Type } from 'class-transformer';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Type(() => Date)
  @CreateDateColumn()
  createdAt: Date;

  @Type(() => Date)
  @UpdateDateColumn()
  updatedAt: Date;
}
