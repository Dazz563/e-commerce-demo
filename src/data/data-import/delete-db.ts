import 'reflect-metadata';
import {AppDataSource} from '../../utils/data-source';
import {Product} from '../../entities/product.entity';
import {Company} from '../../entities/company.entity';
import {Post} from '../../entities/post.entity';
import {User} from '../../entities/user.entity';

const deleteDB = async () => {
	await AppDataSource.initialize();

	console.log('Connected to database...');

	console.log('Deleting products...');
	await AppDataSource.getRepository(Product).delete({});

	console.log('Deleting companies...');
	await AppDataSource.getRepository(Company).delete({});

	console.log('Deleting posts...');
	await AppDataSource.getRepository(Post).delete({});

	console.log('Deleting users...');
	await AppDataSource.getRepository(User).delete({});

	console.log('Database deleted...');
};

deleteDB()
	.then(() => {
		console.log('Database deleting successful');
		process.exit(0);
	})
	.catch((err) => {
		console.log('Error populating database', err);
	});
