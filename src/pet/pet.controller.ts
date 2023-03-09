import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePetDto } from './dtos/create-pet.dto';
import { PetService } from './pet.service';

@Controller('pets')
export class PetController {
  constructor(private petService: PetService) {}

  @Get()
  async findAll() {
    return this.petService.findAll();
  }

  @Post()
  async create(@Body() pet: CreatePetDto) {
    return this.petService.create(pet);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.petService.findOne(id);
  }
}
