import React from "react";

import Menu from "../components/Menu";
import AdicionarProduto from "../components/AdicionarProduto";
import iconAddImage from "../templates/images/icon-add-image.png";

import ProdutosAnunciadosService from "../app/service/produtosAnunciadosService";
import { mensagemErro , mensagemSucesso } from "../components/Toastr";
import { Button } from "primereact/button";
import { Steps } from "primereact/steps";

import "../templates/styles/styles-cadastro.css";

class PageAdicionarProduto extends React.Component {
  constructor() {
    super();
    this.service = new ProdutosAnunciadosService();
    this.state = {
      tabcard: 0,
      buttonLeft: true,
      buttonRight: false,
      livro: {
        idVendedor: 0,
        nome: "",
        valor: 0,
        descricao: "",
        dataLanc: 2000,
        editora: {name: "Rocco",code:"ROCCO"},
        autor: "",
        isbn: "",
        idioma: {name:'Português',code:'PORTUGUES'},
        quantidade: "",
        estado: {name: 'Perfeito', code: 'PERFEITO'},
        foto: iconAddImage
        // etiquetas: [],
      },
    };
  }


  items = [
    { label: "Livro - Informações Basicas" },
    { label: "Livro - Informações Técnicas" },
  ];

  disabled(index) {
    if (index === 0) {
      this.setState({ buttonLeft: true, buttonRight: false });
    } else if (index === 1) {
      this.setState({ buttonLeft: false, buttonRight: true });
    }
  }

  doRegistration = () => {
    var usuarioLogado = JSON.parse(localStorage.getItem("_usuario_logado")) 
    const produto = {
      "idVendedor": usuarioLogado.id,
      "titulo": this.state.livro.nome,
      "autor": this.state.livro.autor,
      "quantidade": this.state.livro.quantidade,
      "estadoUso": this.state.livro.estado.code,
      "anoPublicacao": this.state.livro.dataLanc,
      "descricao": this.state.livro.descricao,
      "valor": this.state.livro.valor,
      "idioma": this.state.livro.idioma.code
      // ,"foto": this.state.livro.foto
    }
    
    try{
      this.service.validarProduto(produto)
    }catch(erro){
      const msgs = erro.mensagens;
      msgs.forEach((msg) => mensagemErro(msg));
      return false;
    }
    
    this.service.salvarProduto(produto).then(() => {
      mensagemSucesso("Livro Cadastrado!")
      setInterval(1000000)
      window.location.href = "/perfil"
    })
    .catch((erro) => {
      mensagemErro(erro.response.data.message);
      return;
    });
  }

  
  handleCallback = (childData) => {
    this.setState({
      livro: { ...this.state.livro, ...childData },
    });
  };

  handleCallbackFoto = (childData) => {
    this.setState({...this.state.livro, ...{ foto : childData}});
  };

  render() {
    const clickLeft = () => {
      if (this.state.tabcard === 0) {
        return;
      }
      this.setState({ tabcard: this.state.tabcard - 1 });
      this.disabled(this.state.tabcard - 1);
    };

    const clickRight = () => {
      if (this.state.tabcard === 2) {
        return;
      }
      this.setState({ tabcard: this.state.tabcard + 1 });
      this.disabled(this.state.tabcard + 1);
    };

    return (
      <div className="min-vh-100">
        <Menu />
        <div
          className="col-12 d-flex justify-content-center align-items-center min-vh-100"
        >
          <div className="col-10 div-cadastro">
            <div className="col-12 d-flex justify-content-center">
              <div className="col-10">
                <Steps
                  className="w-100"
                  model={this.items}
                  activeIndex={this.state.tabcard}
                />
              </div>
            </div>
            <div className="col-12 d-flex">
              <div className="col-1 d-flex justify-content-center align-items-center">
                <Button
                  icon="pi pi-angle-left"
                  className="p-button-rounded button-cadastro"
                  style={{ width: "75px", height: "75px" }}
                  aria-label="Antes"
                  hidden={this.state.buttonLeft}
                  onClick={clickLeft}
                />
              </div>
              <div className="col-10 pt-4">
                <AdicionarProduto
                  page={this.state.buttonRight}
                  livro={this.state.livro}
                  foto={this.state.livro.foto}
                  parentCallback={this.handleCallback}
                  parentCallbackFoto={this.handleCallbackFoto}
                />
                <div className="col-12 d-flex justify-content-end pe-4 pt-4">
                  <Button
                    className="bg-orange rounded-pill border border-dark border-2 fw-bold px-4 py-1 text-dark hover-orange"
                    label="Finalizar Cadastro"
                    hidden={!this.state.buttonRight}
                    onClick={this.doRegistration}
                  />
                </div>
              </div>
              <div className="col-1 d-flex justify-content-center align-items-center">
                <Button
                  icon="pi pi-angle-right"
                  className="p-button-rounded button-cadastro"
                  style={{ width: "75px", height: "75px" }}
                  aria-label="Depois"
                  onClick={clickRight}
                  hidden={this.state.buttonRight}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageAdicionarProduto;
