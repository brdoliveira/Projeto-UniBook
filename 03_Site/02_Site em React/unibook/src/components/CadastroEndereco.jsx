import React from "react";

import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
class CadastroEndereco extends React.Component {
  state = {
    cidade: "",
    estado: "",
    logradouro: "",
    numero: "",
    cep:"",
    complemento:""
  }

  render(){
  return (
    <>
      <div className="col-12 bg-blue d-flex flex-wrap align-items-center justify-content-center">
        <h1 className="col-12 text-center text-white py-1">Cadastro - Endereço</h1>
        <div className="col-12 col-md-6 px-4">
          <div className="col-12 text-white py-4">
            <p>Cidade</p>
            <InputText
                value={this.state.cidade}
                onChange={(e) => this.setState({ cidade: e.target.value })}
                className="col-12 border border-0 rounded-pill"
                type="text"
                placeholder="digite sua cidade..."
              />
          </div>
          <div className="col-12 text-white py-4">
            <p>Estado</p>
            <InputText
                value={this.state.estado}
                onChange={(e) => this.setState({ estado: e.target.value })}
                className="col-12 border border-0 rounded-pill"
                type="text"
                placeholder="digite seu estado..."
              />
          </div>
          <div className="col-12 text-white py-4">
            <p>Logradouro</p>
            <InputText
                value={this.state.logradouro}
                onChange={(e) => this.setState({ logradouro: e.target.value })}
                className="col-12 border border-0 rounded-pill"
                type="text"
                placeholder="digite o logradouro..."
              />
          </div>
        </div>
        <div className="col-12 col-md-6 px-4">
          <div className="col-12 text-white py-4">
            <p>Numero</p>
            <InputText
                value={this.state.numero}
                onChange={(e) => this.setState({ numero: e.target.value })}
                className="col-12 border border-0 rounded-pill"
                type="text"
                placeholder="digite o numero da sua casa..."
              />
          </div>
          <div className="col-12 text-white py-4">
            <p>CEP</p>
            <InputMask
                className="col-12 border border-0 rounded-pill"
                mask="99999-999"
                value={this.state.cep}
                onChange={(e) => this.setState({ cep: e.target.value })}
              ></InputMask>
          </div>
          <div className="col-12 text-white py-4">
            <p>Complemento (Opcional)</p>
            <InputText
                value={this.state.complemento}
                onChange={(e) => this.setState({ complemento: e.target.value })}
                className="col-12 border border-0 rounded-pill"
                type="text"
                placeholder="digite o complemento..."
              />
          </div>
        </div>
      </div>
    </>
  );
  }
}
export default CadastroEndereco;
