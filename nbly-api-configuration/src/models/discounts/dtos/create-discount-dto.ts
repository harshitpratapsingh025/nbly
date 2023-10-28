import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsDate,
  IsDateString,
} from 'class-validator';
import { DiscountType } from 'src/utills/enum/discount';
export class CreateDiscountDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  type: DiscountType;

  @IsNotEmpty()
  @IsNumber()
  value: number;

  @IsNotEmpty()
  @IsDateString()
  startDate: Date;

  @IsNotEmpty()
  @IsDateString()
  endDate: Date;
}
