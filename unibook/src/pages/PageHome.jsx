import React from "react";

import CardProduto from "../components/CardProduto";

import Menu from "../components/Menu";

import imageHome from "../templates/images/imagem-home.jpg";
import "../templates/styles/styles-index.css";

import ProdutosAnunciadosService from "../app/service/produtosAnunciadosService";
import ComponenteVazioHome from "../components/ComponenteVazioHome";
import Paginacao from "../components/Paginacao";

class PageHome extends React.Component {
  constructor(props) {
    super(props);
    this.service = new ProdutosAnunciadosService();
    this.state = {
      livros: null,
      totalPaginas: 0,
      pagina: 0,
      fileira: 12,
    };
  }

  async componentDidMount() {
    this.getListBooks();
  }

  async getListBooks() {
    await this.service
      .listarTodos(this.state.pagina, this.state.fileira)
      .then((response) => {
        this.setState({ totalPaginas: response.data.totalElements });
        this.setState({
          livros: response.data.content.map((livro, idx) => {
            return <CardProduto id={idx} key={idx} livro={livro} isDono={false} />;
          }),
        });
      })
      .catch(
        this.setState({
          livros: <ComponenteVazioHome />,
        })
      );
  }

  handleCallback = (childData) => {
    console.log(childData);
    this.setState({ ...this.state , ...{ fileira : childData.fileira, pagina: childData.pagina}})
    this.getListBooks();
  };

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
              <Paginacao
                totalRecords={this.state.totalPaginas}
                pagina={this.state.pagina}
                fileira={this.state.fileira}
                parentCallback={this.handleCallback}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHome;
