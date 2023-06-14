import { Request, Response } from 'express';


export interface IFilmeController {
    getFilmes(req: Request, res: Response): Promise<Response>;
    getFilmeById(req: Request, res: Response): Promise<Response>;
    createFilme(req: Request, res: Response): Promise<Response>;
    updateFilme(req: Request, res: Response): Promise<Response>;
    deleteFilme(req: Request, res: Response): Promise<Response>;
}