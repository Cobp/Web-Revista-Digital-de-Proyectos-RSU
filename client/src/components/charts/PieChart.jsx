import React from "react";
import { motion } from "framer-motion";

const PieChart = ({ data }) => {
    const total = data.reduce((acc, curr) => acc + curr, 0);
    const centerX = 90;
    const centerY = 90;
    const radius = 90;
    let startAngle = 0;
    const lenght = data.length

    return (
      <svg viewBox="0 0 180 180" width="100px" height="100px">
        {data.map((value, index) => {
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
            <motion.path
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 * index + .1 }}
              d={pathData}
              strokeWidth="2"
              fill={`hsl(${index * (lenght * 7) }, 100%, 50%)`}
              stroke='#ffffff'
            />
          );
        })}
      </svg>
    );
  }
export default PieChart;
