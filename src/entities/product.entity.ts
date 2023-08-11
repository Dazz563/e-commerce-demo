import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';
import {Company} from './company.entity';
import Model from './model.entity';

@Entity('products')
export class Product extends Model {
	@Column()
	name: string;

	@Column()
	description: string;

	// @Column()
	// category: string;

	@Column()
	price: number;

	@ManyToOne(() => Company, (company) => company.products, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	@JoinColumn({name: 'company_id'})
	company!: Company;
}
