import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { join } from 'path';
import { Category } from 'src/categories/categories.entity';
import { OrderDetail } from 'src/orderDetails/orderDetails.entity';
import { Order } from 'src/orders/orders.entity';
import { Product } from 'src/products/products.entity';
import { User } from 'src/users/users.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
// import { join } from 'path';

dotenvConfig({ path: '.env.development' });

const config = {
  type: 'postgres',
  host: `${process.env.DB_HOST}`,
  port: `${process.env.DB_PORT}`,
  username: `${process.env.DB_USERNAME}`,
  password: `${process.env.DB_PASSWORD}`,
  database: `${process.env.DB_NAME}`,
  // migrations: ['dist/migrations/*{.ts,.js}'],
  // entities: [join(__dirname, '**', '*.entity{.ts,.js}')],
  // migrations: [join(__dirname, 'migrations', '*{.js,.ts}')],
  entities: [User, Category, OrderDetail, Order, Product],
  synchronize: true,
  logging: false,
  types: ['node', 'express', 'multer'],
  // dropSchema: true,
};

export default registerAs('typeorm', () => config);

export const connectionSource = new DataSource(config as DataSourceOptions);
