import React from "react";

import EnviarFeedback from "./EnviarFeedback";
import ComponenteVazioHome from "./ComponenteVazioHome";
import CardProduto from "./CardProduto";

import { FormatService } from "../app/service/formatService";
import AuthService from "../app/service/authService";

import { Rating } from "primereact/rating";
import { ScrollPanel } from "primereact/scrollpanel";

import "../templates/styles/styles-perfil.css";
import ProdutosAnunciadosService from "../app/service/produtosAnunciadosService";
import ComponenteItemsVazio from "./ComponenteItemsVazio";

class PerfilVendedor extends React.Component {
  constructor(){
    super();
    this.service = new ProdutosAnunciadosService();
  }

  state = {
    nome: "",
    foto: "",
    dataNascimento: "",
    sexo: "",
    cpf: "",
    email: "",
    endereco: {
      localidade: "",
    },
    listaProdutosUsuarios : null
  };

  componentDidMount() {
    if (!AuthService.isUsuarioAutenticado) {
      window.location.href = "/";
      return;
    }

    var usuario = JSON.parse(localStorage.getItem("_usuario_logado"));
    this.setState(usuario);

    this.carregarProdutos(usuario.login);
  }

  async carregarProdutos(login){
    await this.service.listarAnunciosPorVendedor(login).then(
      (response) => {
        this.setState({
          listaProdutosUsuarios: response.data.map((livro) => {
            return <CardProduto key={livro.id} livro={livro} isDono={true} />;
          }),
        });
      }).catch(
        this.setState({
          listaProdutosUsuarios : <ComponenteVazioHome/>
        })
      )
  }

  render() {
    return (
      <div className="col-12 d-flex flex-wrap">
        <div className="col-12 col-lg-6 bg-orange div-perfil rounded d-flex flex-wrap align-items-center justify-content-center py-4">
          <div
            className="col-12 bg-white rounded-pill d-flex flex-wrap align-items-center justify-content-center"
            style={{ height: "300px", width: "300px" }}
          >
            <img className="rounded-pill" alt={this.state.foto ? this.state.foto : ""} style={{ height: "300px", width: "300px" }} src={this.state.foto ? this.state.foto : ""} />
          </div>
          <span className="col-12 text-center text-dark py-2">
          <span className="fs-3" style={{textTransform: 'capitalize'}}>
              {" "}
              {this.state.nome ? this.state.nome : ""} ,{" "}
              {this.state.dataNascimento ? FormatService.formatYears(this.state.dataNascimento) + " Anos" : "" }
            </span>
            <br />
            <span>
            <i className="bi bi-geo-alt-fill"></i> {this.state.endereco.localidade ? this.state.endereco.localidade : ""}
            </span>
          </span>
        </div>
        <div className="col-12 col-lg-6 div-perfil flex-wrap align-items-start px-2">
          <div className="col-12 bg-blue text-white rounded h-100">
            <div className="col-12 d-flex align-items-center justify-content-center py-2">
              <div className="col-11 bg-white rounded py-2 px-2 d-flex">
                <Rating value={5} readOnly stars={5} cancel={false} />
                <span className="px-2 text-dark">0 Avaliações</span>
              </div>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-center rounded flex-wrap">
              <ScrollPanel
                className="col-11 scroll text-dark bg-white rounded mb-3 ps-2 pt-2 justify-content-center flex-wrap"
                style={{ height: "30vh" }}
              >
                <ComponenteItemsVazio mensagem="Nenhum feedback encontrado"/>
                {/* <FeedbackMessage /> */}
              </ScrollPanel>
              <div className="col-11 rounded">
                <EnviarFeedback />
              </div>
            </div>
          </div>
        </div>
        <div className="div-perfil-items py-2 col-12">
          <div className="w-100 col-12 border-dark border-3 border-bottom">
            <h2 className="text-dark">Produtos</h2>
          </div>
          <div className="col-12 d-flex flex-wrap py-4">
            {this.state.listaProdutosUsuarios}
          </div>
        </div>
      </div>
    );
  }
}

export default PerfilVendedor;
