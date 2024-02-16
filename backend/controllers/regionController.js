import Data from '../models/dataModel.js';

const getAllRegions= async (req, res) => {
  try {
    const regions = await Data.find().distinct('region');
    res.json(regions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRegionById = async (req, res) => {
  const { id } = req.params;
  try {
    const datas = await Data.find({ region: id });
    res.json(datas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export default { getAllRegions, getRegionById };