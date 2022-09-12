import { Book } from '../entities/Book.entity';
import { Repository } from 'typeorm';

export interface BookRepository extends Repository<Book> {
  this: Repository<Book>;

  getBookWithPassword(BookId: number): Promise<any>;
}

export const customBookRepositoryMethods: Pick<
  BookRepository,
  'getBookWithPassword'
> = {
  async getBookWithPassword(BookId: number): Promise<any> {
    try {
      const Book = await this.Books.findOne({
        where: { id: BookId },
        select: { id: true, email: true, name: true, password: true },
      });

      return { ok: true, Book };
    } catch (e) {
      return { ok: false, error: e.message };
    }
  },
};
