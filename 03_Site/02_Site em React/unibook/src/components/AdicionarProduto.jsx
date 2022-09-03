import React from "react";
import iconAddImage from "../templates/images/icon-add-image.png";

import { ScrollPanel } from "primereact/scrollpanel";
import { FileUpload } from "primereact/fileupload";
import { InputText } from "primereact/inputtext";
import { Chips } from "primereact/chips";
import { Button } from "primereact/button";

import BookService from "../app/service/bookService";

import "../templates/styles/styles-cadastro.css";

class AdicionarProduto extends React.Component {
  constructor(){
    super()
    this.service = new BookService();
  }

  state = {
    nome: "",
    preco: 0,
    descricao: "",
    dataLanc: "",
    editora: "",
    isbn: "",
    idioma: "",
    imgPath: iconAddImage,
    etiquetas: [],
  };

render() {
    const consultarLivro = async (isbn) => {
      let dadosLivros = await this.service.consultarLivro(isbn)
      console.log(dadosLivros)
    };

    const customBase64Uploader = async (event) => {
      if (this.state.imgPath === iconAddImage) {
        var base64data;
        const file = event.files[0];
        const reader = new FileReader();
        let blob = await fetch(file.objectURL).then((r) => r.blob());
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          base64data = reader.result;
          this.setState({ imgPath: base64data });
        };
        return;
      }
    };

    return (
      <>
        <div
          className="col-12 bg-blue d-flex flex-wrap align-items-center justify-content-center rounded"
          style={{ height: "50vh" }}
        >
          <h1 className="col-12 text-center text-white py-1">
            Cadastro - Produto
          </h1>
          <div className="col-12 col-md-4 px-4  d-flex flex-wrap align-items-center justify-content-center">
            <div
              className="col-12 bg-white d-flex flex-wrap align-items-center justify-content-center"
              style={{ height: "35vh", width: "60%" }}
            >
              <img
                src={this.state.imgPath}
                alt=""
                id="imgPhoto"
                style={{ height: "29vh", width: "90%" }}
              />
            </div>
            <div className="col-12 d-flex justify-content-center py-1">
              <FileUpload
                mode="basic"
                name="demo[]"
                accept="image/*"
                customUpload
                uploadHandler={customBase64Uploader}
                auto
              />
            </div>
          </div>
          <div className="col-12 col-md-8 px-4" hidden={this.props.page}>
            <div className="col-12 text-white py-4 d-flex flex-wrap px-2">
              <div className="col-6 text-white py-4 pe-1">
                <p>ISBN</p>
                <div className="p-inputgroup">
                  <InputText
                    value={this.state.isbn}
                    onChange={(e) => this.setState({ isbn: e.target.value })}
                    className="col-12 border border-0 rounded-pill rounded-end"
                    type="text"
                    placeholder="ISBN do livro..."
                  />
                  <Button
                    icon="pi pi-search"
                    className="rounded-start rounded-pill"
                    onClick={ () => {consultarLivro(this.state.isbn)}}
                  />
                </div>
              </div>
              <div className="col-6 text-white py-4 ps-1">
                <p>Nome do Livro</p>
                <InputText
                  value={this.state.nome}
                  onChange={(e) => this.setState({ nome: e.target.value })}
                  className="col-12 border border-0 rounded-pill"
                  type="text"
                  placeholder="Nome do livro..."
                />
              </div>
            </div>
            <div className="col-12 text-white py-4 px-2">
              <p>Descrição do Livro</p>
              <InputText
                value={this.state.descricao}
                onChange={(e) => this.setState({ descricao: e.target.value })}
                className="col-12 border border-0 rounded-pill"
                type="text"
                placeholder="Descrição do livro..."
              />
            </div>
          </div>
          <div className="col-12 col-md-8 px-4" hidden={!this.props.page}>
            <div className="col-12 text-white pt-4 d-flex">
              <div className="col-6 text-white py-4 pe-2">
                <p>Data de Lancamento</p>
                <InputText
                  value={this.state.data}
                  onChange={(e) => this.setState({ data: e.target.value })}
                  className="col-12 border border-0 rounded-pill"
                  type="text"
                  placeholder="Data de lancamento..."
                />
              </div>
              <div className="col-6 text-white py-4 ps-2">
                <p>Editora</p>
                <InputText
                  value={this.state.editora}
                  onChange={(e) => this.setState({ editora: e.target.value })}
                  className="col-12 border border-0 rounded-pill"
                  type="text"
                  placeholder="Editora do livro..."
                />
              </div>
            </div>
            <div className="col-12 text-white pt-4 d-flex">
              <div className="col-6 text-white py-4 pe-2">
                <p>Data de Lancamento</p>
                <InputText
                  value={this.state.data}
                  onChange={(e) => this.setState({ data: e.target.value })}
                  className="col-12 border border-0 rounded-pill"
                  type="text"
                  placeholder="Data de lancamento..."
                />
              </div>
              <div className="col-6 text-white py-4 ps-2">
                <p>Editora</p>
                <InputText
                  value={this.state.editora}
                  onChange={(e) => this.setState({ editora: e.target.value })}
                  className="col-12 border border-0 rounded-pill"
                  type="text"
                  placeholder="Editora do livro..."
                />
              </div>
            </div>
            <div className="col-12 text-white pt-4">
              <p>Etiquetas</p>
              <ScrollPanel
                className="col-12 scroll rounded"
                style={{ height: " 5vh" }}
              >
                <Chips
                  value={this.state.etiquetas}
                  onChange={(e) => this.setState({ etiquetas: e.value })}
                  className="col-12 border border-0 rounded-pill"
                  separator=","
                  placeholder="Adicionar etiqueta..."
                  max={5}
                />
              </ScrollPanel>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AdicionarProduto;
