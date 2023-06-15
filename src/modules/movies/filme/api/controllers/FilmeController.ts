import { Request, Response } from 'express';

import { CreateFilmeDTO, UpdateFilmeDTO } from "../../dtos/FIlmeDTO";

import { IFilmeService } from '../../business/services/IFilmeService';
import { IFilmeController } from './IFilmeController';

export class FilmeController implements IFilmeController {
    private readonly filmeService: IFilmeService;

    constructor(filmeService: IFilmeService) {
        this.filmeService = filmeService;
    }

    public async getFilmes(req: Request, res: Response): Promise<Response> {
        const { filme} = req.params;
        return res.json(filme);
    }

    public async getFilmeById(req: Request, res: Response): Promise<Response> {
        const { film_id } = req.params;
        const filme = await this.filmeService.getFilmeById(Number(film_id));
        return res.json(film_id);
    }

    public async createFilme(req: Request, res: Response): Promise<Response> {
        const film_id = await this.filmeService.createFilme(req.body as CreateFilmeDTO);

        return res.json(film_id);
    }

    public async updateFilme(req: Request, res: Response): Promise<Response> {
        const { film_id } = req.body;
        const film = await this.filmeService.updateFilme(Number(film_id), req.body as UpdateFilmeDTO);

        return res.json(film_id);
    }

    public async deleteFilme(req: Request, res: Response): Promise<Response> {
        const { film_id} = req.params;

        await this.filmeService.deleteFilme(Number(film_id));

        return res.status(204).send();
    }
}