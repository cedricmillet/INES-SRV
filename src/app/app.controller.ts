import { Controller, Get } from '@nestjs/common';
import { config } from '../config';
import { AppService } from './app.service';
import * as path from 'path';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiTags('index')
  @ApiResponse({ status: 200, description: "Retourne des infos sur l'application"})
  @Get()
  getHello() {
    return {
      project: 'ines-srv',
      production: config.PRODUCTION,
      user: {
        sessionDuration: config.APP_JWT_SESSION_DURATION, 
      },
      openapi: {
        enabled: config.APP_ENABLE_API_DOC,
        route: path.join('./', config.API_DOC_ENDPOINT)
      }
    };
  }
}
