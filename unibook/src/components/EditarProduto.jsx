import React, { useState } from "react";

import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";

import BookService from "../app/service/bookService";
import { mensagemErro, mensagemSucesso } from "./Toastr";

export default function EditarProduto(props) {
  const [displayBasic, setDisplayBasic] = useState(false);
  const [livroInformacoes, setLivroInformacoes] = useState(props.livro);
  const [dataLancamento, setDataLancamento] = useState(props.livro.dataLanc);
  const [estadoUso, setEstadoUso] = useState(props.livro.estado);
  const [precoLivro, setPrecoLivro] = useState(props.livro.valor);
  const [quantidade, setQuantidade] = useState(props.livro.quantidade);
  const [idiomaInserido, setIdiomaInserido] = useState(props.livro.idioma);
  const [editoraInserida,setEditoraInserida] = useState(props.livro.editora);
  const [setPosition] = useState("center");

  var dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();

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

  const editoras = [
    {name: "Rocco",code:"ROCCO"},
    {name: "Companhia das letras",code:"COMPANHIA_DAS_LETRAS"},
    {name: "Editora Intriseca",code:"EDITORA_INTRINSECA"},
    {name: "Globo Livroa",code:"GLOBO_LIVROS"},
    {name: "DarkSide",code:"DARKSIDE"},
    {name: "Grupo Editorial Record",code:"GRUPO_EDITORIAL_RECORD"},
    {name: "Suma",code:"SUMA"}
  ]

  const consultarLivro = async (isbn) => {
    const service = new BookService();
    let dadosLivros = await service.consultarLivro(isbn === "" ? "0" : isbn);

    if (dadosLivros.sucesso) {
      mensagemSucesso("ISBN do Livro encontrado com sucesso");
    } else {
      mensagemErro("ISBN do Livro não encontrado");
    }
  };

  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
  };

  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);

    if (position) {
      setPosition(position);
    }
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  return (
    <>
      <Button
        className="rounded-pill"
        icon="pi pi-pencil"
        onClick={() => onClick("displayBasic")}
      />
      <Dialog
        header="Editar Produto"
        visible={displayBasic}
        style={{ width: "50vw", height: "70vh" }}
        onHide={() => onHide("displayBasic")}
      >
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
              <Dropdown
                optionLabel="name"
                options={editoras}
                value={editoraInserida}
                onChange={(e) => {
                  setEditoraInserida(e.target.value);
                  setLivroInformacoes({ editora: e.target.value });
                  onTriggerProdutoEditora();
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
      </Dialog>
    </>
  );
}
