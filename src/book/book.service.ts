import { Injectable } from '@nestjs/common';
/** entities */
import { Book } from './book.entity';

/** repository */
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(@InjectRepository(Book) private repo: Repository<Book>) { }
  
  /** DAOs */
  create = (data) => this.repo.create(data);
  save = async (e: Book) => await this.repo.save(e);
  findAll = async () => await this.repo.find();
  findOne = async (field: string, value: any): Promise<Book | undefined> => await this.repo.findOne({ [field]: value });
  delete = async (id: number) => await this.repo.delete(id);
}
