import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Pet, Species } from '../schemas/pet.schema';

export class CreatePetDto extends Pet {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsNotEmpty()
  @IsEnum(Species)
  species: Species;

  @IsNotEmpty()
  @IsString()
  breed: string;
}
