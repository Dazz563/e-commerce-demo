import {AppDataSource} from '../utils/data-source';
import {Category} from '../entities/category.entity';

export const getAllCategoryInputs = async () => {
	const categoryRepository = AppDataSource.getRepository(Category);

	// Fetch all categories with their associated form inputs
	return await categoryRepository.find({relations: ['formInputs']});
};
