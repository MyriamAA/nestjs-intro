import { registerAs } from '@nestjs/config';

// First parameter is the name of the name space
// Second is the config object
export default registerAs('database', () => ({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  pass: process.env.DB_PASS || 'postgres',
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  name: process.env.DB_NAME || 'nestjs-blog',
  synchronize: process.env.DB_SYNC === 'true' ? true : false,
  autoLoadEntities: process.env.DB_AUTLOAD === 'true' ? true : false,
}));
