import React from "react";

import RemoverEditarUsuario from "./RemoverEditarUsuario";

class AdministradorCliente extends React.Component {
  super() {}

  render() {
    return (
      <>
        <div className="col-12 text-center text-dark pt-5">
          <h1>Administração dos Clientes</h1>
        </div>
        <div className="col-12">
          <RemoverEditarUsuario />
        </div>
      </>
    );
  }
}

export default AdministradorCliente;
