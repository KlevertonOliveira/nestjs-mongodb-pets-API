import { PartialType } from '@nestjs/mapped-types';
import { CreatePetDto } from './create-pet.dto';
export class UpdateUserDto extends PartialType(CreatePetDto) {}
