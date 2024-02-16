import express from 'express';

const router = express.Router();
import regionController from '../../controllers/regionController.js';

router.get('/', regionController.getAllRegions);
router.get('/:id', regionController.getRegionById);

export default router;
