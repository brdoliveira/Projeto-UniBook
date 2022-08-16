import React from "react";

import Menu from "../components/Menu";
import MaisVendidosCategorias from "../components/MaisVendidosCategorias";
import CardProduto from "../components/CardProduto";

class PageMaisVendidos extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <div className="col-12 d-flex flex-wrap">
          <MaisVendidosCategorias />
          <div className="col-10 d-flex flex-wrap h-100">
            <div className="col-12 d-flex flex-wrap py-3 px-2 text-center" style={{height: '10 vh'}}>
              <h1>Livros mais vistos</h1>
            </div>
            <div className="col-12 d-flex flex-wrap py-3 px-2">
              <CardProduto />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PageMaisVendidos;
