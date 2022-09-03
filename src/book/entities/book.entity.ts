import { IsString, IsDate, IsInt, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop({ type: String })
  @IsString()
  title: string;

  @Prop({ type: String })
  @IsInt()
  author: string;

  @Prop()
  @IsBoolean()
  isAvailable: boolean;

  @Prop()
  @IsDate()
  createdAt: Date;

  @Prop()
  @IsDate()
  UpdatedAt: Date;
}

export const BookSchema = SchemaFactory.createForClass(Book);
