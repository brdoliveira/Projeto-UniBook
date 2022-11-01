import React, { useState, useEffect } from "react";

import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";

import ProdutoFavorito from "./ProdutoFavorito";
import ModalExclusao from "./ModalExclusao";

import AuthService from "../app/service/authService";
import FavoritosService from "../app/service/favoritosService";

const service = new FavoritosService();

function Favoritos(props) {
  const [visibleFavoritos, setVisibleFavoritos] = useState(props.showFavoritos);
  const [ produtosFavoritos, setProdutosFavoritos] = useState("");

  useEffect(() => {
    setVisibleFavoritos(props.showFavoritos);
    listarFavoritos()
  }, [props.showFavoritos]);
  
  function onTriggerFavoritos() {
    props.parentCallbackFavoritos(false);
  }

  async function listarFavoritos() {
    let { id } = AuthService.obterUsuarioAutenticado();

    await service.listarProdutos(id).then(
      (response) => {
        setProdutosFavoritos(
          response.data.map((livro) => {
            return <ProdutoFavorito key={livro.id} informacoes={livro.anuncioProduto} />
          }),
        );
      }
    );
  }

  return (
    <Sidebar
      visible={visibleFavoritos}
      position="left"
      className="p-sidebar-lg bg-blue"
      onHide={() => {
        setVisibleFavoritos(false);
        onTriggerFavoritos();
      }}
    >
      <div className="col-12 d-flex flex-wrap p-sidebar-top">
        <div className="col-10 d-flex align-items-center">
          <span className="fw-bold text-white display-5">Favoritos</span>
        </div>
        <div className="col-2 d-flex justify-content-end align-items-center">
          <ModalExclusao header="Confirmação exclusão" message="Tem certeza que deseja limpar a lista de favoritos ?" />
        </div>
      </div>
      <div className="p-sidebar-content" style={{ height: "80vh" }}>
        {produtosFavoritos}
      </div>
      <div className="p-sidebar-bottom d-flex justify-content-end">
        <Button
          className="p-button-rounded bg-orange border border-3 border-dark text-dark"
          aria-label="Carrinho"
          label="Adicionar ao Carrinho"
        />
      </div>
    </Sidebar>
  );
}

export default Favoritos;
