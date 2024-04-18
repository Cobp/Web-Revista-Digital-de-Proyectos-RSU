import React, { useState, useEffect } from 'react';

const PercentDonutChart = ({ data }) => {
  
  const total = data.reduce((acc, curr) => acc + curr, 0);
  const centerX = 90;
  const centerY = 90;
  const radius = 90;
  const Lenght = data.length

  const [animatedData, setAnimatedData] = useState(new Array(Lenght).fill(0));


  useEffect(() => {
    const animationDuration = 1000; // milliseconds
    const animationSteps = 60; // number of animation steps
    const stepIncrement = total / animationSteps;

    let animationCount = 0;
    const animationInterval = setInterval(() => {
      if (animationCount < animationSteps) {
        setAnimatedData(prevData => prevData.map((value, index) => {
          const nextValue = Math.min(data[index], value + stepIncrement);
          return nextValue;
        }));
        animationCount++;
      } else {
        clearInterval(animationInterval);
      }
    }, animationDuration / animationSteps);

    return () => clearInterval(animationInterval);
  }, [data, total]); // Include 'data' and 'total' in the dependency array

  let startAngle = 0;

  return (
    <svg viewBox="0 0 180 180" width="75" height="75">
      {animatedData.map((value, index) => {
        const percentage = value / total;
        const endAngle = startAngle + percentage * 2 * Math.PI;
        const x1 = centerX + radius * Math.cos(startAngle);
        const y1 = centerY + radius * Math.sin(startAngle);
        const x2 = centerX + radius * Math.cos(endAngle);
        const y2 = centerY + radius * Math.sin(endAngle);
        const largeArcFlag = percentage > 0.5 ? 1 : 0;

        const pathData = `M ${centerX},${centerY} L ${x1},${y1} A ${radius},${radius} 0 ${largeArcFlag},1 ${x2},${y2} Z`;

        startAngle = endAngle;

        return (
          <path
            key={index}
            d={pathData}
            fill={`hsl(${357.1812080536913 * (Lenght * (index +1))}, 66.22222222222221%, 44.11764705882353%)`}
            stroke='#ffffff'
          />
        );
      })}
      <circle r="70" cx="90" cy="90" fill="#ffffff"></circle>
    </svg>
  );
}

export default PercentDonutChart;
