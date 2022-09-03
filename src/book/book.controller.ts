import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() dto: CreateBookDto) {
    return this.bookService.create(dto);
  }

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') _id: ObjectId) {
    return this.bookService.findOne(_id);
  }

  @Patch(':id')
  update(@Param('id') _id: ObjectId, @Body() dto: UpdateBookDto) {
    return this.bookService.update(_id, dto);
  }

  @Delete(':id')
  remove(@Param('id') _id: ObjectId) {
    return this.bookService.remove(_id);
  }
}
