import { Module } from '@nestjs/common';
import { Base1Service } from './base1.service';
import { Base1Controller } from './base1.controller';

@Module({
  controllers: [Base1Controller],
  providers: [Base1Service],
})
export class Base1Module {}
