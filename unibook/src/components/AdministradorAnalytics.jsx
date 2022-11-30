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
    };
  }

  componentDidMount() {
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
          <GraficoBarraAtivosInativos/>
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
