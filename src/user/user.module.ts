import { Module } from '@nestjs/common';
/** ORM */
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
/** SERVICES */
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
