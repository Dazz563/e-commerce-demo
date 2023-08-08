import {NextFunction, Request, Response} from 'express';
import * as csvParser from 'csv-parser';
import * as fs from 'fs';

export const getMeHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const user = res.locals.user;

		res.status(200).status(200).json({
			status: 'success',
			data: {
				user,
			},
		});
	} catch (err: any) {
		next(err);
	}
};

// export const getUserWithPostsToCsvHandler = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const user = res.locals.user;

//         const posts = await user.getPosts();

//         const csvData = posts.map((post) => {
//             return {
//                 id: post.id,
//                 title: post.title,
//                 content: post.content,
//                 createdAt: post.createdAt,
//                 updatedAt: post.updatedAt,
//             };
//         });

//         res.setHeader('Content-Type', 'text/csv');
//         res.setHeader('Content-Disposition', 'attachment; filename=\"' + 'user.csv\"');
//         res.setHeader('Cache-Control', 'no-cache');
//         res.setHeader('Pragma', 'no-cache');

//         res.status(200).status(200).json({
//             status: 'success',
//             data: {
//                 user,
//             },
//         });
//     } catch (err: any) {
//         next(err);
//     }
// };
