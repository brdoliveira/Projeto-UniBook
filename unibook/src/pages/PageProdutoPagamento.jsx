import React from "react";

import Menu from "../components/Menu";
import ProdutoPagamento from "../components/ProdutoPagamento";

import "../templates/styles/styles-pagamento.css";

class PageProdutoPagamento extends React.Component {
  render() {
    return (
      <>
        <div className="col-12" style={{ height: "100vh" }}>
          <Menu />
          <div
            className="col-12 d-flex flex-wrap h-auto"
            style={{ height: "90vh" }}
          >
            <ProdutoPagamento />
          </div>
        </div>
      </>
    );
  }
}

export default PageProdutoPagamento;
