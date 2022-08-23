import React from "react";

import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";
import { Steps } from "primereact/steps";

import CadastroUsuario from "../components/CadastroUsuario";
import CadastroImagem from "../components/CadastroImagem";
import Menu from "../components/Menu";

import CompradorService from "../app/service/compradorService";
import { Notification } from "../components/Notification";

import "../templates/styles/styles-cadastro.css";

class PageCadastro extends React.Component {
  state = {
    tabcard: 0,
    buttonLeft: true,
    buttonRight: false,
    data: [],
  };
  
  constructor(){
    super()
    this.service = new CompradorService();
  };

  disabled(index) {
    if (index === 0) {
      this.setState({ buttonLeft: true });
      this.setState({ buttonRight: false });
    } else if (index === 1) {
      this.setState({ buttonLeft: false });
      this.setState({ buttonRight: true });
    }
  }

  items = [
    { label: "Usuario" },
    { label: "Imagem" },
  ];

  handleCallback = (childData) => {
    this.setState({ data: childData });
  };

  doRegistration = () => {
    this.service
    .cadastrar({
      nome: this.state.data.email,
      dataNascimento: this.state.data.dataNasc,
      senha: this.state.data.senha,
      cpf: this.state.data.cpf,
      email: this.state.data.email,
      sexo:this.state.data.sexo
    })
    .then((response) => {
      window.location.href = "/login"
    })
    .catch((erro) => {
      return <Notification type="error" message={erro.message} />;
    });
  }

  render() {
    const clickLeft = () => {
      if (this.state.tabcard === 0) {
        return;
      }
      this.setState({ tabcard: this.state.tabcard - 1 });
      this.disabled(this.state.tabcard - 1);
    };

    const clickRight = () => {
      if (this.state.tabcard === 2) {
        return;
      }
      this.setState({ tabcard: this.state.tabcard + 1 });
      this.disabled(this.state.tabcard + 1);
    };

    return (
      <>
        <Menu />
        <div
          className="col-12 d-flex justify-content-center align-items-center"
          style={{ height: "90vh" }}
        >
          <div className="col-10 div-cadastro">
            <div className="col-12 d-flex justify-content-center">
              <div className="col-10">
                <Steps
                  className="w-100"
                  model={this.items}
                  activeIndex={this.state.tabcard}
                />
              </div>
            </div>
            <div className="col-12 d-flex">
              <div className="col-1 d-flex justify-content-center align-items-center">
                <Button
                  icon="pi pi-angle-left"
                  className="p-button-rounded button-cadastro"
                  style={{ width: "75px", height: "75px" }}
                  aria-label="Antes"
                  hidden={this.state.buttonLeft}
                  onClick={clickLeft}
                />
              </div>
              <div className="col-10">
                <TabView
                  activeIndex={this.state.tabcard}
                  onTabChange={(e) => {
                    this.setState({ tabcard: e.index });
                    this.disabled(e.index);
                  }}
                  className="cadastro"
                >
                  <TabPanel header="Usuario">
                    <CadastroUsuario
                      parentCallback={this.handleCallback}
                      className="col-12"
                    />
                  </TabPanel>
                  <TabPanel header="Imagem">
                    <CadastroImagem className="col-12" />
                  </TabPanel>
                </TabView>
                <div className="col-12 d-flex justify-content-end pe-4">
                  <Button
                    className="bg-orange rounded-pill border border-dark border-2 fw-bold px-4 py-1 text-dark"
                    label="Finalizar Cadastro"
                    hidden={!this.state.buttonRight}
                    onClick={this.doRegistration}
                  />
                </div>
              </div>
              <div className="col-1 d-flex justify-content-center align-items-center">
                <Button
                  icon="pi pi-angle-right"
                  className="p-button-rounded button-cadastro"
                  style={{ width: "75px", height: "75px" }}
                  aria-label="Depois"
                  onClick={clickRight}
                  hidden={this.state.buttonRight}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PageCadastro;
