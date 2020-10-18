import {Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn} from 'typeorm';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  // @UpdateDateColumn("updated_at")
  // updatedAt: Date;
  // @CreateDateColumn("created_at")
  // createdAt: Date;

  
}