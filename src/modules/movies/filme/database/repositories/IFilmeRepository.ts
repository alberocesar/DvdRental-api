import Filme, { CreateFilmeDTO, UpdateFilmeDTO } from "../../dtos/FIlmeDTO";


export interface IFilmeRepository {
    getFilme(): Promise<Filme[]>;
    getFilmeById(film_id: number): Promise<Filme>;
    createFilme(filme: CreateFilmeDTO): Promise<Filme>;
    updateFilme(id: number, filme: UpdateFilmeDTO): Promise<Filme>;
    deleteFilme(id: number): Promise<void>;
}