import {Request, Response, NextFunction} from 'express';
import {AnyZodObject, ZodError} from 'zod';

// This function takes a schema of type AnyZodObject as input and returns a middleware function
export const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
	try {
		// The schema is used to validate the request parameters, query and body
		schema.parse({
			params: req.params,
			query: req.query,
			body: req.body,
		});

		// If the validation is successful, the middleware calls the next function in the chain
		next();
	} catch (error) {
		// If the validation fails, the middleware returns a 400 status code with the error messages
		if (error instanceof ZodError) {
			return res.status(400).json({
				status: 'fail',
				errors: error.errors,
			});
		}
		// If there is an error that is not a ZodError, the middleware calls the next function in the chain with the error
		next(error);
	}
};
