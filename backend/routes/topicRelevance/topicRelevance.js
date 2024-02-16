import express from 'express';
const router = express.Router();

import Data from '../../models/dataModel.js';

router.get('/', async (req, res) => {
  try {
    const rawData = await Data.find();


    console.log("raw Data")
    const filteredData = rawData.filter(entry => entry.topic && entry.topic.trim() !== '' && entry.relevance !== null && entry.relevance !== '');

    const aggregatedData = filteredData.reduce((acc, entry) => {
      const topic = entry.topic.trim();
      const relevance = parseInt(entry.relevance); 
      if (!acc[topic]) {
        acc[topic] = relevance; 
      } else {
        acc[topic] += relevance; 
      }
      return acc;
    }, {});

    res.json(aggregatedData);
  } catch (error) {
    console.error('Error fetching topic relevance data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
