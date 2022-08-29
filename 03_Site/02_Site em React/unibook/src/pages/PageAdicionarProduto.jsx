import React from "react";

import Menu from "../components/Menu";
import AdicionarProduto from "../components/AdicionarProduto";

import { Button } from "primereact/button";
import { Steps } from "primereact/steps";

import "../templates/styles/styles-cadastro.css";

class PageAdicionarProduto extends React.Component {
  state = {
    tabcard: 0,
    buttonLeft: true,
    buttonRight: false,
    data: [],
  };

  items = [
    { label: "Livro - Informações Basicas" },
    { label: "Livro - Informações Técnicas" },
  ];

  disabled(index) {
    if (index === 0) {
      this.setState({ buttonLeft: true });
      this.setState({ buttonRight: false });
    } else if (index === 1) {
      this.setState({ buttonLeft: false });
      this.setState({ buttonRight: true });
    }
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
              <div className="col-10 pt-4">
                <AdicionarProduto page={this.state.buttonRight} />
                <div className="col-12 d-flex justify-content-end pe-4 pt-4">
                  <Button
                    className="bg-orange rounded-pill border border-dark border-2 fw-bold px-4 py-1 text-dark hover-orange"
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

export default PageAdicionarProduto;
