import React from "react";

import Menu from "../components/Menu";
import FilterProduto from "../components/FilterProduto";
import CardProduto from "../components/CardProduto";

import { Dropdown } from 'primereact/dropdown';

class PageProdutos extends React.Component {
  state = {
    nomeLivro: "AAAA",
    opcaoEscolhida: ""
  };

  opcoes = [
    { name: "Preço: baixo a alto", code: "BAIXO" },
    { name: "Preço: alto a baixo", code: "ALTO" },
    { name: "Avaliação dos clientes (média)", code: "CLIENTES" },
    { name: "Produtos mais novos", code: "NOVOS" }
  ]

  render() {
    return (
      <>
        <Menu />
        <div className="col-12 d-flex flex-wrap">
          <FilterProduto />
          <div className="col-10 d-flex flex-wrap h-100">
            <div className="col-12 d-flex flex-wrap py-3 px-2" style={{height: '10vh'}}>
              <div className="col-8">
                <h1>
                  {this.state.nomeLivro}
                </h1>
              </div>
              <div className="col-4">
                <Dropdown
                  value={this.state.opcaoEscolhida}
                  options={this.opcoes}
                  onChange={(e) => this.setState({ opcaoEscolhida: e.target.value })}
                  className="col-12 border border-0 rounded-pill"
                  optionLabel="name"
                  placeholder="Destaques"
                />
              </div>
            </div>
            <div className="col-12 d-flex flex-wrap py-3 px-2">
                <CardProduto/>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PageProdutos;
