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
				name: 'TechCo Cloud',
				description: 'Cloud storage and computing',
				price: 50,
			},
			{
				name: 'TechCo Analytics',
				description: 'Data analytics and insights',
				price: 100,
			},
			{
				name: 'TechCo Security',
				description: 'Cybersecurity and threat detection',
				price: 150,
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
				name: 'GreenEco Solar',
				description: 'Solar panels and solar energy',
				price: 50,
			},
			{
				name: 'GreenEco Wind',
				description: 'Wind turbines and wind energy',
				price: 100,
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
				name: 'GlobalFood Drinks',
				description: 'Soft drinks and beverages',
				price: 50,
			},
			{
				name: 'GlobalFood Snacks',
				description: 'Snacks and confectionery',
				price: 100,
			},
			{
				name: 'GlobalFood Dairy',
				description: 'Dairy products and milk',
				price: 150,
			},
			{
				name: 'GlobalFood Meat',
				description: 'Meat and poultry',
				price: 200,
			},
			{
				name: 'GlobalFood Seafood',
				description: 'Seafood and fish',
				price: 250,
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
				name: 'SwiftLogistics Air',
				description: 'Air freight and cargo',
				price: 50,
			},
			{
				name: 'SwiftLogistics Sea',
				description: 'Sea freight and cargo',
				price: 100,
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
				name: 'HealthWell Drugs',
				description: 'Medicines and drugs',
				price: 50,
			},
			{
				name: 'HealthWell Supplements',
				description: 'Vitamins and supplements',
				price: 100,
			},
			{
				name: 'HealthWell Devices',
				description: 'Medical devices and equipment',
				price: 150,
			},
		],
	},
};

export const USERS = {
	1: {
		name: 'Darren',
		email: 'test1@gmail.com',
		password: 'password',
		passwordConfirm: 'password',
		role: 'admin',
		verified: true,
		posts: [
			{
				title: 'Post 1',
				content: 'Post 1 content',
				image: 'https://picsum.photos/200/300',
			},
			{
				title: 'Post 2',
				content: 'Post 2 content',
				image: 'https://picsum.photos/200/300',
			},
			{
				title: 'Post 3',
				content: 'Post 3 content',
				image: 'https://picsum.photos/200/300',
			},
			{
				title: 'Post 4',
				content: 'Post 4 content',
				image: 'https://picsum.photos/200/300',
			},
		],
	},
	2: {
		name: 'Mark',
		email: 'test2@gmail.com',
		password: 'password',
		passwordConfirm: 'password',
		role: 'user',
		verified: true,
		posts: [
			{
				title: 'Post 5',
				content: 'Post 5 content',
				image: 'https://picsum.photos/200/300',
			},
		],
	},
};
