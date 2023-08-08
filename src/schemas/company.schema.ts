import {number, object, string, TypeOf} from 'zod';

export const createCompanySchema = object({
	body: object({
		name: string({
			required_error: 'Name is required',
		}),
		industry: string({
			required_error: 'Industry is required',
		}),
		headquarters: string({
			required_error: 'Headquarters is required',
		}),
		founded: number({
			required_error: 'Founded is required',
		}),
		employees: number({
			required_error: 'Employees is required',
		}),
		revenue: string({
			required_error: 'Revenue is required',
		}),
		website: string({
			required_error: 'Website is required',
		}),
	}),
});

const params = {
	params: object({
		companyId: string(),
	}),
};

export const getCompanySchema = object({
	...params,
});

export const updateCompanySchema = object({
	...params,
	body: object({
		name: string(),
		industry: string(),
		headquarters: string(),
		founded: number(),
		employees: number(),
		revenue: string(),
		website: string(),
	}).partial(),
});

export const deleteCompanySchema = object({
	...params,
});

export type CreateCompanyInput = TypeOf<typeof createCompanySchema>['body'];
export type GetCompanyInput = TypeOf<typeof getCompanySchema>['params'];
export type UpdateCompanyInput = TypeOf<typeof updateCompanySchema>;
export type DeleteCompanyInput = TypeOf<typeof deleteCompanySchema>['params'];
