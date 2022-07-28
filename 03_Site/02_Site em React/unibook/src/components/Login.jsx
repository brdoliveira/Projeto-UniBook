import React from "react";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";

import "../templates/styles/styles-login.css";

class Login extends React.Component {
  state = {
    login: "",
    senha: "",
  };

  doLogin = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="col-12 px-0 bg-image bg-height d-flex justify-content-end">
        <div className="col-12 col-md-6 col-lg-5 bg-bluelight bg-height d-flex align-items-center px-4">
          <div className="d-block col-12">
            <h1 className="text-white text-center">Login</h1>
            <div className="col-12 text-white py-2">
              <p>Login</p>
              <InputText
                value={this.state.login}
                onChange={(e) => this.setState({ login: e.target.value })}
                className="col-12 border border-0 rounded-pill px-3"
                name="login"
                placeholder="Digite seu usuario..."
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
                toggleMask
              />
            </div>
            <div className="col-12 text-end text-white pb-3">
              <p>Esqueci a senha</p>
            </div>
            <div className="col-12 text-white text-end">
              <a href="/cadastro" className="text-decoration-none text-white">
                <span className="pe-2" style={{ fontSize: "13px" }}>
                  Criar conta <b>clique aqui</b>
                </span>
              </a>
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
