import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
/** config */
import { config } from './config';
/** OPEN API */
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  console.log(`Starting, NODE_ENV=${process.env.NODE_ENV}`)
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  /** PIPE VALIDATORS */
  app.useGlobalPipes(
    new ValidationPipe({
      /*
            If set to true, instead of stripping non-whitelisted 
            properties validator will throw an exception.
      */
      forbidNonWhitelisted: true,
      /*
            If set to true, validator will strip validated (returned) 
            object of any properties that do not use any validation decorators.
      */
      whitelist: true,
    }),
  );
  
  /** SWAGGER */
  const swaggerCfg = new DocumentBuilder().setTitle('Open API')
    .setDescription(`Description de l'API REST`)
    .setVersion('1.0')
    .addBearerAuth().build();
  const document = SwaggerModule.createDocument(app, swaggerCfg);
  SwaggerModule.setup(config.API_DOC_ENDPOINT, app, document);

  /** START NEST APP */
  await app.listen(config.APP_LISTENING_PORT);
  console.log(`web server started at http://localhost:${config.APP_LISTENING_PORT}`);
}
bootstrap();