import Data from '../models/dataModel.js';

const getAllSectors = async (req, res) => {
  try {
    const sectors = await Data.distinct('sector');
    res.json(sectors);
    
  } catch (error) {
    res.status(500).json({ error: `Error fetching sectors: ${error.message}` });
  }
};

const getSectorById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Data.findById(id);
    console.log(data)
    if (!data) {
      return res.status(404).json({ error: `No data found for sector with ID ${id}` });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: `Error fetching data for sector with ID ${id}: ${error.message}` });
  }
};


export default { getAllSectors, getSectorById };
