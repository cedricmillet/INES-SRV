
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { config } from '../../config';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.APP_JWT_PRIVATE_KEY
    });
  }

  /** properties à ajouter aux requests et accessibles dans les controllers */
  async validate(payload: any) {
    return {
      id: payload.sub,
      username: payload.username,
      role: payload.role
    };
  }
}