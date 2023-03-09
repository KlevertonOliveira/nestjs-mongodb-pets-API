import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pet } from './schemas/pet.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class PetService {
  constructor(@InjectModel(Pet.name) private petModel: mongoose.Model<Pet>) {}

  async findAll(): Promise<Pet[]> {
    const pets = await this.petModel.find();
    return pets;
  }
}
