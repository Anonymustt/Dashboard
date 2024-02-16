import React, { useState, useEffect } from 'react';
import BarChart from '../../components/BarChart'; 

const TopicPage = () => {
  const [topicData, setTopicData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/topicRelevance'); 
      if (!response.ok) {
        throw new Error('Failed to fetch topic data');
      }
      const data = await response.json();
      setTopicData(data);
    } catch (error) {
      console.error('Error fetching topic data:', error);
    }
  };

  return (
    <div>
      <h1>Topic Bar Chart</h1>
      <BarChart data={topicData} />
    </div>
  );
};

export default TopicPage;
