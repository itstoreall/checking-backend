import express from 'express';
import mainRouter from './main.router';

const router = express.Router();

router.use('/main', mainRouter);

export default router;
