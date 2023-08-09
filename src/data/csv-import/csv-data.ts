import 'reflect-metadata';
import csvParser from 'csv-parser';
import * as fs from 'fs';
import * as path from 'path';
import {AppDataSource} from '../../utils/data-source';
import {Company} from '../../entities/company.entity';
import {Post} from '../../entities/post.entity';
import {Product} from '../../entities/product.entity';
import {User} from '../../entities/user.entity';

const companiesFilePath = path.join(__dirname, 'companies.csv');

if (!fs.existsSync(companiesFilePath)) {
	console.error(`File not found: ${companiesFilePath}`);
	process.exit(1);
}

console.log('File found!');

const populateDB = async () => {
	await AppDataSource.initialize();

	console.log('Connected to database...');

	const companyRepository = AppDataSource.getRepository(Company);
	const userRepository = AppDataSource.getRepository(User);
	const postRepository = AppDataSource.getRepository(Post);
	const productRepository = AppDataSource.getRepository(Product);

	const companies = [];

	// Read and parse Companies CSV
	const companiesStream = fs.createReadStream(path.join(__dirname, 'companies.csv'));
	companiesStream
		.pipe(csvParser()) //
		.on('data', async (data) => {
			companies.push(data);
			console.log('Are we even getting here?');
		})
		.on('error', (error) => {
			console.error(error);
		});
	// {
	// 	const companyId = row.id;

	// 	if (!companies[companyId]) {
	// 		companies[companyId] = {
	// 			company: {
	// 				name: row.name,
	// 				industry: row.industry,
	// 				headquarters: row.headquarters,
	// 				founded: row.founded,
	// 				employees: row.employees,
	// 				revenue: row.revenue,
	// 				website: row.website,
	// 			},
	// 			products: [],
	// 		};
	// 	}

	// 	companies[companyId].products.push({
	// 		name: row.product_name,
	// 		description: row.product_description,
	// 		price: row.product_price,
	// 	});
	// });

	// Read and parse Users CSV
	// Similar logic for parsing users...

	// Close the connection after all data is inserted
	companiesStream //
		.on('end', async () => {
			console.log('COMPANIES', companies);

			// for (const companyId in companies) {
			// 	const companyData = companies[companyId];

			// 	const company = companyRepository.create(companyData.company);

			// 	const products = companyData.products.map((productData) => {
			// 		return productRepository.create({
			// 			...productData,
			// 			company: company,
			// 		});
			// 	});

			// 	// company.products = products;

			// 	await companyRepository.save(company);
			// }

			console.log('Data import completed.');
			// await AppDataSource.closeConnection();
		});
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
