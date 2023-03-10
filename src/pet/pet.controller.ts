import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePetDto } from './dtos/create-pet.dto';
import { UpdatePetDto } from './dtos/update-pet.dto';
import { PetService } from './pet.service';

@ApiTags('pets')
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

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
    return this.petService.update(id, updatePetDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.petService.delete(id);
  }
}
