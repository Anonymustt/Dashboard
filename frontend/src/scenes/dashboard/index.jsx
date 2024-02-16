import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import PieChart from '../../components/PieChart';
import ScatterPlot from '../../components/ScatterPlot';

const Dashboard = () => {
  const [regionImpactData, setRegionImpactData] = useState([]);
  const [pestleIntensityData, setPestleIntensityData] = useState([]);

  useEffect(() => {
    fetchRegionImpactData();
    fetchPestleIntensityData();
  }, []);

  const fetchRegionImpactData = async () => {
    try {
      const response = await fetch(`${process.env.BACKEND_URL}/api/regionImpact`);
      if (!response.ok) {
        throw new Error('Failed to fetch region impact data');
      }
      const data = await response.json();
      setRegionImpactData(data);
    } catch (error) {
      console.error('Error fetching region impact data:', error);
    }
  };

  const fetchPestleIntensityData = async () => {
    try {
      const response = await fetch(`${process.env.BACKEND_URL}/api/pestleIntensity`);
      if (!response.ok) {
        throw new Error('Failed to fetch pestle intensity data');
      }
      const data = await response.json();
      setPestleIntensityData(data);
    } catch (error) {
      console.error('Error fetching pestle intensity data:', error);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h4">Dashboard</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h6">Intensity Region</Typography>
            <PieChart data={regionImpactData} showLegends={false}/>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h6">Pestle Intensity</Typography>
            <ScatterPlot data={pestleIntensityData} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
