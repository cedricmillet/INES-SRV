import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
/** ORM */
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from './ormconfig';
/** FEATURE MODULES */
import { AuthModule } from '../old/auth/auth.module';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';


@Module({
  imports: [
    /** ORM */
    TypeOrmModule.forRoot(ormconfig),
    /** FEATURES MODULES */
    AuthModule,
    UserModule,
    BookModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private appService: AppService) {
  }
  
  onApplicationBootstrap() {
    this.appService.populateDefaultDatabaseIfNecessary();
  }
  
}
