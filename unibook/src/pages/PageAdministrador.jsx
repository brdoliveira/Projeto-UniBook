import React from "react";

import Menu from "../components/Menu";
import Administrador from "../components/Administrador";

import "../templates/styles/styles-perfil.css";

class PageAdministrador extends React.Component {
  render() {
    return (
        <>
          <Menu />
          <div
            className="col-12 d-flex justify-content-center pt-5 mt-5"
            style={{ height: "90vh" }}
          >
            <div className="col-11">
                <Administrador/>
            </div>
          </div>
        </>
      );
  }
}

export default PageAdministrador;
