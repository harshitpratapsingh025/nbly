import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DiscountEntity } from 'src/entities';
@Injectable()
export class DiscountsService {
  constructor(
    @InjectRepository(DiscountEntity)
    private readonly discountRepository: Repository<DiscountEntity>,
  ) {}
  createDiscount(payload) {
    const poll = this.discountRepository.create(payload);
    return this.discountRepository.save(poll);
  }
}
