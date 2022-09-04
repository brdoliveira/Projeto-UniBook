import React from "react";

import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";
import { Steps } from "primereact/steps";

import CadastroUsuario from "../components/CadastroUsuario";
import CadastroEndereco from "../components/CadastroEndereco";
import CadastroImagem from "../components/CadastroImagem";

import Menu from "../components/Menu";

import "../templates/styles/styles-cadastro.css";

class PageCadastro extends React.Component {
  state = {
    tabcard: 0,
    buttonLeft: true,
    buttonRight: false,
    usuario: {
      nome: "",
      dataNascimento: new Date(),
      sexo: "",
      cpf: "",
      email: "",
      senha: "",
      confirmarSenha: "",
      tipoUsuario: "COMPRADOR",
      cep: "",
      numeroResidencia: ["",""],
      login: "",
      foto: [1],
    },
    enderecoPesquisa: {
      cidade: "",
      logradouro: "",
      estado: "",
    },
  };

  disabled(index) {
    if (index === 0) {
      this.setState({ buttonLeft: true });
      this.setState({ buttonRight: false });
    } else if (index === 1) {
      this.setState({ buttonLeft: false });
      this.setState({ buttonRight: false });
    } else if (index === 2) {
      this.setState({ buttonLeft: false });
      this.setState({ buttonRight: true });
    }
  }

  handleCallback = (childData) => {
    this.setState({ usuario: { ...this.state.usuario, ...childData } });
  };

  handleCallbackCEP = (childData) => {
    console.log(childData)
    this.setState({ enderecoPesquisa: { ...this.state.enderecoPesquisa, ...childData } });
  }

  items = [{ label: "Usuario" }, { label: "Endereço" }, { label: "Imagem" }];

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
        <div className="min-vh-100">
          <Menu />
          <div className="col-12 d-flex justify-content-center align-items-center min-vh-100">
            <div className="col-10 div-cadastro h-100 pt-5 mt-5">
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
                        className="col-12"
                        parentCallback={this.handleCallback}
                        usuario={this.state.usuario}
                      />
                    </TabPanel>
                    <TabPanel header="Endereço">
                      <CadastroEndereco
                        parentCallback={this.handleCallback}
                        parentCallbackCEP={this.handleCallbackCEP}
                        endereco={this.state.usuario}
                        enderecoPesquisa={this.state.enderecoPesquisa}
                        className="col-12"
                      />
                    </TabPanel>
                    <TabPanel header="Imagem">
                      <CadastroImagem className="col-12" />
                    </TabPanel>
                  </TabView>
                  <div className="col-12 d-flex justify-content-end pe-4 my-2">
                    <Button
                      className="bg-orange rounded-pill border border-dark border-2 fw-bold px-4 pb-2 text-dark hover-yellow"
                      label="Finalizar Cadastro"
                      hidden={!this.state.buttonRight}
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
        </div>
      </>
    );
  }
}

export default PageCadastro;
