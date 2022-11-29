import React, { useState } from "react";

import { Chart } from "primereact/chart";

export default function GraficoBarraAtivosInativos(props) {
  const [stackedData] = useState(props.stackedData);

  let stackedOptions = {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      tooltips: {
        mode: "index",
        intersect: false,
      },
      legend: {
        labels: {
          color: "#495057",
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: "#495057",
        },
        grid: {
          color: "#ebedef",
        },
      },
      y: {
        stacked: true,
        ticks: {
          color: "#495057",
        },
        grid: {
          color: "#ebedef",
        },
      },
    },
  };

  return (
    <div>
      <div className="card">
        <Chart type="bar" data={stackedData} options={stackedOptions} />
      </div>
    </div>
  );
}
