import {Column, Entity, JoinTable, ManyToMany} from 'typeorm';
import Model from './model.entity';
import {FormInput} from './formInput.entity';

@Entity('categories')
export class Category extends Model {
	@Column()
	description: string;

	@Column()
	active: boolean;

	@Column()
	icon: string;

	@ManyToMany(() => FormInput, (formInput) => formInput.category)
	@JoinTable({
		name: 'category_form_input',
		joinColumn: {
			name: 'category_id', // Customize the name of the foreign key column in the junction table
			referencedColumnName: 'id',
		},
		inverseJoinColumn: {
			name: 'form_input_id', // Customize the name of the foreign key column for FormInput in the junction table
			referencedColumnName: 'id',
		},
	})
	formInputs: FormInput[];

	toJSON() {
		return {
			...this,
			created_at: undefined,
			updated_at: undefined,
		};
	}
}
