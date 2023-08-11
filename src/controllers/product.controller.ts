import {NextFunction, Request, Response} from 'express';
import {CreateProductInput, DeleteProductInput, GetProductInput, UpdateProductInput} from '../schemas/product.schema';
import {createProduct, findProducts, getProduct} from '../services/product.service';
import {findUserCompany} from '../services/user.service';
import AppError from '../utils/appError';

export const createProductHandler = async (req: Request<{}, {}, CreateProductInput>, res: Response, next: NextFunction) => {
	try {
		const user = await findUserCompany(res.locals.user.id as string);
		console.log('user: ', user);

		// check user is admin
		if (user.role !== 'admin') {
			return next(new AppError(401, 'You are not authorized to create a product'));
		}

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
		console.log('product: ', product);

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
		const posts = await findProducts(req);

		res.status(200).json({
			status: 'success',
			results: posts.length,
			data: {
				posts,
			},
		});
	} catch (err: any) {
		next(err);
	}
};

export const updateProductHandler = async (req: Request<UpdateProductInput['params'], {}, UpdateProductInput['body']>, res: Response, next: NextFunction) => {
	try {
		const post = await getProduct(req.params.productId);

		if (!post) {
			return next(new AppError(404, 'Post with that ID not found'));
		}

		Object.assign(post, req.body);

		const updatedPost = await post.save();

		res.status(200).json({
			status: 'success',
			data: {
				post: updatedPost,
			},
		});
	} catch (err: any) {
		next(err);
	}
};

export const deleteProductHandler = async (req: Request<DeleteProductInput>, res: Response, next: NextFunction) => {
	try {
		const post = await getProduct(req.params.productId);

		if (!post) {
			return next(new AppError(404, 'Post with that ID not found'));
		}

		await post.remove();

		res.status(204).json({
			status: 'success',
			data: null,
		});
	} catch (err: any) {
		next(err);
	}
};
