import express from 'express';
import sectorController from '../../controllers/sectorController.js';

const router = express.Router();
router.get('/', sectorController.getAllSectors);
router.get('/:id', sectorController.getSectorById);

export default router;
