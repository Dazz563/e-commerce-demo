import {NextFunction, Request, Response} from 'express';
import AppError from '../utils/appError';

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
	try {
		const user = res.locals.user;

		if (user.role !== 'admin') {
			return next(new AppError(401, 'You are not authorized to access this route'));
		}

		next();
	} catch (err: any) {
		next(err);
	}
};
