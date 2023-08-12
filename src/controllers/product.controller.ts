import {NextFunction, Request, Response} from 'express';
import {CreateProductInput, DeleteProductInput, GetProductInput, UpdateProductInput} from '../schemas/product.schema';
import {createProduct, findProducts, findProductsByCompany, getProduct} from '../services/product.service';
import {findUserCompany} from '../services/user.service';
import AppError from '../utils/appError';

export const adminCreateProductHandler = async (req: Request<{}, {}, CreateProductInput>, res: Response, next: NextFunction) => {
	try {
		const user = await findUserCompany(res.locals.user.id as string);

		const product = await createProduct(req.body, user.company);

		res.status(201).json({
			status: 'success',
			data: {
				product,
			},
		});
	} catch (err: any) {
		// Handle constraint violations or unique key errors
		if (err.code === 'ER_DUP_ENTRY') {
			return res.status(409).json({
				status: 'fail',
				message: 'Product with that name already exists',
			});
		}
		next(err);
	}
};

export const getProductHandler = async (req: Request<GetProductInput>, res: Response, next: NextFunction) => {
	try {
		const product = await getProduct(req.params.productId);

		if (!product) {
			return next(new AppError(404, 'Product with that ID not found'));
		}

		res.status(200).json({
			status: 'success',
			data: {
				product,
			},
		});
	} catch (err: any) {
		next(err);
	}
};

export const getProductsHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const products = await findProducts(req);

		res.status(200).json({
			status: 'success',
			results: products.length,
			data: {
				products,
			},
		});
	} catch (err: any) {
		next(err);
	}
};

// Admin get all products belonging to a company
export const adminGetProductsHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		// Get the user and the company they belong to
		const user = await findUserCompany(res.locals.user.id as string);

		// Search for all products belonging to the company
		const products = await findProductsByCompany(user.company);

		res.status(200).json({
			status: 'success',
			results: products.length,
			data: {
				products,
			},
		});
	} catch (err: any) {
		next(err);
	}
};

export const adminUpdateProductHandler = async (req: Request<UpdateProductInput['params'], {}, UpdateProductInput['body']>, res: Response, next: NextFunction) => {
	try {
		const product = await getProduct(req.params.productId);

		if (!product) {
			return next(new AppError(404, `Product with that ID not found`));
		}

		Object.assign(product, req.body);

		const updatedProduct = await product.save();

		res.status(200).json({
			status: 'success',
			data: {
				product: updatedProduct,
			},
		});
	} catch (err: any) {
		next(err);
	}
};

export const adminDeleteProductHandler = async (req: Request<DeleteProductInput>, res: Response, next: NextFunction) => {
	try {
		const product = await getProduct(req.params.productId);

		if (!product) {
			return next(new AppError(404, 'Product with that ID not found'));
		}

		await product.remove();

		res.status(204).json({
			status: 'success',
			data: null,
		});
	} catch (err: any) {
		next(err);
	}
};
