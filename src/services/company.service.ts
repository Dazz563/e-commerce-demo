// import {Request} from 'express';
// import {Company} from '../entities/company.entity';
// import {User} from '../entities/user.entity';
// import {AppDataSource} from '../utils/data-source';

// const companyRepository = AppDataSource.getRepository(Company);

// export const createCompany = async (input: Partial<Company>, users: User[]) => {
// 	return await companyRepository.save(companyRepository.create({...input, users}));
// };

// export const getCompany = async (companyId: string) => {
// 	return await companyRepository.findOneBy({id: companyId});
// };

// export const findCompany = async (req: Request) => {
// 	const builder = companyRepository.createQueryBuilder('company');

// 	if (req.query.search) {
// 		builder.where('comapny.name LIKE :search OR company.industry LIKE :search OR company.headquarters LIKE :search OR company.founded LIKE :search OR company.employees LIKE :search OR company.revenue LIKE :search OR company.website LIKE :search', {
// 			search: `%${req.query.search}%`,
// 		});
// 	}

// 	if (req.query.sort) {
// 		const sortQuery = req.query.sort === '-price' ? 'DESC' : 'ASC';
// 		builder.orderBy('post.title', sortQuery);
// 	}

// 	return await builder.getMany();
// };
