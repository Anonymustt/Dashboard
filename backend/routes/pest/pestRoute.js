import express from 'express';
const router = express.Router();

import Data from '../../models/dataModel.js';

router.get('/', async (req, res) => {
  try {
    const pestleIntensityData = await Data.aggregate([
      {
        $match: { 
          $and: [
            { pestle: { $ne: null } },
            { pestle: { $ne: "" } }
          ]
        }
      },
      {
        $group: {
          _id: '$pestle',
          averageIntensity: { $avg: '$intensity' }
        }
      }
    ]);

    const formattedData = {};
    pestleIntensityData.forEach(entry => {
      formattedData[entry._id] = entry.averageIntensity;
    });

    res.json(formattedData);
  } catch (error) {
    console.error('Error fetching pestle intensity data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
