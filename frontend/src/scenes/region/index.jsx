import React, { useState, useEffect } from 'react';
import PieChart from '../../components/PieChart';
const Index = () => {
  const [sectorIntensityData, setSectorIntensityData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/regionImpact');
      if (!response.ok) {
        throw new Error('Failed to fetch sector intensity data');
      }
      const data = await response.json();
      console.log(data);
      setSectorIntensityData(data);
    } catch (error) {
      console.error('Error fetching sector intensity data:', error);
    }
  };

  return (
    <div>
      <h1>Intensity vs Sector Line Chart</h1>
      {
        <PieChart data={sectorIntensityData} />
      }
    </div>
  );
};

export default Index;
