import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';
import Model from './model.entity';
import {Cart} from './cart.entity';
import {Product} from './product.entity';

@Entity('cart_items')
export class CartItem extends Model {
	@ManyToOne(() => Cart, (cart) => cart.cartItems, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	@JoinColumn({name: 'cart_id'})
	cart: Cart;

	@ManyToOne(() => Product, (product) => product.cartItems)
	@JoinColumn({name: 'product_id'})
	product: Product;

	@Column()
	quantity: number;
}
