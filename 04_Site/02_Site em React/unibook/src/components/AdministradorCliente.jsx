import React from "react";

import RemoverEditarUsuario from "./RemoverEditarUsuario";
import RemoverEditarProduto from "./RemoverEditarProduto";
import AdicionarUsuario from "./AdicionarUsuario";

class AdministradorCliente extends React.Component {
  super() {}

  render() {
    return (
      <>
        <div className="col-12 text-center text-dark pt-5">
          <h1>Administração dos Clientes</h1>
        </div>
        <div className="col-12 py-4">
          <RemoverEditarUsuario />
        </div>
        <div className="col-12 py-4">
          <RemoverEditarProduto/>
        </div>
        <div className="col-12 py-4">
          <AdicionarUsuario/>
        </div>
      </>
    );
  }
}

export default AdministradorCliente;
