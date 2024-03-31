import React from "react";
import { motion } from "framer-motion";

class StatisticGraph extends React.Component {
  state = {
    pointsVisible: Array(this.props.data.length).fill(false),
    lineSegmentsVisible: Array(this.props.data.length - 1).fill(false),
    hoveredIndex: null
  };

  componentDidMount() {
    this.animatePoints();
  }

  animatePoints = () => {
    const { data } = this.props;
    const { lineSegmentsVisible } = this.state;

    data.forEach((_, index) => {
      setTimeout(() => {
        this.setState((prevState) => ({
          pointsVisible: prevState.pointsVisible.map((_, i) =>
            i === index ? true : prevState.pointsVisible[i]
          )
        }));
      }, 250 * index);
    });
    lineSegmentsVisible.forEach((_, index) => {
        setTimeout(() => {
          this.setState((prevState) => ({
            lineSegmentsVisible: prevState.lineSegmentsVisible.map((_, i) =>
              i === index ? true : prevState.lineSegmentsVisible[i]
            )
          }));
        }, 250 * (index + 1));
      });
  };

  handleMouseOver = (index) => {
    this.setState({ hoveredIndex: index });
  };

  handleMouseOut = () => {
    this.setState({ hoveredIndex: null });
  };

  renderLineChart({ data }) {
    const lineMargin = 36;
    const maxHeight = 180;

    return (
      <svg viewBox={`0 0 ${lineMargin * data.length} ${maxHeight}`}>
        {data.map((_, index) => (
          <g key={index}>
            <motion.circle
              initial={{ opacity: 0 }}
              animate={{ opacity: this.state.pointsVisible[index] ? 1 : 0 }}
              transition={{ delay: 0.4 }}
              cx={index * lineMargin}
              cy={maxHeight - data[index]}
              r="3"
              fill="#bb262d"
              onMouseOver={() => this.handleMouseOver(index)}
              onMouseOut={this.handleMouseOut}
            />
            {this.state.hoveredIndex === index && (
              <text x={index * lineMargin} y={maxHeight - data[index] - 8} textAnchor="middle" fill="#333">
                {data[index]}
              </text>
            )}
          </g>
        ))}
        {data.slice(0, -1).map((_, index) => (
          <motion.polyline
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: this.state.lineSegmentsVisible[index] ? 1 : 0 }}
            transition={{ delay: 0.4 }}
            points={`${index * lineMargin},${maxHeight - data[index]} ${(
              index + 1
            ) * lineMargin},${maxHeight - data[index + 1]}`}
            fill="none"
            stroke="#bb262d"
            strokeWidth="2"
          />
        ))}
      </svg>
    );
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <h2>Line Chart</h2>
        {this.renderLineChart({ data })}
      </div>
    );
  }
}
export default StatisticGraph;
