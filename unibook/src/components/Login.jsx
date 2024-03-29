import React from "react";

import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { mensagemErro } from "./Toastr";

import UsuarioService from "../app/service/usuarioService";
import AuthService from "../app/service/authService";

import { Link } from "react-router-dom"

import "../templates/styles/styles-login.css";

class Login extends React.Component {
  constructor(){
    super()
    this.service = new UsuarioService();
  }

  state = {
    email: "",
    senha: "",
  };

  doLogin = () => {
    this.service
    .login(this.state.email,this.state.senha)
    .then((response) => {
      AuthService.logar(response.data)
      window.location.href = "/perfil"
    })
    .catch((erro) => {
      mensagemErro(erro.response.data.message);
    });

  };

  render() {
    return (
      <div className="col-12 px-0 bg-image vh-100 d-flex justify-content-end">
        <div className="col-12 col-md-6 col-lg-5 bg-bluelight d-flex align-items-center px-4">
          <div className="d-block col-12">
            <h1 className="text-white text-center">Login</h1>
            <div className="col-12 text-white py-2">
              <p>Email</p>
              <InputText
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
                className="col-12 border border-0 rounded-pill px-3"
                name="email"
                placeholder="Digite seu email..."
                required
              />
            </div>
            <div className="col-12 text-white py-2">
              <p>Senha</p>
              <Password
                className="col-12 border border-0 rounded-pill"
                value={this.state.senha}
                onChange={(e) => this.setState({ senha: e.target.value })}
                feedback={false}
                placeholder="Digite sua senha..."
                toggleMask
              />
            </div>
            <div className="col-12 text-end text-white pb-3">
              <p>Esqueci a senha</p>
            </div>
            <div className="col-12 text-white align-items-center justify-content-end d-flex">
              <Link to="/cadastro" className="text-decoration-none text-white">
                <span className="pe-2" style={{ fontSize: "13px" }}>
                  Criar conta <b>clique aqui</b>
                </span>
              </Link>
              <Button
                className="bg-orange rounded-pill border border-dark border-2 fw-bold px-4 py-1 button-entrar"
                label="Entrar"
                onClick={this.doLogin}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
