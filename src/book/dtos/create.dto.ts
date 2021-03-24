import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsArray, ValidateNested  } from 'class-validator';

export class CreateBookDTO {
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsNotEmpty()
  @ApiProperty()
  isbn: string;

  @IsNotEmpty()
  @ApiProperty()
  synopsis: string;

}