import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne, Unique } from 'typeorm';

export enum UserType {
  MEMBRE = 'member',
  MAISON_EDITION = 'editor',
  ADMIN = 'admin',
}

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  /** Nom d'utilisateur */
  @Column({unique: true})
  username: string;

  /** Mot de passe hashé avec clé privée */
  @Column()
  password: string;

  /** Type d'utilisateur */
  @Column({default: UserType.MEMBRE})
  type: UserType;

  /** Nom */
  @Column({nullable: true})
  nom: string;

  /** Prenom */
  @Column({nullable: true})
  prenom: string;

  /** @email */
  @Column({nullable: true, unique: true})
  email: string;

  /** Age */
  @Column({nullable: true})
  age: number;
  
}