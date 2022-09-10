import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
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
  findOne(@Param('id') bookId: number) {
    return this.bookService.findOne(bookId);
  }

  @Patch(':id')
  update(@Param('id') bookId: number, @Body() dto: UpdateBookDto) {
    return this.bookService.update(bookId, dto);
  }

  @Delete(':id')
  remove(@Param('id') bookId: number) {
    return this.bookService.remove(bookId);
  }
}
