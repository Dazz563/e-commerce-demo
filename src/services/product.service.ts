import {Request} from 'express';
import {Product} from '../entities/product.entity';
import {User} from '../entities/user.entity';
import {AppDataSource} from '../utils/data-source';
import {Company} from '../entities/company.entity';

const productRepository = AppDataSource.getRepository(Product);

export const createProduct = async (input: Partial<Product>, company: Company) => {
	return await productRepository.save(productRepository.create({...input, company}));
};

export const getProduct = async (postId: string) => {
	return await productRepository.findOneBy({id: postId});
};

export const findProducts = async (req: Request) => {
	const builder = productRepository.createQueryBuilder('product');

	if (req.query.search) {
		builder.where('product.name LIKE :search OR product.description LIKE :search OR product.price LIKE :search', {
			search: `%${req.query.search}%`,
		});
	}

	if (req.query.sort) {
		const sortQuery = req.query.sort === '-price' ? 'DESC' : 'ASC';
		builder.orderBy('product.title', sortQuery);
	}

	return await builder.getMany();
};

export const findProductsByCompany = async (company: Company) => {
	return await productRepository //
		.createQueryBuilder('product')
		.where('product.company = :company', {company: company.id})
		.orderBy('product.created_at', 'DESC')
		.getMany();
};
