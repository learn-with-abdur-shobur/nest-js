import { Module } from '@nestjs/common';
import { Cart2Service } from './cart2.service';

@Module({
  providers: [Cart2Service]
})
export class Cart2Module {}
