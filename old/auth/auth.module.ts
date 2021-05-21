/** MODULES */
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
/** SERVICES */
import { AuthService } from './auth.service';
/** STRATEGIES */
import { LocalStrategy } from './local/local.strategy';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt/jwt.strategy';
/** CONFIG */
import { config } from 'src/config';


@Module({
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
  ],
  exports: [
  ],
  imports: [
    UserModule, 
    PassportModule,
    JwtModule.register({
      secret: config.APP_JWT_PRIVATE_KEY,
      signOptions: { expiresIn: config.APP_JWT_SESSION_DURATION },
    }),
  ],
  controllers: [AuthController]
})
export class AuthModule {}
