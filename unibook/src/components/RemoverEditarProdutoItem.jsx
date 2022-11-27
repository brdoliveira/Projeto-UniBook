import React from "react";

import { Button } from "primereact/button";

import { ConfirmDialog , confirmDialog } from 'primereact/confirmdialog';

export default function RemoverEditarProdutoItem(props) {

  const confirm = () => {
    confirmDialog({
        message: `Tem certeza que deseja deletar o produto ${props.produto.titulo}?`,
        header: 'Confirmação',
        icon: 'pi pi-exclamation-triangle',
        accept: () => console.log("Produto deletado !"),
        reject: () => console.log("Produto não deletado !")
    });
  }
 
  return (
    <>
      <div className="col-12 rounded bg-white my-2 d-flex flex-wrap p-2" style={{ height: "7rem" }}>
        <div className="col-12 col-lg-5">
            <span className="fw-bold">Nome: {props.produto.titulo}</span>
        </div>
        <div className="col-6 col-lg-3">
          <span className="fw-bold">Autor: {props.produto.autor} </span>
        </div>
        <div className="col-6 col-lg-2">
            <span className="fw-bold">Ano: {props.produto.anoPublicacao}</span>
        </div>
        <div className="col-12 col-lg-2 d-flex align-items-center justify-content-end">
          <Button icon="pi pi-pencil" className="rounded-pill p-button-secondary"/>
          <div className="ps-2">
          <Button icon="pi pi-trash" className="rounded-pill p-button-danger" onClick={confirm}/>
          </div>
        </div>
      </div>
      <ConfirmDialog />
    </>
  );
}
