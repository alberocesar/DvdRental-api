import { Router } from 'express';

import filmeRouter from '@modules/movies/filme/api/routes/film.routes';

export const router = Router();

router.use('/filmes', filmeRouter);