import {number, object, string, TypeOf} from 'zod';

export const createProductSchema = object({
	body: object({
		name: string({
			required_error: 'Name is required',
		}),
		description: string({
			required_error: 'Description is required',
		}),
		price: number({
			required_error: 'Price is required',
		}),
	}),
});

const params = {
	params: object({
		productId: string(),
	}),
};

export const getProductSchema = object({
	...params,
});

export const updateProductSchema = object({
	...params,
	body: object({
		name: string(),
		description: string(),
		price: number(),
	}).partial(),
});

export const deleteProductSchema = object({
	...params,
});

export type CreateProductInput = TypeOf<typeof createProductSchema>['body'];
export type GetProductInput = TypeOf<typeof getProductSchema>['params'];
export type UpdateProductInput = TypeOf<typeof updateProductSchema>;
export type DeleteProductInput = TypeOf<typeof deleteProductSchema>['params'];
