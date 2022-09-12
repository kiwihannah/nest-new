import { Book } from '../entities/Book.entity';
import { Repository } from 'typeorm';

export interface BookRepository extends Repository<Book> {
  this: Repository<Book>;

  findOneById(BookId: number): Promise<any>;
}

export const customBookRepositoryMethods: Pick<BookRepository, 'findOneById'> =
  {
    async findOneById(BookId: number): Promise<any> {
      try {
        const Book = await this.Books.findOne({
          where: { id: BookId },
          select: { id: true, title: true, author: true },
        });

        return { ok: true, Book };
      } catch (e) {
        return { ok: false, error: e.message };
      }
    },
  };
