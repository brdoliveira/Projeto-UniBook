import React, { useState, useEffect } from "react";
// import React from "react";

import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";

import ProdutoCarrinho  from "./ProdutoCarrinho";
import ModalExclusao from "./ModalExclusao";

function Carrinho(props) {
  const [visibleCarrinho, setVisibleCarrinho] = useState(false);

  useEffect(() => {
    setVisibleCarrinho(props.showCarrinho);
  }, [props.showCarrinho]);

  function onTriggerCarrinho() {
    props.parentCallbackCarrinho(false);
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
          <ModalExclusao header="Confirmação exclusão" message="Tem certeza que deseja limpar a lista de carrinho ?" />
        </div>
      </div>
      <div className="p-sidebar-content" style={{ height: "80vh" }}>
        <ProdutoCarrinho/>
      </div>
      <div className="p-sidebar-bottom d-flex justify-content-end align-items-center">
        <span className="text-white fw-bold px-2"> R$ 00,00</span>
        <Button
          className="p-button-rounded bg-orange border border-3 border-dark text-dark"
          aria-label="Comprar"
          label="Comprar"
        />
      </div>
    </Sidebar>
  );
}

export default Carrinho;
