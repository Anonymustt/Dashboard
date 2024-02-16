import React from 'react';
import { ResponsiveBar } from '@nivo/bar';


const HorizontalBarChart = ({ data }) => {

  return (
    <div style={{ height: data.length < 5 ? '150px' : `${data.length * 50}px` }}>
      <ResponsiveBar
        data={data}
        keys={['likelihood']}
        indexBy="country"
        layout="horizontal"
        margin={{ top: 50, right: 130, bottom: 50, left: 130 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={'#eaae2d'}
        axisBottom={{
          tickSize: 2,
          tickPadding: 5,
          tickRotation: 0,
          padding: 10
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 2,
          tickRotation: 0,
        }}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 50,
            itemWidth: 100,
            itemHeight: 20,
            itemsSpacing: 2,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
          },
        ]}
        theme={{
          axis: {
            fontSize: '14px',
            tickColor: '#ccc',
            tickTextColor: '#ccc',
          },
          tooltip: {
            container: {
              background: '#333',
            },
          },
        }}
      />
    </div>
  );
};

export default HorizontalBarChart;
