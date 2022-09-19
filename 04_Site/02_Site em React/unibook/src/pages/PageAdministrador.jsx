import React from "react";

import Menu from "../components/Menu";
import Adicionar from "../components/Adicionar";

import "../templates/styles/styles-perfil.css";

class PageAdicionar extends React.Component {
  render() {
    return (
        <>
          <Menu />
          <div
            className="col-12 d-flex justify-content-center align-items-center"
            style={{ height: "90vh" }}
          >
            <div className="col-10">
                <Adicionar/>
            </div>
          </div>
        </>
      );
  }
}

export default PageAdicionar;
