import React, { useState } from "react";

// import { ScrollPanel } from "primereact/scrollpanel";
// import { Chips } from "primereact/chips";

import iconAddImage from "../templates/images/icon-add-image.png";
import { mensagemErro, mensagemSucesso } from "./Toastr";
import BookService from "../app/service/bookService";
import { FileUpload } from "primereact/fileupload";
import { InputText } from "primereact/inputtext";
import { InputNumber } from 'primereact/inputnumber';
import { Button } from "primereact/button";

import "../templates/styles/styles-cadastro.css";

export default function AdicionarProduto(props) {
  const [livroInformacoes, setLivroInformacoes] = useState(props.livro);
  const [fotoEscolhida, setFotoEscolhida] = useState(props.foto);

  const consultarLivro = async (isbn) => {
    const service = new BookService();
    let dadosLivros = await service.consultarLivro(isbn === "" ? "0" : isbn);

    if (dadosLivros.sucesso) {
      mensagemSucesso("ISBN do Livro encontrado com sucesso");
      console.log(dadosLivros.dados);
    } else {
      mensagemErro("ISBN do Livro não encontrado");
    }
  };

  const customBase64Uploader = async (event) => {
    if (fotoEscolhida === iconAddImage) {
      var base64data;
      const file = event.files[0];
      const reader = new FileReader();
      let blob = await fetch(file.objectURL).then((r) => r.blob());
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        base64data = reader.result;
        setFotoEscolhida(base64data);
      };
      return;
    }
  };

  function onTriggerProduto() {
    props.parentCallback(livroInformacoes);
    props.parentCallbackFoto(fotoEscolhida);
  }

  return (
    <>
      <div
        className="col-12 bg-blue d-flex flex-wrap align-items-center justify-content-center rounded"
        style={{ height: "30rem" }}
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
              src={fotoEscolhida}
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
        <div className="col-12 col-md-8 px-4" hidden={props.page}>
          <div className="col-12 text-white py-4 d-flex flex-wrap px-2">
            <div className="col-6 text-white py-4 pe-1">
              <p>ISBN</p>
              <div className="p-inputgroup">
                <InputText
                  value={livroInformacoes.isbn}
                  onChange={(e) => {
                    setLivroInformacoes({ isbn: e.target.value });
                    onTriggerProduto();
                  }}
                  className="col-12 border border-0 rounded-pill rounded-end"
                  type="text"
                  placeholder="ISBN do livro..."
                />
                <Button
                  icon="pi pi-search"
                  className="rounded-start rounded-pill"
                  onClick={() => {
                    consultarLivro(livroInformacoes.isbn);
                  }}
                />
              </div>
            </div>
            <div className="col-6 text-white py-4 ps-1">
              <p>Nome do Livro</p>
              <InputText
                value={livroInformacoes.nome}
                onChange={(e) => {
                  setLivroInformacoes({ nome: e.target.value });
                  onTriggerProduto();
                }}
                className="col-12 border border-0 rounded-pill"
                type="text"
                placeholder="Nome do livro..."
              />
            </div>
          </div>
          <div className="col-12 text-white py-4 d-flex flex-wrap px-2">
            <div className="col-6 text-white py-4 pe-1">
              <p>Descrição do Livro</p>
              <InputText
                value={livroInformacoes.descricao}
                onChange={(e) => {
                  setLivroInformacoes({ descricao: e.target.value });
                  onTriggerProduto();
                }}
                className="col-12 border border-0 rounded-pill"
                type="text"
                placeholder="Descrição do livro..."
              />
            </div>
            <div className="col-6 text-white py-4 ps-1">
              <p>Preço</p>
              <InputNumber
                value={livroInformacoes.preco}
                onChange={(e) => {
                  setLivroInformacoes({ preco: e.value });
                  onTriggerProduto();
                  console.log(e)
                }}
                className="col-12 border border-0 rounded-pill"
                type="text"
                placeholder="Preço do livro..."
                mode="currency" 
                currency="BRL" 
                locale="pt-BR"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8 px-4" hidden={!props.page}>
          <div className="col-12 text-white pt-4 d-flex">
            <div className="col-6 text-white py-4 pe-2">
              <p>Ano de Lancamento</p>
              <InputText
                value={livroInformacoes.dataLanc}
                onChange={(e) => {
                  setLivroInformacoes({ dataLanc: e.target.value });
                  onTriggerProduto();
                }}
                className="col-12 border border-0 rounded-pill"
                type="text"
                placeholder="Data de lancamento..."
              />
            </div>
            <div className="col-6 text-white py-4 ps-2">
              <p>Editora ou Autor</p>
              <InputText
                value={livroInformacoes.autor}
                onChange={(e) => {
                  setLivroInformacoes({ autor: e.target.value });
                  onTriggerProduto();
                }}
                className="col-12 border border-0 rounded-pill"
                type="text"
                placeholder="Editora do livro..."
              />
            </div>
          </div>
          <div className="col-12 text-white pt-4 d-flex">
            <div className="col-6 text-white py-4 pe-2">
              <p>Estado de Uso</p>
              <InputText
                value={livroInformacoes.estado}
                onChange={(e) => {
                  setLivroInformacoes({ estado: e.target.value });
                  onTriggerProduto();
                }}
                className="col-12 border border-0 rounded-pill"
                type="text"
                placeholder="Data de lancamento..."
              />
            </div>
            <div className="col-6 text-white py-4 ps-2">
              <p>Quantidade</p>
              <InputText
                value={livroInformacoes.quantidade}
                onChange={(e) => {
                  setLivroInformacoes({ quantidade: e.target.value });
                  onTriggerProduto();
                }}
                className="col-12 border border-0 rounded-pill"
                type="text"
                placeholder="Quantidade..."
              />
            </div>
          </div>
          {/* <div className="col-12 text-white pt-4">
              <p>Etiquetas</p>
              <ScrollPanel
                className="col-12 scroll rounded"
                style={{ height: " 5vh" }}
              >
                <Chips
                  value={livroInformacoes.etiquetas}
                  onChange={(e) => setLivroInformacoes({ etiquetas: e.value })}
                  className="col-12 border border-0 rounded-pill"
                  separator=","
                  placeholder="Adicionar etiqueta..."
                  max={5}
                />
              </ScrollPanel>
            </div> */}
        </div>
      </div>
    </>
  );
}
