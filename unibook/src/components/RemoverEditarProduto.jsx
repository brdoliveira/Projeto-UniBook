import React from "react";

import { ScrollPanel } from "primereact/scrollpanel";

import RemoverEditarProdutoItem from "./RemoverEditarProdutoItem";
import ProdutosAnunciadosService from "../app/service/produtosAnunciadosService";

class RemoverEditarProduto extends React.Component {
  constructor() {
    super();
    this.service = new ProdutosAnunciadosService();
    this.state = {
      produtos: [],
    };
  }

  componentDidMount() {
    this.service.listarTodosPilha().then((response) => {
      this.setState({ produtos: response.data.pilha });
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
            <h2>Remover/Editar Produto</h2>
          </div>
          <ScrollPanel
            className="col-11 bg-bluelight pb-4 rounded py-4 ps-3"
            style={{ height: "20rem" }}
          >
            {this.state.produtos.map((item,idx) => {
              return <RemoverEditarProdutoItem produto={item} key={idx + 19000} />;
            })}
          </ScrollPanel>
        </div>
      </>
    );
  }
}

export default RemoverEditarProduto;
