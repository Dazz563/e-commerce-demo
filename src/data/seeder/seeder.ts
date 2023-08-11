// import {faker} from '@faker-js/faker';
// import {Post} from '../../entities/post.entity';
// import {RoleEnumType, User} from '../../entities/user.entity';
// import {AppDataSource} from '../../utils/data-source';

// const postRepository = AppDataSource.getRepository(Post);
// const userRepository = AppDataSource.getRepository(User);

// AppDataSource.initialize()
// 	.then(async () => {
// 		console.log('Connected to database...');
// 		const user = userRepository.create({
// 			id: '3acc4249-c7c7-4ce0-b87c-01564dd9ba4e',
// 			name: faker.person.firstName(),
// 			// email: faker.internet.email(),
// 			email: 'test@gmail.com',
// 			password: 'password',
// 			role: RoleEnumType.USER,
// 			photo: faker.image.avatar(),
// 			verified: true,
// 		});
// 		await userRepository.save(user);
// 		console.log('Added user to database');

// 		(async function () {
// 			try {
// 				for (let i = 0; i < 50; i++) {
// 					const postInput: Partial<Post> = {
// 						title: faker.lorem.words(4),
// 						content: faker.lorem.words(10),
// 						user: user!,
// 						image: faker.image.urlPicsumPhotos(),
// 					};

// 					await postRepository.save(postRepository.create(postInput));
// 					console.log(`Added ${postInput.title} to database`);
// 				}
// 			} catch (error) {
// 				console.log(error);
// 				process.exit(1);
// 			}
// 		})();
// 	})
// 	.catch((error: any) => console.log(error));
