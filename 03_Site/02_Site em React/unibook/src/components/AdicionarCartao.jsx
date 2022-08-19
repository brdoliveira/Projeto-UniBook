import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

import React from "react";

class AdicionarCartao extends React.Component {
  state = {
    brand: "",
    number: "",
    cvv: "",
    expiration_date: "",
    holder: "",
  };

  render(props) {
    if (props.isCredit) {
      title = "Adicionar Cartão de Crédito";
    } else {
      title = "Adicionar Cartão de Débito";
    }

    return (
      <div className="col-12 d-flex flex-wrap">
        <div className="col-12 text-center">
          <h1>{title}</h1>
        </div>
        <div className="col-12">
          <div className="col-12">
            <p>Nome do titular</p>
            <InputText
              value={this.state.holder}
              onChange={(e) => this.setState({ holder: e.target.value })}
              className="col-12 border border-0 rounded-pill"
              type="text"
              placeholder="Digite o nome do titular..."
            />
            <p>Número do cartão</p>
            <InputText
              value={this.state.number}
              onChange={(e) => this.setState({ number: e.target.value })}
              className="col-12 border border-0 rounded-pill"
              type="text"
              placeholder="Digite o numero do cartão..."
            />
            <p>Data de validade</p>
            <Calendar
              id="monthpicker"
              value={this.state.expiration_date}
              onChange={(e) => this.setState({ expiration_date: e.value })}
              view="month"
              dateFormat="mm/yy"
            />
            <p>
              Código de segurança (CVV){" "}
              <Password
                value={this.state.cvv}
                onChange={(e) => this.setState({ cvv: e.target.value })}
                feedback={false}
              />
              <div className="text-white">(O que é isso?)</div>
            </p>
          </div>
          <div className="col-12 d-flex justify-content-end align-items-end">
            <span className="text-white fw-bold">Cancelar</span>
            <Button
              label="Adicionar"
              className="bg-orange border border-1 border-dark text-dark rounded"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AdicionarCartao;
