
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>) { }
  
  async findOneByUsername(username: string): Promise<User | undefined> {
    return await this.userRepository.findOne({ username: username });
  }
  create = (data) : User => this.userRepository.create(data as Object);
  save = async (e: User) => await this.userRepository.save(e);
  findAll = async () => await this.userRepository.find();
  findOne = async (field: string, value: any): Promise<User | undefined> => await this.userRepository.findOne({ [field]: value });
}
