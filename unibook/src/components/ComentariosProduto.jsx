import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import ComentarioItem from "./ComentarioItem";
import ComentarioVazio from "./ComentarioVazio";

export default function ComentariosProdutos() {
  const [value, setValue] = useState("");

  return (
    <div className="py-4">
      <div className="col-12 border-dark border-3 border-bottom mb-3">
        <h2 className="text-dark">Comentarios</h2>
      </div>
      <div className="col-12 border border-2 rounded p-2 py-4">
        <div className="col-12 d-flex justify-content-center">
          <h4 className="text-center">Comentários Anteriores</h4>
        </div>
            {/* <ComentarioItem/> */}
            <ComentarioVazio/>
      </div>
      <div className="col-12 border border-2 rounded p-2 py-4 my-2">
        <h5>Adicionar Comentario: </h5>
        <div className="col-12 d-flex">
          <div className="col-10">
            <InputText
              className="w-100"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Adicionar comentário..."
            />
          </div>
          <div className="col-2 px-4">
            <Button className="w-100" label="Enviar Mensagem" icon="pi pi-send" iconPos="right" />
          </div>
        </div>
      </div>
    </div>
  );
}
