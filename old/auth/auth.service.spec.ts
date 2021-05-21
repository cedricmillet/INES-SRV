import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../../src/user/user.service';
import { AuthService } from './auth.service';
import { UserServiceMocked } from '../../src/user/user.service.mock';
import { JwtService } from '@nestjs/jwt';
import { JWTServiceMocked } from './jwt/jwt.service.mock';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UserService,
          useClass: UserServiceMocked,
        },
        {
          provide: JwtService,
          useClass: JWTServiceMocked,
        },
         
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
