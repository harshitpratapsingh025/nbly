import { Controller, Post, Body } from '@nestjs/common';
import { CreateDiscountDto } from './dtos/create-discount-dto';
import { DiscountsService } from './discounts.service';

@Controller('discounts')
export class DiscountsController {
  constructor(private discountsService: DiscountsService) {}

  @Post('/create')
  createDiscount(@Body() body: CreateDiscountDto) {
    return this.discountsService.createDiscount(body);
  }
}
