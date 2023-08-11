import {DeepPartial} from 'typeorm';
import {Category} from '../../entities/category.entity';
import {FormInput} from '../../entities/formInput.entity';
import {RoleEnumType} from '../../entities/user.entity';

export const COMPANIES: any = {
	1: {
		name: 'TechCo Innovations',
		industry: 'Technology',
		headquarters: 'Silicon Valley, USA',
		founded: 2010,
		employees: 1500,
		revenue: '$500 million',
		website: 'https://www.techcoinnovations.com',
		products: [
			{
				prodName: 'TechCo Cloud',
				description: 'Cloud storage and computing',
				category: 'test-category',
				price: 50,
			},
			{
				prodName: 'TechCo Analytics',
				description: 'Data analytics and insights',
				category: 'test-category',
				price: 100,
			},
			{
				prodName: 'TechCo Security',
				description: 'Cybersecurity and threat detection',
				category: 'test-category',
				price: 150,
			},
		],
		users: [
			{
				name: 'Darren',
				email: 'test1@gmail.com',
				password: 'password',
				role: RoleEnumType.ADMIN,
				verified: true,
			},
			{
				name: 'Balion',
				email: 'test6@gmail.com',
				password: 'password',
				role: RoleEnumType.ADMIN,
				verified: true,
			},
		],
	},
	2: {
		name: 'GreenEco Solutions',
		industry: 'Renewable Energy',
		headquarters: 'Berlin, Germany',
		founded: 2008,
		employees: 800,
		revenue: '$300 million',
		website: 'https://www.greenecosolutions.com',
		products: [
			{
				prodName: 'GreenEco Solar',
				description: 'Solar panels and solar energy',
				category: 'test-category',
				price: 50,
			},
			{
				prodName: 'GreenEco Wind',
				description: 'Wind turbines and wind energy',
				category: 'test-category',
				price: 100,
			},
		],
		users: [
			{
				name: 'Eric',
				email: 'test2@gmail.com',
				category: 'test-category',
				password: 'password',
				role: RoleEnumType.ADMIN,
				verified: true,
			},
		],
	},
	3: {
		name: 'GlobalFood Enterprises',
		industry: 'Food and Beverage',
		headquarters: 'New York City, USA',
		founded: 1995,
		employees: 3000,
		revenue: '$1.2 billion',
		website: 'https://www.globalfoodenterprises.com',
		products: [
			{
				prodName: 'GlobalFood Drinks',
				description: 'Soft drinks and beverages',
				category: 'test-category',
				price: 50,
			},
			{
				prodName: 'GlobalFood Snacks',
				description: 'Snacks and confectionery',
				category: 'test-category',
				price: 100,
			},
			{
				prodName: 'GlobalFood Dairy',
				description: 'Dairy products and milk',
				category: 'test-category',
				price: 150,
			},
			{
				prodName: 'GlobalFood Meat',
				description: 'Meat and poultry',
				category: 'test-category',
				price: 200,
			},
			{
				prodName: 'GlobalFood Seafood',
				description: 'Seafood and fish',
				category: 'test-category',
				price: 250,
			},
		],
		users: [
			{
				name: 'Vern',
				email: 'test3@gmail.com',
				password: 'password',
				role: RoleEnumType.ADMIN,
				verified: true,
			},
		],
	},
	4: {
		name: 'SwiftLogistics',
		industry: 'Logistics and Transportation',
		headquarters: 'Tokyo, Japan',
		founded: 2012,
		employees: 1200,
		revenue: '$400 million',
		website: 'https://www.swiftlogistics.com',
		products: [
			{
				prodName: 'SwiftLogistics Air',
				description: 'Air freight and cargo',
				category: 'test-category',
				price: 50,
			},
			{
				prodName: 'SwiftLogistics Sea',
				description: 'Sea freight and cargo',
				category: 'test-category',
				price: 100,
			},
		],
		users: [
			{
				name: 'Mark',
				email: 'test4@gmail.com',
				password: 'password',
				role: RoleEnumType.ADMIN,
				verified: true,
			},
		],
	},
	5: {
		name: 'HealthWell Pharmaceutics',
		industry: 'Pharmaceuticals',
		headquarters: 'London, UK',
		founded: 1990,
		employees: 2500,
		revenue: '$800 million',
		website: 'https://www.healthwellpharma.com',
		products: [
			{
				prodName: 'HealthWell Drugs',
				description: 'Medicines and drugs',
				category: 'test-category',
				price: 50,
			},
			{
				prodName: 'HealthWell Supplements',
				description: 'Vitamins and supplements',
				category: 'test-category',
				price: 100,
			},
			{
				prodName: 'HealthWell Devices',
				description: 'Medical devices and equipment',
				category: 'test-category',
				price: 150,
			},
		],
		users: [
			{
				name: 'Rowena',
				email: 'test5@gmail.com',
				password: 'password',
				role: RoleEnumType.ADMIN,
				verified: true,
			},
		],
	},
};

