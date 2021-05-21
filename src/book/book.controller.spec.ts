import { Test, TestingModule } from '@nestjs/testing';
import { BookController } from './book.controller';
/** BookService */
import { BookService } from './book.service';
import { BookServiceMock } from './book.service.mock';
/** User */
import { UserService } from '../user/user.service';
import { UserServiceMocked } from '../user/user.service.mock';

describe('BookController', () => {
  let controller: BookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
      providers: [
        {
          provide: BookService,
          useClass: BookServiceMock,
        },
        {
          provide: UserService,
          useClass: UserServiceMocked,
        }
      ]
    }).compile();

    controller = module.get<BookController>(BookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
