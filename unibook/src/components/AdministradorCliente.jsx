import React from "react";

import AdministradorService from "../app/service/administradorService";

import RemoverEditarUsuario from "./RemoverEditarUsuario";
import RemoverEditarProduto from "./RemoverEditarProduto";
import AdicionarUsuario from "./AdicionarUsuario";

import iconAddImage from "../templates/images/icon-add-image.png";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

class AdministradorCliente extends React.Component {
  constructor(){
    super();
    this.state = {
      usuario: {
        nome: "",
        dataNascimento: new Date(),
        sexo: "FEMININO",
        cpf: "",
        email: "",
        senha: "",
        confirmarSenha: "",
        cep: "",
        numeroResidencia: "",
        complemento: "",
        login: "",
        foto: iconAddImage,
      }
    }
    this.service = new AdministradorService();
  }

  handleCallback = (childData) => {
    this.setState({ usuario: { ...this.state.usuario, ...childData } });
  };

  handleCallbackFoto = (childData) => {
    this.setState({
      usuario : {...this.state.usuario, ...{ foto : childData}}
    })
  }

  render() {
    return (
      <>
        <div className="col-12 text-center text-dark pt-5">
          <h1>
            <Link to="/" className="text-decoration-none">
              <Button className="rounded-pill bg-danger border-0 mx-2" icon="pi pi-angle-left"/>
            </Link>
            Administração dos Clientes</h1>
        </div>
        <div className="col-12 py-4">
          <RemoverEditarUsuario />
        </div>
        <div className="col-12 py-4">
          <RemoverEditarProduto/>
        </div>
        <div className="col-12 py-4">
          <AdicionarUsuario usuario={this.state.usuario} parentCallback={this.handleCallback} foto={this.state.usuario.foto}/>
        </div>
      </>
    );
  }
}

export default AdministradorCliente;
