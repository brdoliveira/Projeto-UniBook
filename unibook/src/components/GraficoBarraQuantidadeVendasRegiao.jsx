import React from "react";
import { Chart } from "primereact/chart";
import BiService from "../app/service/biService";

class GraficoBarraQuantidadeVendasRegiao extends React.Component{
    constructor() {
        super();
        this.service = new BiService();
        this.state = {
          inativos: 0,
          ativos: 0,
          stackedData: null,
        };
      }
    
      async componentDidMount() {
        await this.service.usuarioAtivos().then((res) => {
          this.setState({ usuariosAtivos: res.data });
        });
        await this.service.usuarioInativos().then((res) => {
          this.setState({ usuariosInativos: res.data });
        });
    
        this.setState({
          stackedData: {
            labels: ["Estados"],
            datasets: [
              {
                type: "bar",
                label: "SP",
                backgroundColor: "#162BAD",
                data: [5],
              },
              {
                type: "bar",
                label: "PB",
                backgroundColor: "#FB8500",
                data: [3],
              },
            ],
          },
        });
      }
    
      stackedOptions = {
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
    
      render() {
        return (
          <div>
            <div className="card">
              <Chart type="bar" data={this.state.stackedData} options={this.stackedOptions} />
            </div>
          </div>
        );
      }
}

export default GraficoBarraQuantidadeVendasRegiao