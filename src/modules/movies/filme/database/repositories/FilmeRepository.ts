import { Repository } from "typeorm";


import { IFilmeRepository } from "./IFilmeRepository";

import Filme, { CreateFilmeDTO, UpdateFilmeDTO } from "../../dtos/FIlmeDTO";

import dataSource from "@config/database/typeorm/data-Source";

export class FilmeRepository implements IFilmeRepository {
    private readonly typeormRepository: Repository<Filme>;

    constructor() {
        this.typeormRepository = dataSource.getRepository(Filme);
    }

    async getFilme(): Promise<Filme[]> {
        return await this.typeormRepository.find();
    }

    async getFilmeById(filmId: number): Promise<Filme> {
        return await this.typeormRepository.findOneBy({ filmId });
    }

    async createFilme(filme: CreateFilmeDTO): Promise<Filme> {
        const newFilme = this.typeormRepository.create(filme);
        return await this.typeormRepository.save(newFilme);
    }

    async updateFilme(id: number, filme: UpdateFilmeDTO): Promise<Filme> {
        await this.typeormRepository.update(id, filme);
        return await this.getFilmeById(id);
    }

    async deleteFilme(id: number): Promise<void> {
        const filme = await this.getFilmeById(id);
        await this.typeormRepository.delete(id);
    }
}