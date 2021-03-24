import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { config } from './config';
import * as path from 'path';

export default {
  type: <any>config.DB_TYPE,
  host: config.DB_HOST,
  port: config.DB_PORT,
  username: config.DB_USER,
  password: config.DB_PASS,
  database: config.DB_NAME,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: config.DB_ENABLE_SYNC,
  /** migrations */
  migrationsTableName: "migrations_table",
  migrationsRun: config.DB_AUTORUN_MIGRATION,
  migrations: [path.join(config.DB_MIGRATION_DIR, "/*.js")], /** typeorm must load migrations from this directory */
  cli: {migrationsDir: path.join("src", config.DB_MIGRATION_DIR)} /**  CLI must create new migrations in this directory, ONLY IN DEV */
};

