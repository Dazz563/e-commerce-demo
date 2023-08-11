import {NextFunction, Request, Response} from 'express';
import {getAllActiveCategoryInputs} from '../services/category.service';

export const getCategoryInputsHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const categoryInputs = await getAllActiveCategoryInputs();

		res.status(200).json({
			status: 'success',
			results: categoryInputs.length,
			data: {
				categoryInputs,
			},
		});
	} catch (err: any) {
		next(err);
	}
};
