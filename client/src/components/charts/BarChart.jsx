import React from "react";
import { motion } from "framer-motion";

class StatisticGraph extends React.Component {
  renderBarChart({ data }) {
    const barWidth = 25;
    const barMargin = 5;
    const maxHeight = 180;

    return (
      <svg viewBox={`0 0 ${(barWidth + barMargin) * data.length} ${maxHeight}`}>
        {data.map((value, index) => (
          <motion.rect
            key={index}
            initial={{ height: '0' }}
            animate={{ height: value }}
            transition={{ duration: .2, delay: 0.2 * index + 1 }}
            x={index * (barWidth + barMargin)}
            y={ maxHeight - value}
            width={barWidth}
            height={0} // Iniciar con altura cero
            fill='#bb262d'
          />
        ))}
      </svg>
    );
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <h2>Bar Chart</h2>
        {this.renderBarChart({ data })}
      </div>
    );
  }
}

export default StatisticGraph;
