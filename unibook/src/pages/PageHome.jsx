import React from "react";

import CardProduto from "../components/CardProduto";

import Menu from "../components/Menu";

import imageHome from "../templates/images/imagem-home.jpg";
import "../templates/styles/styles-index.css";

import ProdutosAnunciadosService from "../app/service/produtosAnunciadosService";

class PageHome extends React.Component {
  constructor(props) {
    super(props);
    this.service = new ProdutosAnunciadosService();
    this.state = {
      livros: "",
    };
  }

  async componentDidMount() {
    let response = await this.service.listarTodos();

    this.setState({
      livros: response.data.map((livro) => {
        return <CardProduto key={livro.id} livro={livro} />;
      }),
    });
  }

  render() {
    return (
      <div className="min-vh-100">
        <Menu />
        <div className="col-12 bg-image px-0 mx-0">
          <img src={imageHome} className="bg-image" alt="Imagem da home" />
        </div>
        <div className="col-12">
          <div className="container" hidden={!this.state.livros}>
            <h2 className="col-12 py-2 border-bottom border-3 border-dark">
              Livros mais vistos
            </h2>
            <div className="row mb-md-2 py-3 d-flex flex-wrap align-items-center justify-content-center justify-content-md-start">
              {this.state.livros}
            </div>
          </div>
          <div className="container py-4 d-flex" hidden={this.state.livros}>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHome;
