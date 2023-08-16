import crypto from 'crypto';
import {Entity, Column, Index, BeforeInsert, OneToMany, JoinColumn, OneToOne, ManyToOne} from 'typeorm';
import bcrypt from 'bcryptjs';
import Model from './model.entity';
import {Company} from './company.entity';

export enum RoleEnumType {
	USER = 'user',
	ADMIN = 'admin',
}

@Entity('users')
export class User extends Model {
	@Column()
	name: string;

	@Index('email_index')
	@Column({
		unique: true,
	})
	email: string;

	@Column()
	password: string;

	@Column({
		type: 'enum',
		enum: RoleEnumType,
		default: RoleEnumType.ADMIN,
	})
	role: RoleEnumType.ADMIN;

	@Column({
		default: 'default.png',
	})
	photo: string;

	@Column({
		default: false,
	})
	verified: boolean;

	@Index('verificationCode_index', {synchronize: false})
	@Column({
		type: 'text',
		nullable: true,
	})
	verificationCode!: string | null;

	@ManyToOne(() => Company, (company) => company.users, {
		nullable: true,
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	@JoinColumn({name: 'company_id'})
	company: Company;

	@BeforeInsert()
	async hashPassword() {
		this.password = await bcrypt.hash(this.password, 12);
	}

	static async comparePasswords(candidatePassword: string, hashedPassword: string) {
		return await bcrypt.compare(candidatePassword, hashedPassword);
	}

	static createVerificationCode() {
		const verificationCode = crypto.randomBytes(32).toString('hex');

		const hashedVerificationCode = crypto.createHash('sha256').update(verificationCode).digest('hex');

		return {verificationCode, hashedVerificationCode};
	}

	toJSON() {
		return {
			...this,
			password: undefined,
			verified: undefined,
			verificationCode: undefined,
		};
	}
}
