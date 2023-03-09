import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pet } from './schemas/pet.schema';
import * as mongoose from 'mongoose';
import { CreatePetDto } from './dtos/create-pet.dto';

@Injectable()
export class PetService {
  constructor(@InjectModel(Pet.name) private petModel: mongoose.Model<Pet>) {}

  async findAll(): Promise<Pet[]> {
    return await this.petModel.find();
  }

  async create(pet: CreatePetDto): Promise<Pet> {
    return await this.petModel.create(pet);
  }

  async findOne(id: string) {
    const pet = await this.petModel.findById(id);

    if (!pet) {
      throw new NotFoundException('Pet not found');
    }

    return pet;
  }
}
