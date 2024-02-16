import express from 'express';
import Data from '../../models/dataModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await Data.find({ country: { $ne: "" }, likelihood: { $ne: "" } });

    const years = [...new Set(data.map(entry => entry.start_year))];

    years.sort((a, b) => a - b);

    res.json(years);
  } catch (error) {
    console.error('Error fetching available years:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
