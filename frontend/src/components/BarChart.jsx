import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const BarChart = ({ data }) => {
  const filteredData = Object.keys(data)
    .filter(topic => data[topic] >= 20)
    .map(topic => ({
      topic: topic,
      relevance: data[topic]
    }));

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <ResponsiveBar
        data={filteredData}
        keys={['relevance']}
        indexBy="topic"
        margin={{ top: 50, right: 50, bottom: 100, left: 80 }}
        padding={0.3}
        colors={{ scheme: 'set3' }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -45,
          legend: 'Topics',
          legendPosition: 'middle',
          legendOffset: 60,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Relevance',
          legendPosition: 'middle',
          legendOffset: -70,
        }}
        enableGridX={true}
        enableGridY={true}
        labelSkipWidth={12}
        labelSkipHeight={12}
        animate={true}
        motionStiffness={120}
        motionDamping={15}
        tooltip={({ id, value }) => (
          <div style={{ background: '#333', color: '#fff', padding: '10px', borderRadius: '5px' }}>
            <strong>{id}:</strong> {value} relevance
          </div>
        )}
      />
    </div>
  );
};

export default BarChart;
