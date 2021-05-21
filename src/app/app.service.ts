import { Injectable } from '@nestjs/common';
/** CONFIG */
import { config } from '../config';
/** SERVICE */
import { UserService } from '../user/user.service';
/** CRYPT */
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AppService {

  constructor(private userService: UserService) { }

  public async populateDefaultDatabaseIfNecessary() {

    const superAdminExists = await this.userService.findOneByUsername(config.DEFAULT_SUPERUSER_NAME);
    if (!superAdminExists) {
      const logSavedData = (entity, d) => console.log(`[${entity}] ${JSON.stringify(d)}`);

      // Création duper utilisateur
      const usr = this.userService.create({
        username: config.DEFAULT_SUPERUSER_NAME,
        password: bcrypt.hashSync(config.DEFAULT_SUPERUSER_PASS, config.APP_PASSWORD_SALTHASH)
      });
      const saved = await this.userService.save(usr);
      logSavedData('USER', saved);

    }
  }

}
