import {Column, Entity, OneToMany} from 'typeorm';
import {Product} from './product.entity';
import Model from './model.entity';

@Entity('companies')
export class Company extends Model {
	@Column()
	name: string;

	@Column()
	industry: string;

	@Column()
	headquarters: string;

	@Column()
	founded: number;

	@Column()
	employees: number;

	@Column()
	revenue: string;

	@Column()
	website: string;

	@OneToMany(() => Product, (product) => product.company)
	products: Product[];
}
