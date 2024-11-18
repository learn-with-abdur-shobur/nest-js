import { Injectable } from '@nestjs/common';
import { CreateProduct2Dto } from './dto/create-product2.dto';
import { UpdateProduct2Dto } from './dto/update-product2.dto';

@Injectable()
export class Product2Service {
  create(createProduct2Dto: CreateProduct2Dto) {
    return 'This action adds a new product2';
  }

  findAll() {
    return `This action returns all product2`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product2`;
  }

  update(id: number, updateProduct2Dto: UpdateProduct2Dto) {
    return `This action updates a #${id} product2`;
  }

  remove(id: number) {
    return `This action removes a #${id} product2`;
  }
}
