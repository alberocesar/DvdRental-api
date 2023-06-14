import { CreateFilmeDTO } from "../../dtos/CreateFilmeDTO";
import { UpdateFilmeDTO } from "../../dtos/UpdateFilmeDTO";
import { Filme } from "../entities/filme.entity";

export interface IFilmeRepository {
    getFilme(): Promise<Filme[]>;
    getFilmeById(film_id: number): Promise<Filme>;
    createFilme(filme: CreateFilmeDTO): Promise<Filme>;
    updateFilme(id: number, filme: UpdateFilmeDTO): Promise<Filme>;
    deleteFilme(id: number): Promise<void>;
}