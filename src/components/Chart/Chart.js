import React from 'react';
import styled from 'styled-components';
import ChartBar from './ChartBar';

const Chart = ({ chartData }) => {
  const chartDataValues = chartData.map((data) => data.value);
  const maxValue = Math.max(...chartDataValues);

  return (
    <StyledChart>
      {chartData.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={maxValue}
          label={data.label}
        />
      ))}
    </StyledChart>
  );
};

export default Chart;

const StyledChart = styled.div`
  padding: 1rem;
  border-radius: 12px;
  background-color: #f8dfff;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
`;
