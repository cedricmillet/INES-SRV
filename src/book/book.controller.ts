import { Controller, Get, UseGuards, Request, Post, Body, BadRequestException } from '@nestjs/common';
/** Open API */
import { ApiResponse, ApiTags } from '@nestjs/swagger';
/** Auth guards */
import { JwtAuthGuard } from '../../old/auth/jwt/jwt-auth.guard';
/** Entities */
import { Book } from './book.entity';
import { User } from '../user/user.entity';
/** DTOs */
import { CreateBookDTO } from './dtos/create.dto';
/** Services */
import { UserService } from '../user/user.service';
import { BookService } from './book.service';


@Controller('books')
export class BookController {
  constructor(private bookService:BookService, private userService:UserService) { }
  
  /**
   * CREATE
   */
  @ApiTags('Books')
  @ApiResponse({ status: 201, description: "Livre ajouté avec succès"})
  @ApiResponse({ status: 400, description: "Un ou plrs paramètres manquants"})
  @ApiResponse({ status: 500, description: "Erreur lors de l'enregistrement"})
  @UseGuards(JwtAuthGuard)
  @Post('/')
  async ___create(@Body() bookParams: CreateBookDTO, @Request() req) {
    const creator : User= await this.userService.findOne('id', req.user.id);
    const factory = this.bookService.create({ ...bookParams, creator: creator });
    if (!(factory instanceof Book)) throw new BadRequestException("Cannot create book: " + factory);
    const saved = await this.bookService.save(factory);
    return saved;
  }

  /**
   * READ
   */
  @ApiTags('Books')
  @ApiResponse({ status: 200, description: "Retourne la liste des livres"})
  // @UseGuards(JwtAuthGuard)
  @Get('/')
  async ___read(@Request() req) {
    const books = await this.bookService.findAll();
    return books;
  }

  /**
   * UPDATE
   */


  /**
   * DELETE
   */
}
