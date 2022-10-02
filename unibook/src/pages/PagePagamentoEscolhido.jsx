import React from "react";
import withParams from "../components/PegarParametros";

import Menu from "../components/Menu";
import PagamentoPix from "../components/PagamentoPix";
import PagamentoBoleto from "../components/PagamentoBoleto";
import CartoesOpcoes from "../components/CartoesOpcoes";

import { Button } from "primereact/button";

import "../templates/styles/styles-pagamento.css";

class PagePagamentoEscolhidoBoleto extends React.Component {

  voltar = () => {
    window.history.back();
  }

  render() {
    let { escolhido } = this.props.params;
    const loadPayment = () => {
      if (escolhido === "boleto") {
        return <PagamentoBoleto />;
      } else if (escolhido === "pix") {
        return <PagamentoPix />;
      } else if (escolhido === "credito") {
        return <CartoesOpcoes isCredit={true} />;
      } else if (escolhido === "debito") {
        return <CartoesOpcoes />;
      } else {
        window.location.href = "/";
      }
    };

    return (
      <>
        <Menu />
        <div
          className="col-12 d-flex justify-content-center align-items-center"
          style={{ height: "90vh" }}
        >
          <div className="col-10 div-cadastro">
            <div className="col-12 d-flex">
              <div className="col-1 d-flex justify-content-center align-items-center">
                <Button
                  icon="pi pi-angle-left"
                  className="p-button-rounded button-cadastro"
                  style={{ width: "75px", height: "75px" }}
                  aria-label="Voltar"
                  onClick={this.voltar}
                />
              </div>
              <div
                className="col-10 bg-blue rounded"
                style={{ height: "70vh" }}
              >
                {loadPayment()}
              </div>
              <div className="col-1 d-flex justify-content-center align-items-center"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withParams(PagePagamentoEscolhidoBoleto);
