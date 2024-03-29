import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const PieChart = ({ data, showLegends = true }) => {
  const chartData = Object.entries(data).map(([region, impact]) => ({
    id: region,
    label: region,
    value: impact
  }));

  return (
    <div style={{ height: '400px' }}>
      <ResponsivePie
        data={chartData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'category10' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextColor="#333333"
        radialLabelsLinkColor={{ from: 'color' }}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
        animate={true} 
        motionStiffness={90} 
        motionDamping={15} 
        tooltip={({ datum }) => (
          <strong style={{ color: datum.color }}>
            {datum.label}: {datum.value}
          </strong>
        )}
        legends={showLegends ? [
          {
            anchor: 'bottom',
            direction: 'row',
            translateY: 56,
            paddingTop: 40,
            itemWidth: 120,
            itemHeight: 18,
            itemTextColor: '#999',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000',
                },
              },
            ],
          },
        ] : []}
      />
    </div>
  );
};

export default PieChart;
