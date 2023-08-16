import {Column, Entity, JoinColumn, ManyToOne, OneToMany} from 'typeorm';
import {Company} from './company.entity';
import Model from './model.entity';
import {CartItem} from './cartItem.entity';

@Entity('products')
export class Product extends Model {
	@Column({name: 'product_name', unique: true})
	prodName: string;

	@Column()
	description: string;

	@Column()
	category: string;

	@Column()
	price: number;

	@ManyToOne(() => Company, (company) => company.products, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	@JoinColumn({name: 'company_id'})
	company!: Company;

	@OneToMany(() => CartItem, (cartItem) => cartItem.product)
	cartItems: CartItem[];
}
