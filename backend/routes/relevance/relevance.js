
import express from 'express';
import relevanceController from '../../controllers/relevanceController.js';

const router = express.Router();

router.get('/', relevanceController.getAllRelevance);
router.get('/:id', relevanceController.getRelevanceDataById);

export default router;
