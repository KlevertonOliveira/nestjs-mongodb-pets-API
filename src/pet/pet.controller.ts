import { Controller, Get } from '@nestjs/common';
import { PetService } from './pet.service';

@Controller('pets')
export class PetController {
  constructor(private petService: PetService) {}

  @Get()
  async findAll() {
    return this.petService.findAll();
  }
}
