import React, { useState, useEffect } from 'react';
import Dropdown from '../../components/Dropdown';
import HorizontalBarChart from '../../components/HorizontalBar';

const Country = () => {
  const [selectedYear, setSelectedYear] = useState('');
  const [availableYears, setAvailableYears] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAvailableYears();
  }, []);

  const fetchAvailableYears = async () => {
    try {
      const response = await fetch(`${process.env.BACKEND_URL}/api/years`);
      const years = await response.json();
      setAvailableYears(years);
    } catch (error) {
      console.error('Error fetching available years:', error);
      setError('Failed to fetch available years');
    }
  };

  useEffect(() => {
    if (selectedYear) {
      fetchChartData();
    }
  }, [selectedYear]);
  const fetchChartData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.BACKEND_URL}/api/countryLikelihood/${selectedYear}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch data for year ${selectedYear}`);
      }
      const data = await response.json();
      setChartData(data);
      if (data.length === 0) {
        setError(`No data available for year ${selectedYear}`);
      } else {
        setError(null);
      }
    } catch (error) {
      console.error(`Error fetching data for year ${selectedYear}:`, error);
      setError(`Failed to fetch data for year ${selectedYear}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Data Visualization Page</h1>
      <Dropdown
        label="Select Year"
        options={availableYears}
        selectedOption={selectedYear}
        onChange={setSelectedYear}
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {selectedYear && !loading && !error && chartData.length === 0 && (
        <p>No data available for year {selectedYear}</p>
      )}
      {selectedYear && !loading && !error && chartData.length > 0 && (
        <HorizontalBarChart data={chartData} />
      )}
    </div>
  );
};

export default Country;
