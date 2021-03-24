import { Controller, Request, UseGuards, Post, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt/jwt-auth.guard';
import { LocalAuthGuard } from './local/local-auth.guard';

@Controller('auth')
export class AuthController {

  constructor(private authService:AuthService) {}
  
  @ApiTags('Authentification')
  @ApiResponse({ status: 200, description: "Retourne un access_token (JWT) de session"})
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    //return req.user;
    return this.authService.login(req.user);
  }
  
  @ApiTags('Authentification')
  @ApiResponse({ status: 200, description: "Retourne les infos de l'utilisateur connecté"})
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}

