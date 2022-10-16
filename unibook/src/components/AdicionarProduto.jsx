import React, { useState } from "react";

// import { ScrollPanel } from "primereact/scrollpanel";
// import { Chips } from "primereact/chips";

import iconAddImage from "../templates/images/icon-add-image.png";
import { FileUpload } from "primereact/fileupload";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";

import BookService from "../app/service/bookService";
import { mensagemErro, mensagemSucesso } from "./Toastr";

import "../templates/styles/styles-cadastro.css";

export default function AdicionarProduto(props) {
  const [livroInformacoes, setLivroInformacoes] = useState(props.livro);
  const [fotoEscolhida, setFotoEscolhida] = useState(props.foto);
  const [dataLancamento, setDataLancamento] = useState(props.livro.dataLanc);
  const [estadoUso, setEstadoUso] = useState(props.livro.estado);
  const [precoLivro, setPrecoLivro] = useState(props.livro.valor);
  const [quantidade, setQuantidade] = useState(props.livro.quantidade);
  const [idiomaInserido, setIdiomaInserido] = useState(props.livro.idioma);

  var dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();

  const consultarLivro = async (isbn) => {
    const service = new BookService();
    let dadosLivros = await service.consultarLivro(isbn === "" ? "0" : isbn);

    if (dadosLivros.sucesso) {
      mensagemSucesso("ISBN do Livro encontrado com sucesso");
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

  function onTriggerProdutoLancamento() {
    props.parentCallback({ dataLanc: dataLancamento });
    props.parentCallbackFoto(fotoEscolhida);
  }

  function onTriggerProdutoEstado() {
    props.parentCallback({ estado: estadoUso });
    props.parentCallbackFoto(fotoEscolhida);
  }

  function onTriggerProdutoIdioma() {
    props.parentCallback({ idioma: idiomaInserido });
    props.parentCallbackFoto(fotoEscolhida);
  }

  function onTriggerProdutoPreco() {
    props.parentCallback({ valor: precoLivro });
    props.parentCallbackFoto(fotoEscolhida);
  }

  function onTriggerProdutoQuantidade() {
    props.parentCallback({ quantidade: quantidade });
    props.parentCallbackFoto(fotoEscolhida);
  }

  const estados = [
    { name: "Perfeito", code: "PERFEITO" },
    { name: "Otimo", code: "OTIMO" },
    { name: "Bom", code: "BOM" },
    { name: "Mediano", code: "MEDIANO" },
    { name: "Muito Usado", code: "MUITO_USADO" },
  ];

  const idiomas = [
    { name: "Inglês", code: "INGLES" },
    { name: "Chinês Mandarim", code: "CHINES_MANDARIM" },
    { name: "Hindi", code: "HINDI" },
    { name: "Espanhol", code: "ESPANHOL" },
    { name: "Francês", code: "FRANCES" },
    { name: "Árabe", code: "ARABE" },
    { name: "Bengali", code: "BENGALI" },
    { name: "Russo", code: "RUSSO" },
    { name: "Português", code: "PORTUGUES" },
    { name: "Indonésio", code: "INDONESIO" },
  ];

  return (
    <>
      <div
        className="col-12 bg-blue d-flex flex-wrap align-items-center justify-content-center rounded"
        style={{ height: "40rem" }}
      >
        <h1 className="col-12 text-center text-white py-1">
          Cadastro - Produto
        </h1>
        <div className="col-12 col-md-4 px-4  d-flex flex-wrap align-items-center justify-content-center">
          <div
            className="col-12 bg-white d-flex flex-wrap align-items-center justify-content-center rounded"
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
                value={precoLivro}
                onChange={(e) => {
                  setPrecoLivro(e.value);
                  setLivroInformacoes({ valor: e.value });
                  onTriggerProdutoPreco();
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
          <div className="col-12 text-white py-4 d-flex">
            <div className="col-6 text-white py-4 ps-2">
              <p>Autor</p>
              <InputText
                value={livroInformacoes.autor}
                onChange={(e) => {
                  setLivroInformacoes({ autor: e.target.value });
                  onTriggerProduto();
                }}
                className="col-12 border border-0 rounded-pill"
                type="text"
                placeholder="Autor do livro..."
              />
            </div>
            <div className="col-6 text-white py-4 ps-2">
              <p>Editora</p>
              <InputText
                value={livroInformacoes.editora}
                onChange={(e) => {
                  setLivroInformacoes({ editora: e.target.value });
                  onTriggerProduto();
                }}
                className="col-12 border border-0 rounded-pill"
                type="text"
                placeholder="Editora do livro..."
              />
            </div>
          </div>
          <div className="col-12 text-white py-4 d-flex">
            <div className="col-6 text-white py-4 pe-2">
              <p>Estado de Uso</p>
              <Dropdown
                optionLabel="name"
                options={estados}
                value={estadoUso}
                onChange={(e) => {
                  setEstadoUso(e.value);
                  setLivroInformacoes({ estado: e.value });
                  onTriggerProdutoEstado();
                }}
                className="col-12 border border-0 rounded-pill"
                type="text"
                placeholder="Digite estado de uso..."
              />
            </div>
            <div className="col-6 text-white py-4 ps-2">
              <p>Quantidade</p>
              <InputNumber
                value={quantidade}
                onChange={(e) => {
                  setQuantidade(e.value);
                  setLivroInformacoes({ quantidade: e.value });
                  onTriggerProdutoQuantidade();
                }}
                className="col-12 border border-0 rounded-pill"
                type="text"
                placeholder="Quantidade..."
              />
            </div>
          </div>
          <div className="col-12 text-white py-4 d-flex">
            <div className="col-6 text-white py-4 pe-2">
              <p>Ano de Lancamento</p>
              <InputNumber
                value={dataLancamento}
                onChange={(e) => {
                  setDataLancamento(e.value);
                  setLivroInformacoes({ dataLanc: e.value });
                  onTriggerProdutoLancamento();
                }}
                className="col-12 border border-0 rounded-pill"
                type="text"
                placeholder="Data de lancamento..."
                mode="decimal"
                useGrouping={false}
                min={0}
                max={anoAtual}
              />
            </div>
            <div className="col-6 text-white py-4 ps-2">
              <p>Idioma</p>
              <Dropdown
              optionLabel="name"
                value={idiomaInserido}
                options={idiomas}
                onChange={(e) => {
                  setIdiomaInserido(e.target.value);
                  onTriggerProdutoIdioma(e.target.value);
                  onTriggerProduto();
                }}
                className="col-12 border border-0 rounded-pill"
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
