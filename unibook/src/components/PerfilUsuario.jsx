import React from "react";

import { Button } from "primereact/button";
import { Link } from "react-router-dom";

import AuthService from "../app/service/authService";
import { FormatService } from "../app/service/formatService";

import "../templates/styles/styles-perfil.css";
import AlterarSenha from "./AlterarSenha";
import ComponenteVazioHome from "./ComponenteVazioHome";

class PerfilUsuario extends React.Component {
  state = {
    nome: "",
    dataNascimento: "",
    sexo: "",
    cpf: "",
    email: "",
    endereco: {
      localidade: "",
    },
  };

  componentDidMount() {
    var usuario = JSON.parse(localStorage.getItem("_usuario_logado"));
    if (!AuthService.isUsuarioAutenticado) {
      window.location.href = "/";
      return;
    }
    this.setState(usuario);
  }

  render() {
    return (
      <div className="col-12 d-flex flex-wrap">
        <div className="col-md-12 col-lg-6 bg-orange div-perfil rounded d-flex flex-wrap align-items-center justify-content-center py-4 h-100">
          <div
            className="col-12 bg-white rounded-pill d-flex flex-wrap align-items-center justify-content-center"
            style={{ height: "300px", width: "300px" }}
          >
            <img alt="" />
          </div>
          <span className="col-12 text-center text-dark py-2">
            <span className="fs-3" style={{ textTransform: "capitalize" }}>
              {" "}
              {this.state.nome ? this.state.nome : ("Nome não informado") },
              {this.state.dataNascimento ? FormatService.formatYears(this.state.dataNascimento) + " Anos" : "Idade não informada" }
            </span>
            <br />
            <span>
              <i className="bi bi-geo-alt-fill"></i>{" "}
              {this.state.endereco.localidade ? this.state.endereco.localidade : ""}
            </span>
          </span>
        </div>
        <div className="col-md-12 col-lg-6 flex-wrap align-items-start px-2">
          <div className="col-12 bg-blue text-white py-3 my-2 rounded px-3">
            <span style={{ textTransform: "capitalize" }}>Sexo: {this.state.sexo ? this.state.sexo : "Outros"}</span>
          </div>
          <div className="col-12 bg-blue text-white py-3 my-2 rounded px-3">
            <span>CPF: {this.state.cpf ? this.state.cpf : "000.000.000-00"}</span>
          </div>
          <div className="col-12 bg-blue text-white py-3 my-2 rounded px-3">
            <span>Email: {this.state.email ? this.state.email : "Nenhum email informado"} </span>
          </div>
          <div className="col-12 bg-blue text-white py-3 my-2 rounded px-3">
            <span>
              Data de nascimento:{" "}
              {FormatService.formatData(this.state.dataNascimento)}
            </span>
          </div>
          <div className="row row-cols-2">
            <div className="col-12 d-flex flex-wrap">
              <div className="col-sm-12 col-md-6 text-center py-2 px-3">
                <Link to="editar" className="text-decoration-none">
                  <Button
                    className="bg-orange rounded-pill border border-dark text-dark border-2 fw-bold px-4 py-3 w-100 w-lg-75 button-perfil"
                    label="Editar"
                    icon="pi pi-user-edit"
                    iconPos="right"
                  />
                </Link>
              </div>
              <div className="col-sm-12 col-md-6 text-center py-2 px-3">
                <Link to="adicionar-produto" className="text-decoration-none">
                  <Button
                    className="bg-orange rounded-pill border border-dark text-dark border-2 fw-bold px-4 py-3 w-100 button-perfil"
                    label="Adicionar Produto"
                    icon="pi pi-plus"
                    iconPos="right"
                  />
                </Link>
              </div>
              <div className="col-sm-12 col-md-6 text-center py-2 px-3">
                <AlterarSenha />
              </div>
            </div>
          </div>
        </div>
        <div className="div-perfil-items py-2 col-12">
          <div className="w-100 col-12 border-dark border-3 border-bottom">
            <h2 className="text-dark">Historico de Compras</h2>
          </div>
          <div className="col-12 d-flex flex-wrap py-4">
            <ComponenteVazioHome />
          </div>
        </div>
      </div>
    );
  }
}

export default PerfilUsuario;
