import { IsString, IsDate, IsInt, IsBoolean } from 'class-validator';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Book } from 'src/book/entities/book.entity';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ type: String })
  @IsString()
  email: string;

  @Prop({ type: String })
  @IsInt()
  password: string;

  @Prop()
  borrowedBooks: Book[];

  @Prop()
  @IsBoolean()
  createdAt: boolean;

  @Prop()
  @IsDate()
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
