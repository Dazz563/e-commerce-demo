require('dotenv').config();
import 'reflect-metadata';
import {DataSource} from 'typeorm';
import config from 'config';

const mysqlConfig = config.get<{
	host: string;
	port: number;
	username: string;
	password: string;
	database: string;
}>('mysqlConfig');

export const AppDataSource = new DataSource({
	...mysqlConfig,
	type: 'mysql',
	synchronize: true,
	logging: false,
	entities: ['src/entity/**/*.entities{.ts,.js}'],
	migrations: ['src/migrations/**/*{.ts,.js}'],
	subscribers: ['src/subscribers/**/*{.ts,.js}'],
});
