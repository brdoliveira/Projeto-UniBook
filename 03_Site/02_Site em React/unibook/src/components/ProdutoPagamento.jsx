import React from "react";

import { Rating } from "primereact/rating";
import { Button } from "primereact/button";

import FormasPagamento from "./FormasPagamento";

class ProdutoPagamento extends React.Component {
  state = {
    pagamentoEscolhido: "credito",
  };

  handleCallbackPagamentoEscolhido = (childData) => {
    this.setState({ pagamentoEscolhido: childData });
  };

  pagamento = () => {
    window.location.href = this.state.pagamentoEscolhido
  }

  render() {
    return (
      <div className="col-12">
        <div className="col-12 d-flex flex-wrap">
          <div className="col-6 bg-bluelight" style={{ height: "87.5vh" }}>
            <div className="col-12 text-white fw-bold text-center py-4">
              <h1>Nome do livro</h1>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-center">
              <div
                className="col-10 bg-white"
                style={{ width: "50%", height: "40rem" }}
              ></div>
            </div>
            <div className="col-12 d-flex flex-wrap justify-content-center py-4">
              <div className="col-2 rating-book">
                <Rating value={5} readOnly stars={5} cancel={false} />
              </div>
              <span className="fw-bold text-white">10.000 Avaliações</span>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <FormasPagamento
              pagamentoEscolhido={this.state.pagamentoEscolhido}
              parentCallbackPagamentoEscolhido={
                this.handleCallbackPagamentoEscolhido
              }
            />
          </div>
        </div>
        <div className="col-12 d-flex flex-wrap bg-blue py-3">
          <div className="col-6 d-flex justify-content-start align-items-center">
            <Button
              className="bg-orange rounded-pill border border-dark border-2 fw-bold px-4 py-1 text-dark py-2 ms-2 hover-orange"
              label="Continuar Comprando"
            />
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center">
            <span className="text-white fw-bold px-4">R$ 00,00</span>
            <Button
              className="bg-yellow rounded-pill border border-dark border-2 fw-bold px-4 py-1 text-dark py-2 px-4 me-2 hover-yellow"
              label="Comprar"
              onClick={this.pagamento}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProdutoPagamento;