// export const USERS: DeepPartial<User[]> = [
// 	{
// 		name: 'Darren',
// 		email: 'test1@gmail.com',
// 		password: 'password',
// 		role: RoleEnumType.ADMIN,
// 		verified: true,
// 		posts: [
// 			{
// 				title: 'Post 1',
// 				content: 'Post 1 content',
// 				image: 'https://picsum.photos/200/300',
// 			},
// 			{
// 				title: 'Post 2',
// 				content: 'Post 2 content',
// 				image: 'https://picsum.photos/200/300',
// 			},
// 			{
// 				title: 'Post 3',
// 				content: 'Post 3 content',
// 				image: 'https://picsum.photos/200/300',
// 			},
// 			{
// 				title: 'Post 4',
// 				content: 'Post 4 content',
// 				image: 'https://picsum.photos/200/300',
// 			},
// 		],
// 	},
// 	{
// 		name: 'Mark',
// 		email: 'test2@gmail.com',
// 		password: 'password',
// 		role: RoleEnumType.ADMIN,
// 		verified: true,
// 		posts: [
// 			{
// 				title: 'Post 5',
// 				content: 'Post 5 content',
// 				image: 'https://picsum.photos/200/300',
// 			},
// 		],
// 	},
// ];

export const FORMINPUTS: DeepPartial<FormInput[]> = [
	{
		description: 'Make',
		inputType: 'text',
		inputName: 'make',
		required: true,
	},
	{
		description: 'Model',
		inputType: 'text',
		inputName: 'model',
		required: true,
	},
	{
		description: 'Year',
		inputType: 'number',
		inputName: 'year',
		required: true,
	},
	{
		description: 'Price',
		inputType: 'number',
		inputName: 'price',
		required: true,
	},
	{
		description: 'Mileage',
		inputType: 'number',
		inputName: 'mileage',
		required: true,
	},
	{
		description: 'Production Date',
		inputType: 'date',
		inputName: 'productionDate',
		required: true,
	},
	{
		description: 'Fuel Type',
		inputType: 'text',
		inputName: 'fuelType',
		required: true,
	},
	{
		description: 'Purchase Price',
		inputType: 'number',
		inputName: 'purchasePrice',
		required: true,
	},
	{
		description: 'Purchase Date',
		inputType: 'date',
		inputName: 'purchaseDate',
		required: true,
	},
	{
		description: 'Warranty expiry date',
		inputType: 'date',
		inputName: 'warrantyExpiryDate',
		required: true,
	},
	{
		description: 'Proof of purchase',
		inputType: 'boolean',
		inputName: 'proofOfPurchase',
		required: true,
	},
	{
		description: 'Artist name & surname',
		inputType: 'text',
		inputName: 'artistName',
		required: true,
	},
	{
		description: 'Title of the artwork',
		inputType: 'text',
		inputName: 'title',
		required: true,
	},
	{
		description: 'Genre',
		inputType: 'text',
		inputName: 'genre',
		required: true,
	},
	{
		description: 'Medium',
		inputType: 'text',
		inputName: 'medium',
		required: true,
	},
	{
		description: 'Dimensions',
		inputType: 'text',
		inputName: 'dimensions',
		required: true,
	},
	{
		description: 'Appraisal value',
		inputType: 'currency',
		inputName: 'appraisalValue',
		required: true,
	},
	{
		description: 'Appraisal date',
		inputType: 'date',
		inputName: 'appraisalDate',
		required: true,
	},
	{
		description: 'Make/Brand',
		inputType: 'text',
		inputName: 'makeOrBrand',
		required: true,
	},
	{
		description: 'Registration number',
		inputType: 'text',
		inputName: 'registrationNumber',
		required: true,
	},
	{
		description: 'Serial number',
		inputType: 'text',
		inputName: 'serialNumber',
		required: true,
	},
	{
		description: 'Vin number',
		inputType: 'text',
		inputName: 'vinNumber',
		required: true,
	},
	{
		description: 'Instrument type',
		inputType: 'text',
		inputName: 'instrumentType',
		required: true,
	},
	{
		description: 'Color',
		inputType: 'text',
		inputName: 'color',
		required: true,
	},
	{
		description: 'Detailed description',
		inputType: 'text',
		inputName: 'detailedDescription',
		required: true,
	},
	{
		description: 'Transmission',
		inputType: 'text',
		inputName: 'transmission',
		required: true,
	},
	{
		description: 'Manufacturer',
		inputType: 'text',
		inputName: 'manufacturer',
		required: true,
	},
	{
		description: 'Condition',
		inputType: 'text',
		inputName: 'condition',
		required: true,
	},
	{
		description: 'Power source',
		inputType: 'text',
		inputName: 'powerSource',
		required: true,
	},
	{
		description: 'Assembly required',
		inputType: 'boolean',
		inputName: 'assemblyRequired',
		required: true,
	},
	{
		description: 'Weight',
		inputType: 'number',
		inputName: 'weight',
		required: true,
	},
	{
		description: 'Metal type',
		inputType: 'text',
		inputName: 'metalType',
		required: true,
	},
	{
		description: 'Stone type',
		inputType: 'text',
		inputName: 'stoneType',
		required: true,
	},
	{
		description: 'Chain length',
		inputType: 'number',
		inputName: 'chainLength',
		required: true,
	},
	{
		description: 'Ring size',
		inputType: 'number',
		inputName: 'ringSize',
		required: true,
	},
	{
		description: 'Rarity level',
		inputType: 'text',
		inputName: 'rarityLevel',
		required: true,
	},
	{
		description: 'Limited edition',
		inputType: 'boolean',
		inputName: 'limitedEdition',
		required: true,
	},
	{
		description: 'Edition number',
		inputType: 'number',
		inputName: 'editionNumber',
		required: true,
	},
	{
		description: 'Suspension type',
		inputType: 'text',
		inputName: 'suspensionType',
		required: true,
	},
	{
		description: 'Reccomended age',
		inputType: 'number',
		inputName: 'reccomendedAge',
		required: true,
	},
	{
		description: 'Water resistence',
		inputType: 'text',
		inputName: 'waterResistence',
		required: true,
	},
	{
		description: 'Clasp type',
		inputType: 'text',
		inputName: 'claspType',
		required: true,
	},
];

