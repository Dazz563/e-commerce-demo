import 'reflect-metadata';

import {USERS, COMPANIES} from './db-data';
import {AppDataSource} from '../../utils/data-source';
import {User} from '../../entities/user.entity';
import {Post} from '../../entities/post.entity';
import {Company} from '../../entities/company.entity';
import {Product} from '../../entities/product.entity';
import {DeepPartial} from 'typeorm';

const populateDB = async () => {
	await AppDataSource.initialize();

	console.log('Connected to database...');

	const companies = Object.values(COMPANIES) as DeepPartial<Company>[]; // Convert object to array

	const companyRepository = AppDataSource.getRepository(Company);
	const userRepository = AppDataSource.getRepository(User);
	const postRepository = AppDataSource.getRepository(Post);
	const productRepository = AppDataSource.getRepository(Product);

	// Add companies to database
	for (let companyData of companies) {
		console.log(`Adding company ${companyData.name} to database...`);

		const company = companyRepository.create(companyData);

		await companyRepository.save(company);

		// Add products to database
		if (!companyData.products) continue; //null check
		for (let productData of companyData.products) {
			const product = productRepository.create(productData);

			// Add company to product (relationship, shorthand for product.company = id)
			product.company = company;

			await productRepository.save(product);
		}
	}

	const users = Object.values(USERS) as DeepPartial<User[]>;

	for (let userData of users) {
		console.log(`Adding user ${userData.name} to database...`);

		const user = userRepository.create(userData);

		await userRepository.save(user);

		// Add posts to database
		if (!userData.posts) continue; //null check
		for (let postData of userData.posts) {
			console.log(`Adding post ${postData.title} to database...`);

			const post = postRepository.create(postData);

			// Add user to post (relationship, shorthand for post.user = id)
			post.user = user;

			await postRepository.save(post);
		}
	}
};

populateDB()
	.then(() => {
		console.log('Database populated successfully');
		process.exit(0);
	})
	.catch((error: any) => {
		console.log('Error populating database', error);
		process.exit(1);
	});
