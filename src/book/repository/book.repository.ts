import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateBookDto } from '../dto/create-book.dto';
import { Book, BookDocument } from '../entities/book.entity';

@Injectable()
export class BookRepository {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async findAll(): Promise<Book[]> {
    return await this.bookModel.find();
  }

  async findOne(_id: ObjectId): Promise<Book> {
    return await this.bookModel.findById(_id);
  }

  async update(_id: ObjectId): Promise<Book> {
    return await this.bookModel.findByIdAndUpdate(_id);
  }

  async create(dto: CreateBookDto): Promise<CreateBookDto> {
    return await this.bookModel.create(dto);
  }

  async delete(_id: ObjectId): Promise<void> {
    await this.bookModel.deleteOne(_id);
    return;
  }
}
