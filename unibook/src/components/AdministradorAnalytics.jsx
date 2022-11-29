import React from "react";

import TabelaAdministrador from "./TabelaAdministrador";

import MapaBrasil from "./MapaBrasil";
import GraficoBarra from "./GraficoBarra";
import DadosVisitas from "./DadosVisitas";
import GraficoBarraAtivosInativos from "./GraficoBarraAtivosInativos";
import BiService from "../app/service/biService";

class AdministradorAnalytics extends React.Component {
  constructor() {
    super();
    this.service = new BiService();
    this.state = {
      usuariosAtivos: 0,
      usuariosInativos: 0,
      stackedData: {},
    };
  }

  componentDidMount() {
    this.usuarioAtivosInativos().then(() => {
      this.setState({
        stackedData: {
          labels: ["Usuarios"],
          datasets: [
            {
              type: "bar",
              label: "Ativos",
              backgroundColor: "#162BAD",
              data: [this.state.usuariosAtivos],
            },
            {
              type: "bar",
              label: "Inativos",
              backgroundColor: "#FB8500",
              data: [this.state.usuariosInativos],
            },
          ],
        },
      });
      console.log(this.state.stackedData);
    });
  }

  async usuarioAtivosInativos() {
    await this.service.usuarioAtivos().then((res) => {
      this.setState({ usuariosAtivos: res.data });
    });

    await this.service.usuarioInativos().then((res) => {
      this.setState({ usuariosInativos: res.data });
    });
  }

  render() {
    return (
      <>
        <div className="col-12 text-center text-dark pt-5">
          <h1>Relatórios e Métricas</h1>
        </div>
        <div className="col-12 py-4">
          <DadosVisitas />
        </div>
        <div className="col-12 text-dark">
          <h2>Quantidade de Usuários Ativos x Inativos</h2>
        </div>
        <div className="col-12 py-4">
          <GraficoBarraAtivosInativos
            stackedData={this.state.stackedData}
          />
        </div>
        <div className="col-12 text-dark">
          <h2>Mapa Geográfico Volume de Compras</h2>
        </div>
        <div className="col-12 py-4">
          <MapaBrasil />
        </div>
        <div className="col-12 py-4">
          <TabelaAdministrador />
        </div>
        <div className="col-12 text-dark">
          <h2>Volume de Vendas por Mês</h2>
        </div>
        <div className="col-12 py-4">
          <GraficoBarra />
        </div>
        <div className="col-12 py-4">
          <TabelaAdministrador />
        </div>
      </>
    );
  }
}

export default AdministradorAnalytics;
