import React from "react";

import { Divider } from "primereact/divider";

import ListaMaisVendidos from "../components/ListaMaisVendidos";

class MaisVendidosCategorias extends React.Component {

  state = {
    opcoes : { 
        "Materias" : ["Português","Matemática","Geográfia","História","Fisíca"],
        "Idiomas" : ["Ingles","Espanhol"],
        "Outros" : ["Poesia","Romance","Drama","Contos"]
    }
  };

  render() {
    return (
      <div className="col-2 p-2 py-4">
        <h2>Filtrar Por</h2>
        <Divider />
        <ListaMaisVendidos lista={this.state.opcoes} />
      </div>
    );
  }
}

export default MaisVendidosCategorias;
