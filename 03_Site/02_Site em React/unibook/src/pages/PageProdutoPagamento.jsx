import React from "react";

import Menu from "../components/Menu";
import ProdutoPagamento from "../components/ProdutoPagamento";

import "../templates/styles/styles-pagamento.css";

class PageProdutoPagamento extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <div className="col-12 d-flex flex-wrap h-100" style={{ height: "90vh" }}>
          <ProdutoPagamento />
        </div>
      </>
    );
  }
}

export default PageProdutoPagamento;
