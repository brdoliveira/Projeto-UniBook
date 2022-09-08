import React from "react";
import withParams from "../components/PegarParametros";

import Menu from "../components/Menu";
import Produto from "../components/Produto";
import ProdutosAnunciadosService from "../app/service/produtosAnunciadosService";


class PageProduto extends React.Component {
  constructor(){
    super()
    this.service = new ProdutosAnunciadosService();
    this.state = {
      livro : ""
    }
  }

  async componentDidMount() {
    let { id } = this.props.params;
    if(id){
      var livro = await JSON.parse(localStorage.getItem("_livro_escolhido"))
      this.setState({livro : {livro}})
    }else{
      window.location.href = "/"
    }
  }

  render() {
    return (
      <div className="min-vh-100">
        <Menu />
        <div
          className="col-12 d-flex justify-content-center align-items-center min-vh-100 pt-5 mt-5"
        >
          <div className="col-10">
            <Produto informacoes={this.state.livro}/>
          </div>
        </div>
      </div>
    );
  }
}

export default withParams(PageProduto);
