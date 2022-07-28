import React from "react";

import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";
import { Steps } from "primereact/steps";

import CadastroUsuario from "../components/CadastroUsuario";
import CadastroEndereco from "../components/CadastroEndereco";
import CadastroImagem from "../components/CadastroImagem";

import "../templates/styles/styles-cadastro.css";
import Menu from "../components/Menu";

class PageCadastro extends React.Component {
  state = {
    tabcard: 0,
    buttonLeft: true,
    buttonRight: false,
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
                  disabled={this.state.buttonLeft}
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
                >
                  <TabPanel header="Usuario">
                    <CadastroUsuario className="col-12" />
                  </TabPanel>
                  <TabPanel header="Endereço">
                    <CadastroEndereco className="col-12" />
                  </TabPanel>
                  <TabPanel header="Imagem">
                    <CadastroImagem className="col-12" />
                  </TabPanel>
                </TabView>
              </div>
              <div className="col-1 d-flex justify-content-center align-items-center">
                <Button
                  icon="pi pi-angle-right"
                  className="p-button-rounded button-cadastro"
                  style={{ width: "75px", height: "75px" }}
                  aria-label="Depois"
                  onClick={clickRight}
                  disabled={this.state.buttonRight}
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
