import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Base1Service } from './base1.service';
import { CreateBase1Dto } from './dto/create-base1.dto';
import { UpdateBase1Dto } from './dto/update-base1.dto';

@Controller('base1')
export class Base1Controller {
  constructor(private readonly base1Service: Base1Service) {}

  @Post()
  create(@Body() createBase1Dto: CreateBase1Dto) {
    return this.base1Service.create(createBase1Dto);
  }

  @Get()
  findAll() {
    return this.base1Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.base1Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBase1Dto: UpdateBase1Dto) {
    return this.base1Service.update(+id, updateBase1Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.base1Service.remove(+id);
  }
}
