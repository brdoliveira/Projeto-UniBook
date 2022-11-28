import React from "react";

import Menu from "../components/Menu";
import FilterProduto from "../components/FilterProduto";
import Paginacao from "../components/Paginacao";
import CardProduto from "../components/CardProduto";
import ComponenteVazioHome from "../components/ComponenteVazioHome";

class PageProdutos extends React.Component {
  constructor(){
    super();
    this.state = {
      nomeLivro: "",
      livros: null,
      totalPaginas: 0,
      pagina: 0,
      fileira: 8,
    };
  }

  async componentDidMount(){
    var nomeLivro = localStorage.getItem("pesquisa_livro")
    if(nomeLivro !== ""){
      await this.getListBooks()
    }else{
      window.location.href = "/"
    }
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
          livros: <ComponenteVazioHome/>,
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
        <div className="col-12 d-flex flex-wrap pt-5 px-2 vh-100">
          <FilterProduto />
          <div className="col-10 d-flex flex-wrap h-100 pt-5">
            <div className="col-12 d-flex flex-wrap py-3 px-2" style={{height : '5vh'}}>
              <div className="col-12" style={{height : '5vh'}}>
                <h1>
                  {this.state.nomeLivro}
                </h1>
              </div>
            </div>
            <div className="col-12 d-flex flex-wrap py-3 px-2">
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

export default PageProdutos;
