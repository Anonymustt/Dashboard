import Data from "../models/dataModel.js";

const getAllRelevance = async (req, res) => {
  try {
    const relevance = await Data.find().distinct('relevance');
    res.json(relevance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRelevanceDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const datas = await Data.find({ relevance: id });
    res.json(datas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default { getAllRelevance, getRelevanceDataById };
