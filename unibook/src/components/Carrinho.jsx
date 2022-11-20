import React, { useState, useEffect } from "react";

import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";

import ProdutoCarrinho from "./ProdutoCarrinho";
import ModalExclusao from "./ModalExclusao";
import CarrinhosService from "../app/service/carrinhosService";
import { mensagemErro, mensagemSucesso } from "./Toastr";

const service = new CarrinhosService();

function Carrinho(props) {
  const [visibleCarrinho, setVisibleCarrinho] = useState(false);
  const [produtosCarrinho, setProdutosCarrinho] = useState("");
  const [somaCarrinho,setSomaCarrinho]  = useState(0);

  useEffect(() => {
    setVisibleCarrinho(props.showCarrinho);
    listaCarrinho();
  }, [props.showCarrinho]);

  function onTriggerCarrinho() {
    props.parentCallbackCarrinho(false);
  }

  async function listaCarrinho() {
    let { id } = JSON.parse(localStorage.getItem("_usuario_logado"));

    await service.listarProdutos(id).then(
      (response) => {
        setProdutosCarrinho(
          response.data.map((livro) => {
            setSomaCarrinho(somaCarrinho + livro.valor ? livro.valor : 0);
            return <ProdutoCarrinho key={livro.id} informacoes={livro} />
          }),
        );
      });
  }

  async function comprarProdutosCarrinho(){
    let { id } = JSON.parse(localStorage.getItem("_usuario_logado"));

    await service.realizarComprar(id).then(
      (response) => {
        mensagemSucesso(response.response.data.message)

      }
    ).catch(
      (erro) => { mensagemErro(erro.response.data.message)}

    )

  }

  return (
    <Sidebar
      visible={visibleCarrinho}
      position="left"
      className="p-sidebar-lg bg-blue"
      onHide={() => {
        setVisibleCarrinho(false);
        onTriggerCarrinho();
      }}
    >
      <div className="col-12 d-flex flex-wrap p-sidebar-top">
        <div className="col-10 d-flex align-items-center">
          <span className="fw-bold text-white display-5">Carrinho</span>
        </div>
        <div className="col-2 d-flex justify-content-end align-items-center">
          <ModalExclusao
            header="Confirmação exclusão"
            message="Tem certeza que deseja limpar a lista de carrinho ?"
          />
        </div>
      </div>
      <div className="p-sidebar-content" style={{ height: "80vh" }}>
        {produtosCarrinho}
      </div>
      <div className="p-sidebar-bottom d-flex justify-content-end align-items-center">
        <span className="text-white fw-bold px-2"> R$ {somaCarrinho}</span>
        <Button
          className="p-button-rounded bg-orange border border-3 border-dark text-dark hover-orange"
          aria-label="Comprar"
          label="Comprar"
          onClick={() => {comprarProdutosCarrinho()}}
        />
      </div>
    </Sidebar>
  );
}

export default Carrinho;
