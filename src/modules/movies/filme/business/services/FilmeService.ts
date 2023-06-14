import { Filme } from "../../database/entities/filme.entity";
import { IFilmeRepository } from "../../database/repositories/IFilmeRepository";

import { CreateFilmeDTO } from "../../dtos/CreateFilmeDTO";
import { UpdateFilmeDTO } from "../../dtos/UpdateFilmeDTO";
import { IFilmeService } from "./IFilmeService";

export class FilmeService implements IFilmeService {
    private readonly filmeRepository: IFilmeRepository;

    constructor(filmeRepository: IFilmeRepository) {
        this.filmeRepository = filmeRepository;
    }

    async getFilmes(): Promise<Filme[]> {
        return this.filmeRepository.getFilme();
    }

    async getFilmeById(film_id: number): Promise<Filme> {
        return this.filmeRepository.getFilmeById(film_id);
    }

    async createFilme(filme: CreateFilmeDTO): Promise<Filme> {
        return this.filmeRepository.createFilme(filme);
    }

    async updateFilme(film_id: number, filme: UpdateFilmeDTO): Promise<Filme> {
        return this.filmeRepository.updateFilme(film_id, filme);
    }

    async deleteFilme(film_id: number): Promise<void> {
        return this.filmeRepository.deleteFilme(film_id);
    }


}
