import React from "react";

import FusionCharts from "fusioncharts";
import Maps from "fusioncharts/fusioncharts.maps";
import Brazil from "fusionmaps/maps/fusioncharts.brazil";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";

ReactFC.fcRoot(FusionCharts, Maps, Brazil, FusionTheme);

// id = https://www.fusioncharts.com/dev/maps/spec-sheets/brazil

const dataSource = {
  chart: {
    bgColor: "#FFFFFF",
    bgAlpha: "0",
    animation: "0",
    showLabels: "0",
    usehovercolor: "1",
    canvasbordercolor: "FFFFFF",
    bordercolor: "#aaa",
    showlegend: "0",
    showshadow: "0",
    legendposition: "BOTTOM",
    legendborderalpha: "0",
    legendbordercolor: "ffffff",
    legendallowdrag: "0",
    legendshadow: "0",
    // caption: "Mapa do Brasil",
    hoverFillalpha: "20",
    hovercolor: "#162BAD",
    showborder: "1"
  },
  colorrange: {
    minvalue: "0",
    startlabel: "Low",
    endlabel: "High",
    code: "#e65c00",
    gradient: "1",
    color: [
      {
        maxvalue: "200000",
        displayvalue: "Average",
        code: "#ffc34d"
      },
      {
        maxvalue: "400000",
        displayvalue: "Above Average",
        code: "#80bfff"
      },
      {
        maxvalue: "600000",
        code: "#162BAD"
      }
    ],
    maxvalue: 0
  },

  data: [
    {
      id: "025",
      value: "600000"
    }
  ]
};

const chartConfigs = {
  type: "brazil",
  width: '100%',
  height: 600,
  dataFormat: "json",
  dataSource: dataSource
};

export default function MapaBrasil() {
  return (
    <div className="App">
      <ReactFC {...chartConfigs} />
    </div>
  );
}


