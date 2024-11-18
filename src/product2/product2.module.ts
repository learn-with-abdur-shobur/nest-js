import { Module } from '@nestjs/common';
import { Product2Controller } from './product2.controller';
import { Product2Service } from './product2.service';

@Module({
  controllers: [Product2Controller],
  providers: [Product2Service],
})
export class Product2Module {}
