import express from 'express';
const router = express.Router();

import Data from '../../models/dataModel.js';

router.get('/:year', async (req, res) => {
  try {
    const { year } = req.params;

    const countryLikelihoodData = await Data.aggregate([
      {
        $match: {
          published: { $regex: year, $options: 'i' }, 
          country: { $ne: '' } 
        }
      },
      {
        $group: {
          _id: '$country',
          averageLikelihood: { $avg: '$likelihood' }
        }
      }
    ]);

    const formattedCountryData = countryLikelihoodData.map(entry => ({
      country: entry._id,
      likelihood: entry.averageLikelihood
    }));

    res.json(formattedCountryData);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
