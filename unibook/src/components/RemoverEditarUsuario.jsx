import React from "react";

import { ScrollPanel } from "primereact/scrollpanel";

import RemoverEditarUsuarioItem from "./RemoverEditarUsuarioItem";
import UsuarioService from "../app/service/usuarioService";

class RemoverEditarUsuario extends React.Component {
  constructor() {
    super();
    this.service = new UsuarioService();
    this.state = {
      usuarios: [],
    };
  }

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.service.listaUsuarios().then((res) => {
      this.setState({
        usuarios: res.data.map((item) => {
            return <RemoverEditarUsuarioItem nome={item.nome} email={item.email} login={item.login} key={item.id} />
        }),
      });
    });
  }

  render() {
    return (
      <>
        <div
          className="col-12 rounded bg-blue d-flex justify-content-center align-items-center flex-wrap"
          style={{ height: "30rem" }}
        >
          <div className="col-11 text-white pt-4">
            <h2>Remover Usuario</h2>
          </div>
          <ScrollPanel
            className="col-11 bg-bluelight pb-4 rounded py-4 ps-3"
            style={{ height: "20rem" }}
          >
            {this.state.usuarios}
          </ScrollPanel>
        </div>
      </>
    );
  }
}

export default RemoverEditarUsuario;
