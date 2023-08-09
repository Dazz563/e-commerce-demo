import {Column, Entity, JoinColumn, ManyToMany} from 'typeorm';
import Model from './model.entity';
import {Category} from './category.entity';

@Entity('form_inputs')
export class FormInput extends Model {
	@Column()
	description: string;

	@Column({name: 'input_type'})
	inputType: string;

	@Column({name: 'input_name'})
	inputName: string;

	@Column()
	required: boolean;

	@ManyToMany(() => Category, (category) => category.formInputs)
	category: Category[];
}
