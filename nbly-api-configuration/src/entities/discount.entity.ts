import { Entity, Column } from 'typeorm';
import { BaseEntity } from './index';
import { DiscountType } from 'src/utills/enum/discount';

@Entity('discounts')
export class DiscountEntity extends BaseEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  type: DiscountType;

  @Column()
  value: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;
}
