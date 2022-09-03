import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookRepository } from './repository/book.repository';

@Injectable()
export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}

  async create(dto: CreateBookDto) {
    return await this.bookRepository.create(dto);
  }

  async findAll() {
    return await this.bookRepository.findAll();
  }

  async findOne(_id: ObjectId) {
    return await this.bookRepository.findOne(_id);
  }

  async update(_id: ObjectId, dto: UpdateBookDto) {
    return await this.bookRepository.update(_id);
  }

  async remove(_id: ObjectId) {
    return await this.bookRepository.delete(_id);
  }
}
