import React , { useState } from "react";

import { Button } from "primereact/button";

import { ConfirmDialog , confirmDialog } from 'primereact/confirmdialog';

export default function RemoverEditarUsuarioItem(props) {
  const [usuario] = useState(props.usuario)

  const confirm = () => {
    confirmDialog({
        message: `Tem certeza que deseja deletar o usuario ${usuario.nome}?`,
        header: 'Confirmação',
        icon: 'pi pi-exclamation-triangle',
        accept: () => console.log("Usuario deletado !"),
        reject: () => console.log("Usuario não deletado !")
    });
  }
 
  return (
    <>
      <div className="col-12 rounded bg-white my-2 d-flex flex-wrap p-2" style={{ height: "5rem" }}>
        <div className="col-12 col-lg-5">
            <span className="fw-bold">Nome: </span>
        </div>
        <div className="col-6 col-lg-3">
          <span className="fw-bold">Email: </span>
        </div>
        <div className="col-6 col-lg-2">
            <span className="fw-bold">CPF: </span>
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
