// @ts-nocheck
import express from 'express';
import mainController from '../controllers/main.controller';

const router = express.Router();

router.route('/').get(mainController.getPayload);
router.route('/create-multi').post(mainController.createMultiPayload);
router.route('/reset-multi').delete(mainController.resetMultiPayload);
router.route('/create-single').post(mainController.createSinglePayload);

export default router;
