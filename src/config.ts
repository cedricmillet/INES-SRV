import * as path from 'path';

const PRODUCTION = process.env.NODE_ENV === 'production' ? true : false;

export const config = {
  /** ENV */
  PRODUCTION: PRODUCTION,

  /** SECURITY */
  APP_JWT_PRIVATE_KEY: 'y854av4752842',
  APP_JWT_SESSION_DURATION: '43200s', // = 12HOURS
  APP_PASSWORD_SALTHASH: '$2a$10$qLF3h6iiNbp8aE6hePOqi.', // generated with bcrypt.genSaltSync(10);

  /** APP EXPOSITION */
  APP_LISTENING_PORT: process.env.APP_LISTENING_PORT || 3000,
  APP_ENABLE_API_DOC: process.env.APP_ENABLE_API_DOC || !PRODUCTION,
  API_DOC_ENDPOINT: 'doc',

  /** SUPER-ADMIN CONFIG */
  DEFAULT_SUPERUSER_NAME: 'admin',
  DEFAULT_SUPERUSER_PASS: 'admin',

  /** DATABASE (MYSQL) */
  DB_TYPE: process.env.DB_TYPE || 'mysql', /** mysql, postgres */
  DB_NAME: process.env.DB_NAME || 'ines-srv',
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: parseInt(process.env.DB_PORT) || 3306,
  DB_USER: process.env.DB_USER || 'root',
  DB_PASS: process.env.DB_PASS || '',
  DB_ENABLE_SYNC: !PRODUCTION,
  DB_AUTORUN_MIGRATION: PRODUCTION,
  DB_MIGRATION_DIR: path.join(__dirname, "app/migrations"),
}