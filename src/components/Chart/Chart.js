import ChartBar from "./ChartBar";

import "./Chart.css";

function Chart(props) {
  const highestExpense = Math.max(
    ...props.dataPoints.map((dataPoint) => dataPoint.value)
  );

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maximum={highestExpense}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
