import React from "react";

import FusionCharts from "fusioncharts";
import Maps from "fusioncharts/fusioncharts.maps";
import Brazil from "fusionmaps/maps/fusioncharts.brazil";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";

import BiService from "../app/service/biService";

ReactFC.fcRoot(FusionCharts, Maps, Brazil, FusionTheme);

// id = https://www.fusioncharts.com/dev/maps/spec-sheets/brazil

class MapaBrasil extends React.Component {
  constructor() {
    super();
    this.service = new BiService();
    this.state = {
      data: [],
      chartConfigs: []
    };
  }

  componentDidMount() {
    this.service.vendasMapa().then((res) => {
      this.setState({
        data: res.data.map((item) => {
          return {
            id: this.mapperState.get(item.uf),
            value: item.quantidade,
          };
        }),
      })
    }).then(() => {
      this.setState({
        chartConfigs : {
          type: "brazil",
          width: "100%",
          height: 600,
          dataFormat: "json",
          dataSource: {
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
              showborder: "1",
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
                  code: "#ffc34d",
                },
                {
                  maxvalue: "400000",
                  displayvalue: "Above Average",
                  code: "#80bfff",
                },
                {
                  maxvalue: "600000",
                  code: "#162BAD",
                },
              ],
              maxvalue: 0,
            },
      
            data: this.state.data
          },
        }
      })
    })
  }

  mapperState = new Map([
    ["AC", "001"],
    ["AL", "002"],
    ["AP", "003"],
    ["AM", "004"],
    ["BA", "005"],
    ["CE", "006"],
    ["DF", "007"],
    ["ES", "008"],
    ["GO", "009"],
    ["MA", "010"],
    ["MT", "011"],
    ["MS", "012"],
    ["MG", "013"],
    ["PA", "014"],
    ["PB", "015"],
    ["PR", "016"],
    ["PE", "017"],
    ["PI", "018"],
    ["RJ", "019"],
    ["RN", "020"],
    ["RS", "021"],
    ["RO", "022"],
    ["RR", "023"],
    ["SC", "024"],
    ["SP", "025"],
    ["SE", "026"],
    ["TO", "027"],
  ]);


  render() {
    return (
      <div className="App">
        <ReactFC {...this.state.chartConfigs} />
      </div>
    );
  }
}

export default MapaBrasil;
