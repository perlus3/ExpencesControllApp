import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UsersEntity } from './users.entity';

export enum Currency {
  PLN = 'PLN',
  EURO = 'EURO',
  DOLAR = 'DOLAR',
}
@Entity()
export class AccountsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => UsersEntity, (user) => user.id)
  user: UsersEntity;

  @Column()
  value: number;

  @Column({
    type: 'enum',
    enum: Currency,
    default: Currency.PLN,
  })
  currency: Currency;
  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
