import React from "react";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

class FinalizarPedido extends React.Component {
  state = {
    cupomCode: "",
  };

  render() {
    return (
      <div className="col-12 d-flex justify-content-center align-items-center">
        <div className="col-10">
          <div className="col-12 text-center text-white">
            <h1>Confira e finalize seu pedido</h1>
          </div>
          <div className="col-12 border border-1 border-white rounded d-flex flex-wrap">
            <div className="row row-cols-2">
              <div className="col">
                <div className="col-12">
                  <h2>
                    Endereco de entrega
                    <span className="text-secondary">(Alterar)</span>
                  </h2>
                </div>
              </div>
              <div className="col">
                <div className="col-12">
                  <h2>
                    Forma de pagamento
                    <span className="text-secondary">(Alterar)</span>
                  </h2>
                </div>
              </div>
              <div className="col">
                <div className="col-12">
                  <h2>Cupom de Desconto ou Vale-presente</h2>
                  <div className="col-12 d-flex flex-wrap">
                    <InputText
                      value={this.state.cupomCode}
                      onChange={(e) =>
                        this.setState({ cupomCode: e.target.value })
                      }
                      className="col-12 border border-0 rounded-pill"
                      type="text"
                      placeholder="Digite o codigo de desconto..."
                    />
                    <Button
                      label="Aplicar"
                      className="border border-2 border-dark bg-orange rounded"
                    />
                  </div>
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>
          <div className="col-12 border border-1 border-white rounded d-flex flex-wrap">
            <div className="col-6 align-items-start">
              <p className="text-white fw-bold">Resumo pedido</p>
              <p className="text-white">Itens: 00,00</p>
              <p className="text-white">Frete manuseio: 00,00</p>
            </div>
            <div className="col-6 align-items-end">
              <p className="text-white text-end">Total do pedido : R$ 00,00</p>
              <Button
                label="Confirmar Pedido"
                className="bg-orange text-dark border border-2 border-dark"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FinalizarPedido;
