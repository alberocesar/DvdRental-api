import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Filme {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    title: string;

    @Column("text")
    description: string;

    @Column("int")
    year: number;

    @Column("int")
    length: number;

    @Column("int")
    rating: number;

    @Column("int")
    votes: number;

    @Column("int")
    revenue: number;

    @Column("int")
    metascore: number;
}