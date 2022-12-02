import React from "react";

import TabelaAdministradorVolumeVendas from "./TabelaAdministradorVolumeVendas";

import MapaBrasil from "./MapaBrasil";
import GraficoBarraQuantidadeVendasRegiao from "./GraficoBarraQuantidadeVendasRegiao";
import DadosVisitas from "./DadosVisitas";
import GraficoBarraAtivosInativos from "./GraficoBarraAtivosInativos";
import BiService from "../app/service/biService";
import TabelaAdministradorQuantidadeVendasRegiao from "./TabelaAdministradorQuantidadeVendasRegiao";

class AdministradorAnalytics extends React.Component {
  constructor() {
    super();
    this.service = new BiService();
  }

  componentDidMount() {
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
          <h2>Mapa Geográfico Quantidade de Compras</h2>
        </div>
        <div className="col-12 py-4">
          <MapaBrasil />
        </div>
        <div className="col-12 text-dark">
          <h2>Valor Monetário de Compras por Estado</h2>
        </div>
        <div className="col-12 py-4">
          <TabelaAdministradorVolumeVendas />
        </div>
        <div className="col-12 text-dark">
          <h2>Volume de Vendas por Mês</h2>
        </div>
        <div className="col-12 py-4">
          <GraficoBarraQuantidadeVendasRegiao />
        </div>
        <div className="col-12 py-4">
          <TabelaAdministradorQuantidadeVendasRegiao />
        </div>
      </>
    );
  }
}

export default AdministradorAnalytics;
