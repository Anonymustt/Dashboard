import Data from '../models/dataModel.js';

const getAllImpact = async (req, res) => {
  try {
    const impact = await Data.distinct('impact'); 
    res.json(impact);
  } catch (error) {
    res.status(500).json({ error: `Error fetching impact: ${error.message}` });
  }
};

const getImpactById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Data.findById(id);
    console.log(data)
    if (!data) {
      return res.status(404).json({ error: `No data found for impact with ID ${id}` });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: `Error fetching data for impact with ID ${id}: ${error.message}` });
  }
};

export default { getAllImpact, getImpactById };
