import React from "react";

class ProdutoFavorito extends React.Component {
  render() {
    return (
      <div className="col-12 border border-3 rounded my-2 p-2 border-blue d-flex flex-wrap">
        <div className="col-4">
            <img src="" alt="" />
        </div>
        <div className="col-6">
        <p className="fw-bold">Nome</p>
        <p className="text-wrap">Mensagem</p>
        </div>
        <div className="col-2">
            <p>Preço</p>
            <p>00,00</p>
        </div>
      </div>
    );
  }
}

export default ProdutoFavorito;
