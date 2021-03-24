import { User } from "src/user/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {
  /** PK */
  @PrimaryGeneratedColumn()
  id: number;

  /** ISBN */
  @Column({ nullable: false })
  isbn: string;

  /** Titre du livre */
  @Column({default: 'N/A'})
  title: string;

  /** Auteur du livre */
  @Column({default: 'N/A'})
  author: string; // Type author

  /** Description du livre */
  @Column({default: 'N/A'})
  synopsis: string;

  /** JSON du livre */
  @Column({default: '{}'})
  json: string;

  /** Créateur du livre */
  @ManyToOne(() => User, {eager: true})
  creator: User;
}