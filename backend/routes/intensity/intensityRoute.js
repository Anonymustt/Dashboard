import express from 'express';
import intensityController from '../../controllers/intensityController.js';

const router = express.Router();
router.get('/', intensityController.getAllIntensity);
router.get('/:id', intensityController.getIntensityById);

export default router;