import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Pet, Species } from '../schemas/pet.schema';

export class CreatePetDto extends Pet {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: `Pet's name.`,
    example: 'Tom',
  })
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: `Pet's age.`,
    example: '5',
  })
  age: number;

  @IsNotEmpty()
  @IsEnum(Species)
  @ApiProperty({
    enum: Species,
    description: `Pet's species.`,
    example: 'Cat',
  })
  species: Species;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: `Pet's breed.`,
    example: 'American Shorthair',
  })
  breed: string;
}
