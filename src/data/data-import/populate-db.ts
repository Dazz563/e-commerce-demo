import 'reflect-metadata';

import {USERS, COMPANIES, CATEGORIES, FORMINPUTS} from './db-data';
import {AppDataSource} from '../../utils/data-source';
import {User} from '../../entities/user.entity';
import {Post} from '../../entities/post.entity';
import {Company} from '../../entities/company.entity';
import {Product} from '../../entities/product.entity';
import {DeepPartial} from 'typeorm';
import {Category} from '../../entities/category.entity';
import {FormInput} from '../../entities/formInput.entity';

const populateDB = async () => {
	await AppDataSource.initialize();

	console.log('Connected to database...');

	const companyRepository = AppDataSource.getRepository(Company);
	const userRepository = AppDataSource.getRepository(User);
	const postRepository = AppDataSource.getRepository(Post);
	const productRepository = AppDataSource.getRepository(Product);
	const categoryRepository = AppDataSource.getRepository(Category);
	const formInputRepository = AppDataSource.getRepository(FormInput);

	// Add companies to database
	const companies = Object.values(COMPANIES) as DeepPartial<Company>[]; // Convert object to array
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

	// Add users to database
	const users = USERS;
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

	// Categorized fields
	const categorizedFields = {
		Electronics: ['Manufacturer', 'Condition', 'Power source', 'Assembly required', 'Weight'],
		Art: ['Artist name & surname', 'Title of the artwork', 'Genre', 'Medium', 'Dimensions', 'Appraisal value', 'Appraisal date'],
		'Cars & Trailors': ['Make', 'Model', 'Year', 'Price', 'Mileage', 'Production Date', 'Fuel Type', 'Purchase Price', 'Purchase Date', 'Warranty expiry date', 'Proof of purchase', 'Registration number', 'Serial number', 'Vin number', 'Color', 'Transmission', 'Make/Brand', 'Detailed description'],
		Motorcycles: ['Make', 'Model', 'Year', 'Price', 'Mileage', 'Production Date', 'Fuel Type', 'Purchase Price', 'Purchase Date', 'Warranty expiry date', 'Proof of purchase', 'Registration number', 'Serial number', 'Vin number', 'Color', 'Transmission', 'Make/Brand', 'Detailed description'],
		'Investment cars': ['Make', 'Model', 'Year', 'Price', 'Mileage', 'Production Date', 'Fuel Type', 'Purchase Price', 'Purchase Date', 'Warranty expiry date', 'Proof of purchase', 'Registration number', 'Serial number', 'Vin number', 'Color', 'Transmission', 'Make/Brand', 'Detailed description'],
		'Musical Instruments': ['Instrument type', 'Detailed description'],
		'Furniture and fittings': ['Manufacturer', 'Condition', 'Power source', 'Assembly required', 'Weight'],
		Jewellery: ['Metal type', 'Stone type', 'Chain length', 'Ring size', 'Rarity level', 'Limited edition', 'Edition number'],
		Collectibles: ['Artist name & surname', 'Title of the artwork', 'Genre', 'Medium', 'Dimensions', 'Appraisal value', 'Appraisal date', 'Origin', 'Rarity level', 'Certification', 'Limited edition', 'Packaging', 'Included items'],
		'Garden equipment': ['Manufacturer', 'Condition', 'Power source', 'Assembly required', 'Weight'],
		'Kitchen appliances': ['Manufacturer', 'Condition', 'Power source', 'Assembly required', 'Weight'],
		'Road and mountain bikes': ['Make', 'Model', 'Year', 'Price', 'Mileage', 'Production Date', 'Fuel Type', 'Purchase Price', 'Purchase Date', 'Warranty expiry date', 'Proof of purchase', 'Registration number', 'Serial number', 'Vin number', 'Color', 'Transmission', 'Suspension type', 'Recommended age', 'Detailed description'],
		'Sports equipment': ['Manufacturer', 'Condition', 'Power source', 'Assembly required', 'Weight', 'Sport type', 'Sport surface', 'Equipment size', 'Grip type', 'Level', 'Recommended age'],
		Watches: ['Manufacturer', 'Condition', 'Power source', 'Assembly required', 'Weight', 'Water resistance', 'Clasp type'],
	};

	const categories = CATEGORIES;
	const formInputs = FORMINPUTS;

	// Iterate through the categories
	for (const categoryData of categories) {
		console.log(`Adding category ${categoryData.description} to database...`);

		// Create and save the category entity
		const category = categoryRepository.create({
			description: categoryData.description,
			active: categoryData.active,
			icon: categoryData.icon,
		});
		const savedCategory = await categoryRepository.save(category);

		// Find form inputs associated with the current category description
		const categoryFieldName = categoryData.description; // Get the category field name
		const formInputsForCategory = formInputs.filter((input) => categorizedFields[categoryFieldName].includes(input.description));

		// console.log(`Form inputs for ${categoryData.description}:`, formInputsForCategory);
		console.log(`Form inputs for ${categoryData.description}`);

		// Create and associate form inputs with the category
		for (const formInputData of formInputsForCategory) {
			const formInput = formInputRepository.create({
				description: formInputData.description,
				inputType: formInputData.inputType,
				inputName: formInputData.inputName,
				required: formInputData.required,
				category: [savedCategory], // Associate the form input with the saved category using an array
			});
			await formInputRepository.save(formInput);
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
