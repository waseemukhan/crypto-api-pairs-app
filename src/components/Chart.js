import React, { useRef } from "react";
import { Line } from "react-chartjs-2";

function Chart({ price, data }) {
  const opts = {
    tooltips: {
      intersect: false,
      mode: "index"
    },
    responsive: true,
    maintainAspectRatio: false
  };
  if (price === "0.00") {
    return <h1 className="textarea">Please choose a currency pair</h1>;
  }
  return (
    <div className="chart">
      <h2>{`$${price}`}</h2>

      <div className="chart-container">
        <Line data={data} options={opts} />
      </div>
    </div>
  );
}

export default Chart;