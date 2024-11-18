import { PartialType } from '@nestjs/swagger';
import { CreateBase1Dto } from './create-base1.dto';

export class UpdateBase1Dto extends PartialType(CreateBase1Dto) {}
