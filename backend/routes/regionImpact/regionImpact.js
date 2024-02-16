import express from 'express';
const router = express.Router();

import Data from '../../models/dataModel.js';

router.get('/', async (req, res) => {
  try {
    const rawData = await Data.find();

    const filteredData = rawData.filter(entry => entry.region && entry.region.trim() !== '' && entry.impact !== null && entry.impact !== '');

    const aggregatedData = filteredData.reduce((acc, entry) => {
      const region = entry.region.trim();
      const impact = parseInt(entry.impact); 
      if (!acc[region]) {
        acc[region] = impact; 
      } else {
        acc[region] += impact; 
      }
      return acc;
    }, {});

    res.json(aggregatedData);
  } catch (error) {
    console.error('Error fetching region impact data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
