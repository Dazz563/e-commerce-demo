import {AppDataSource} from '../utils/data-source';
import {Category} from '../entities/category.entity';

export const getAllActiveCategoryInputs = async () => {
	const categoryRepository = AppDataSource.getRepository(Category);

	// Fetch all categories with their associated form inputs where category active === true in acsending order
	return await categoryRepository.find({
		where: {active: true},
		order: {id: 'ASC'},
		relations: ['formInputs'],
	});
	// return await categoryRepository.find({relations: ['formInputs']});
};
