import { PartialType } from '@nestjs/mapped-types';
import { CreateProduct2Dto } from './create-product2.dto';

export class UpdateProduct2Dto extends PartialType(CreateProduct2Dto) {}
