import { Filme } from "../entities/filme.entity";

export interface IFilmeRepository {
    getFilme(): Promise<Filme[]>;
    getFilmeById(id: number): Promise<Filme>;
    createFilme(filme: Filme): Promise<Filme>;
    updateFilme(id: number, filme: Filme): Promise<Filme>;
    deleteFilme(id: number): Promise<Filme>;
}