export const CATEGORIES: DeepPartial<Category[]> = [
	{
		categoryName: 'Electronics',
		active: true,
		icon: 'icon.svg',
	},
	{
		categoryName: 'Art',
		active: true,
		icon: 'icon.svg',
	},
	{
		categoryName: 'Cars & Trailors',
		active: true,
		icon: 'icon.svg',
	},
	{
		categoryName: 'Motorcycles',
		active: true,
		icon: 'icon.svg',
	},
	{
		categoryName: 'Investment cars',
		active: true,
		icon: 'icon.svg',
	},
	{
		categoryName: 'Musical Instruments',
		active: true,
		icon: 'icon.svg',
	},
	{
		categoryName: 'Furniture and fittings',
		active: true,
		icon: 'icon.svg',
	},
	{
		categoryName: 'Jewellery',
		active: true,
		icon: 'icon.svg',
	},
	{
		categoryName: 'Collectibles',
		active: true,
		icon: 'icon.svg',
	},
	{
		categoryName: 'Garden equipment',
		active: true,
		icon: 'icon.svg',
	},
	{
		categoryName: 'Kitchen appliances',
		active: true,
		icon: 'icon.svg',
	},
	{
		categoryName: 'Road and mountain bikes',
		active: true,
		icon: 'icon.svg',
	},
	{
		categoryName: 'Sports equipment',
		active: true,
		icon: 'icon.svg',
	},
	{
		categoryName: 'Watches',
		active: true,
		icon: 'icon.svg',
	},
];
