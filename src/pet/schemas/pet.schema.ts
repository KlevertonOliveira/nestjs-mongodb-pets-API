import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Species {
  CAT = 'Cat',
  DOG = 'Dog',
  TURTLE = 'Turtle',
}

@Schema({ timestamps: true })
export class Pet {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  species: Species;

  @Prop()
  breed: string;
}

export const PetSchema = SchemaFactory.createForClass(Pet);
