import React from "react";

import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { Password } from "primereact/password";
import { Divider } from 'primereact/divider';
import { RadioButton } from "primereact/radiobutton";

class EditarUsuario extends React.Component {
  state = {
    usuario: "",
    email: "",
    senha: "",
    dataNasc: "",
    sexo: "",
    cpf: "",
  };

  render() {
    const header = <h6>Insire sua senha</h6>;
    const footer = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">Sugestões</p>
            <ul className="pl-2 ml-2 mt-0" style={{lineHeight: '1.5'}}>
                <li>Pelo menos uma letra minúscula</li>
                <li>Pelo menos uma letra maiúscula</li>
                <li>Pelo menos um número</li>
                <li>No mínimo 8 caracteres</li>
            </ul>
        </React.Fragment>
    );

    return (
      <>
        <div className="col-12 bg-blue d-flex flex-wrap align-items-center justify-content-center" style={{height:'40vh'}}>
          <div className="col-12 col-md-6 px-4">
            <div className="col-12 text-white py-4">
              <p>Usuario</p>
              <InputText
                value={this.state.usuario}
                onChange={(e) => this.setState({ usuario: e.target.value })}
                className="col-12 border border-0 rounded-pill"
                type="text"
                placeholder="digite seu usuario..."
              />
            </div>
            <div className="col-12 text-white py-4">
              <p>Email</p>
              <InputText
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
                className="col-12 border border-0 rounded-pill"
                type="text"
                placeholder="digite seu email..."
              />
            </div>
            <div className="col-12 text-white py-4">
              <p>Senha</p>
              <Password
                className="col-12 border border-0 rounded-pill"
                value={this.state.senha}
                onChange={(e) => this.setState({ senha: e.target.value })}
                feedback={true}
                header={header} 
                footer={footer}
                weakLabel="Fraca"
                mediumLabel="Media"
                strongLabel="Forte"
                toggleMask
              />
            </div>
          </div>
          <div className="col-12 col-md-6 px-4">
            <div className="col-12 text-white py-4">
              <p>Data Nascimento</p>
              <Calendar
                dateFormat="dd/mm/yy"
                className="col-12 border border-0 rounded-pill py-0"
                value={this.state.dataNasc}
                onChange={(e) => this.setState({ dataNasc: e.target.value })}
              ></Calendar>
            </div>
            <div className="col-12 text-white py-4">
              <p className="col-12">Sexo</p>
              <div className="col-12 d-flex flex-wrap py-2">
                <div className="col-4 field-radiobutton py-1">
                  <RadioButton
                    inputId="sexo"
                    name="sexo"
                    value="F"
                    onChange={(e) => this.setState({ sexo: e.target.value })}
                    checked={this.state.sexo === "F"}
                  />
                  <label htmlFor="sexo" className="px-2">
                    Feminino
                  </label>
                </div>
                <div className="col-4 field-radiobutton py-1">
                  <RadioButton
                    inputId="sexo"
                    name="sexo"
                    value="M"
                    onChange={(e) => this.setState({ sexo: e.target.value })}
                    checked={this.state.sexo === "M"}
                  />
                  <label htmlFor="sexo" className="px-3">
                    Masculino
                  </label>
                </div>
                <div className="col-4 field-radiobutton py-1">
                  <RadioButton
                    inputId="sexo"
                    name="sexo"
                    value="O"
                    onChange={(e) => this.setState({ sexo: e.target.value })}
                    checked={this.state.sexo === "O"}
                  />
                  <label htmlFor="sexo" className="px-2">
                    Outros
                  </label>
                </div>
              </div>
            </div>
            <div className="col-12 text-white py-4">
              <p>CPF</p>
              <InputMask
                className="col-12 border border-0 rounded-pill"
                mask="999.999.999-99"
                value={this.state.cpf}
                onChange={(e) => this.setState({ cpf: e.target.value })}
              ></InputMask>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EditarUsuario;
