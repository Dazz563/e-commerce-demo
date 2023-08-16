import 'reflect-metadata';
import {DeepPartial} from 'typeorm';

import {COMPANIES, CATEGORIES, FORMINPUTS, USERS} from './db-data';
import {AppDataSource} from '../../utils/data-source';
import {User} from '../../entities/user.entity';
import {Company} from '../../entities/company.entity';
import {Product} from '../../entities/product.entity';
import {Category} from '../../entities/category.entity';
import {FormInput} from '../../entities/formInput.entity';
import {Cart} from '../../entities/cart.entity';
import {CartItem} from '../../entities/cartItem.entity';

const populateDB = async () => {
	await AppDataSource.initialize();

	console.log('Connected to database...');

	const companyRepository = AppDataSource.getRepository(Company);
	const userRepository = AppDataSource.getRepository(User);
	const productRepository = AppDataSource.getRepository(Product);
	const categoryRepository = AppDataSource.getRepository(Category);
	const formInputRepository = AppDataSource.getRepository(FormInput);
	const cartRepository = AppDataSource.getRepository(Cart);
	const cartItemRepository = AppDataSource.getRepository(CartItem);

	// Add companies with employees and products to database
	const companies = Object.values(COMPANIES) as DeepPartial<Company>[]; // Convert object to array
	for (let companyData of companies) {
		console.log(`Adding company ${companyData.name} to database...`);

		const company = companyRepository.create(companyData);

		await companyRepository.save(company);

		// Add users to database
		for (let userData of companyData.users) {
			console.log(`Adding user ${userData.name} to database...`);

			const user = userRepository.create(userData);

			// Add companyId to user (relationship, shorthand for user.company = id)
			user.company = company;

			await userRepository.save(user);
		}

		// Add products to database
		if (!companyData.products) continue; //null check
		for (let productData of companyData.products) {
			console.log(`Adding product ${productData.prodName} to database...`);
			const product = productRepository.create(productData);

			// Add companyId to product (relationship, shorthand for product.company = id)
			product.company = company;

			await productRepository.save(product);
		}
	}

	// Add users for shopping with null company to database
	const users = USERS as DeepPartial<User>[];
	for (let userData of users) {
		console.log(`Adding user ${userData.name} to database...`);

		const user = userRepository.create(userData);

		await userRepository.save(user);
	}

	// Add products to these users carts and cartItems
	const john = await userRepository.findOne({where: {name: 'John'}});
	const jane = await userRepository.findOne({where: {name: 'Jane'}});

	if (john) {
		console.log(`Adding cart to user ${john.name} to database...`);

		const johnsCart = cartRepository.create();
		johnsCart.user = john;
		await cartRepository.save(johnsCart);

		const techCoCloud = await productRepository.findOne({where: {prodName: 'TechCo Cloud'}});
		const greenEcoSolar = await productRepository.findOne({where: {prodName: 'GreenEco Solar'}});

		if (techCoCloud) {
			const cartItem = cartItemRepository.create({
				cart: johnsCart,
				product: techCoCloud,
				quantity: 1, // You can set the quantity as needed
			});

			await cartItemRepository.save(cartItem);
		}
		if (greenEcoSolar) {
			const cartItem = cartItemRepository.create({
				cart: johnsCart,
				product: greenEcoSolar,
				quantity: 3, // You can set the quantity as needed
			});

			await cartItemRepository.save(cartItem);
		}
	}

	if (jane) {
		console.log(`Adding cart to user ${jane.name} to database...`);
		const janesCart = cartRepository.create();
		janesCart.user = jane;
		await cartRepository.save(janesCart);

		const globalFoodDrinks = await productRepository.findOne({where: {prodName: 'GlobalFood Drinks'}});

		if (globalFoodDrinks) {
			const cartItem = cartItemRepository.create({
				cart: janesCart,
				product: globalFoodDrinks,
				quantity: 3, // You can set the quantity as needed
			});

			await cartItemRepository.save(cartItem);
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
		console.log(`Adding category ${categoryData.categoryName} to database...`);

		// Create and save the category entity
		const category = categoryRepository.create({
			categoryName: categoryData.categoryName,
			active: categoryData.active,
			icon: categoryData.icon,
		});
		const savedCategory = await categoryRepository.save(category);

		// Find form inputs associated with the current category description
		const categoryFieldName = categoryData.categoryName; // Get the category field name
		const formInputsForCategory = formInputs.filter((input) => categorizedFields[categoryFieldName].includes(input.description));

		// console.log(`Form inputs for ${categoryData.description}:`, formInputsForCategory);
		console.log(`Form inputs for ${categoryData.categoryName}`);

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
