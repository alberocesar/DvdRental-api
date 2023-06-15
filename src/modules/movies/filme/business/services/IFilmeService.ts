import Filme, { CreateFilmeDTO, UpdateFilmeDTO } from "../../dtos/FIlmeDTO";


export interface IFilmeService {
    getFilmes(): Promise<Filme[]>;
    getFilmeById(id: number): Promise<Filme>;
    createFilme(filme: CreateFilmeDTO): Promise<Filme>;
    updateFilme(id: number, filme: UpdateFilmeDTO): Promise<Filme>;
    deleteFilme(id: number): Promise<void>;
}
