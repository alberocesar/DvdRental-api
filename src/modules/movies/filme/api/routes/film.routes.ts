import express from 'express';

import { FilmeController } from '../controllers/FilmeController';
import { FilmeService } from '../../business/services/FilmeService';
import { FilmeRepository } from '../../database/repositories/FilmeRepository';

const router = express.Router();
const filmeRepository = new FilmeRepository();
const filmeService = new FilmeService(filmeRepository);
const filmeController = new FilmeController(filmeService);

router.get('/', (req, res) => filmeController.getFilmes(req, res));
router.get('/:id', (req, res) => filmeController.getFilmeById(req, res));
router.post('/', (req, res) => filmeController.createFilme(req, res));
router.put('/:id', (req, res) => filmeController.updateFilme(req, res));
router.delete('/:id', (req, res) => filmeController.deleteFilme(req, res));

export default router;