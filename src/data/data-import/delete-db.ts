import 'reflect-metadata';
import {AppDataSource} from '../../utils/data-source';
import {Product} from '../../entities/product.entity';
import {Company} from '../../entities/company.entity';
import {User} from '../../entities/user.entity';
import {Category} from '../../entities/category.entity';
import {FormInput} from '../../entities/formInput.entity';

const deleteDB = async () => {
	await AppDataSource.initialize();

	console.log('Connected to database...');

	// Child of companies must delete before company parent (contains company_id foreign key)
	console.log('Deleting products...');
	await AppDataSource.getRepository(Product).delete({});

	// Child of companies must delete before company parent (contains company_id foreign key)
	console.log('Deleting users...');
	await AppDataSource.getRepository(User).delete({});

	console.log('Deleting companies...');
	await AppDataSource.getRepository(Company).delete({});

	// Delete records from the join table first
	console.log('Deleting category_form_input records...');
	await AppDataSource.getRepository('categories_form_inputs').delete({});

	console.log('Deleting form inputs...');
	await AppDataSource.getRepository(FormInput).delete({});

	console.log('Deleting categories...');
	await AppDataSource.getRepository(Category).delete({});

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
