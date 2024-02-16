import express from 'express';

const router = express.Router();
import topicController from '../../controllers/topicController.js';

router.get('/', topicController.getAllTopics);
router.get('/:id', topicController.getTopicById);

export default router;
