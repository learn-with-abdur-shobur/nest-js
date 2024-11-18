import { Injectable } from '@nestjs/common';
import { CreateBase1Dto } from './dto/create-base1.dto';
import { UpdateBase1Dto } from './dto/update-base1.dto';

@Injectable()
export class Base1Service {
  create(createBase1Dto: CreateBase1Dto) {
    return 'This action adds a new base1';
  }

  findAll() {
    return `This action returns all base1`;
  }

  findOne(id: number) {
    return `This action returns a #${id} base1`;
  }

  update(id: number, updateBase1Dto: UpdateBase1Dto) {
    return `This action updates a #${id} base1`;
  }

  remove(id: number) {
    return `This action removes a #${id} base1`;
  }
}
