import { Injectable } from '@nestjs/common';
/** SERVICES */
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
/** CRYPT */
import * as bcrypt from 'bcryptjs';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOneByUsername(username);
        /** CHECK USER EXISTS */
        if (!user) return null;
        /** CHECK USER PWD */
        if (user && bcrypt.compareSync(pass, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
    
    /** générer un access token pour un utilisateur donné */
    async login(user: User) {
        const payload = {
            sub: user.id,
            username: user.username,
            type: user.type
        };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
