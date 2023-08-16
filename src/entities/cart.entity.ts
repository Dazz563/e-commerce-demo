import {Entity, JoinColumn, ManyToOne, OneToMany, OneToOne} from 'typeorm';
import Model from './model.entity';
import {User} from './user.entity';
import {CartItem} from './cartItem.entity';

@Entity('carts')
export class Cart extends Model {
	@OneToOne(() => User, (user) => user.cart, {
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	@JoinColumn({name: 'user_id'})
	user: User;

	@OneToMany(() => CartItem, (cartItem) => cartItem.cart)
	cartItems: CartItem[];
}
