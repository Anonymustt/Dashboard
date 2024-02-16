import React from 'react';
import { ResponsiveScatterPlot } from '@nivo/scatterplot';

const ScatterPlot = ({ data }) => {
  const chartData = Object.entries(data).map(([pestle, intensity]) => ({
    x: pestle, 
    y: intensity, 
  }));

  return (
    <div style={{ height: '400px' }}>
      <ResponsiveScatterPlot
        data={[{ id: 'Pestle Intensity', data: chartData }]}
        margin={{ top: 50, right: 60, bottom: 70, left: 90 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 0, max: 'auto' }}
        colors={{ scheme: 'category10' }}
        blendMode="normal"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -45,
          legendPosition: 'middle',
          legendOffset: 46,
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Intensity',
          legendPosition: 'middle',
          legendOffset: -60,
        }}
       
      />
    </div>
  );
};

export default ScatterPlot;
