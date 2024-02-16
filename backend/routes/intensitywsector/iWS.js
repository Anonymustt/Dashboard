import express from 'express';
const router = express.Router();

import Data from '../../models/dataModel.js';

router.get('/', async (req, res) => {
  try {
    const sectorIntensityData = await Data.aggregate([
      {
        $group: {
          _id: '$sector',
          averageIntensity: { $avg: '$intensity' }
        }
      }
    ]);

    const formattedData = {};
    sectorIntensityData.forEach(entry => {
      formattedData[entry._id] = entry.averageIntensity;
    });

    res.json(formattedData);
  } catch (error) {
    console.error('Error fetching sector intensity data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
