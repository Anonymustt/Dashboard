import Data from '../models/dataModel.js';
const getAllTopics = async (req, res) => {
  try {
    const topics = await Data.find().distinct('topic');
    res.json(topics);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTopicById = async (req, res) => {
  const { id } = req.params;
  try {
    const datas = await Data.find({ topic: id });
    res.json(datas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default { getAllTopics, getTopicById }