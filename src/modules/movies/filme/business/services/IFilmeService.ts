import { Filme } from "../../database/entities/filme.entity";

import { CreateFilmeDTO } from "../../dtos/CreateFilmeDTO";
import { UpdateFilmeDTO } from "../../dtos/UpdateFilmeDTO";

export interface IFilmeService {
    getFilmes(): Promise<Filme[]>;
    getFilmeById(id: number): Promise<Filme>;
    createFilme(filme: CreateFilmeDTO): Promise<Filme>;
    updateFilme(id: number, filme: UpdateFilmeDTO): Promise<Filme>;
    deleteFilme(id: number): Promise<void>;
}
