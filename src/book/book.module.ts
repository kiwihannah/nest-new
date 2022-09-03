import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { BookRepository } from './repository/book.repository';
import { Book, BookSchema } from './entities/book.entity';
import { MongooseModule } from '@nestjs/mongoose/dist';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  controllers: [BookController],
  providers: [BookService, BookRepository],
})
export class BookModule {}
