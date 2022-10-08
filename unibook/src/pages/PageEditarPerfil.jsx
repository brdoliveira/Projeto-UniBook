import React from "react";

import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";

import Menu from "../components/Menu";

import EditarImagem from "../components/EditarImagem";
import EditarUsuario from "../components/EditarUsuario";
import EditarEndereco from "../components/EditarEndereco";

import "../templates/styles/styles-editar-perfil.css";
class PageEditarPerfil extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <div
          className="col-12 d-flex justify-content-center align-items-center"
          style={{ height: "90vh" }}
        >
          <div className="col-10 div-editar-perfil">
            <div className="col-12 text-center">
              <h1>Editar Perfil</h1>
            </div>
            <div className="col-12">
              <Accordion activeIndex={0} className="col-12 w-100">
                <AccordionTab header="Imagem" className="col-12 w-100">
                  <EditarImagem />
                </AccordionTab>
                <AccordionTab header="Usuario">
                  <EditarUsuario />
                </AccordionTab>
                <AccordionTab header="Endereco">
                  <EditarEndereco />
                </AccordionTab>
              </Accordion>
            </div>
            <div className="col-12 d-flex justify-content-end py-2">
              <Button
                className="bg-orange rounded-pill border border-dark text-dark border-2 fw-bold px-4 py-3 button-perfil"
                label="Alterar Perfil"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PageEditarPerfil;
