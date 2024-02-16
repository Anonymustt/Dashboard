import Data from '../models/dataModel.js';

const getAllIntensity = async (req, res) => {
  try {
    const intensity = await Data.distinct('intensity');
    res.json(intensity);
    
  } catch (error) {
    res.status(500).json({ error: `Error fetching intensity: ${error.message}` });
  }
};

const getIntensityById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Data.findById(id);
    console.log(data)
    if (!data) {
      return res.status(404).json({ error: `No data found for intensity with ID ${id}` });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: `Error fetching data for intensity with ID ${id}: ${error.message}` });
  }
};


export default { getAllIntensity, getIntensityById };
