import { Module } from '@nestjs/common';
/** ORM */
import { Book } from './book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
/** Controllers */
import { BookController } from './book.controller';
/** Services */
import { BookService } from './book.service';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [BookController],
  providers: [BookService],
  imports: [
    TypeOrmModule.forFeature([Book]),
    UserModule
  ],
  exports: [BookService]
})
export class BookModule {}
