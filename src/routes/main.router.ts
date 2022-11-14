// @ts-nocheck
import express from 'express';
import mainController from '../controllers/main.controller';

const router = express.Router();

router.route('/').get(mainController.getPayload);
router.route('/create').post(mainController.createPayload);

export default router;
