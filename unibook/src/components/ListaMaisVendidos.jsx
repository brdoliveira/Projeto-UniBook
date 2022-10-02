import React from "react";

import { Divider } from "primereact/divider";

class ListaMaisVendidos extends React.Component {
  render() {
    return (
      <div className="col-12 d-flex flex-wrap">
        <h3>Materias</h3>
        {this.props.lista["Materias"].map((item) => {
          return (
            <span className="col-12">
              <span>{item}</span>
            </span>
          );
        })}
         <Divider />
         <h3>Idiomas</h3>
        {this.props.lista["Idiomas"].map((item) => {
          return (
            <span className="col-12">
              <span>{item}</span>
            </span>
          );
        })}
         <Divider />
         <h3>Outros</h3>
        {this.props.lista["Outros"].map((item) => {
          return (
            <span className="col-12">
              <span>{item}</span>
            </span>
          );
        })}
      </div>
    );
  }
}

export default ListaMaisVendidos;
