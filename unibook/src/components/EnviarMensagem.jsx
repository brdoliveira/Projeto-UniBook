import React, { useState } from "react";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import ChatService from "../app/service/chatService";
import AvaliarUsuario from "./AvaliarUsuario";

const service = new ChatService();

export default function EnviarMensagem(props) {
  const [mensagem, setMensagem] = useState();

  const enviarMensagem = () => {
    service.enviarMensagem(
      props.idChat,
      props.anuncioProdutoAnunciado,
      props.idUsuario,
      mensagem
    );
  };

  return (
      <div className="col-11 py-2 d-flex flex-wrap">
        <InputText
          className="col-8"
          placeholder="Digite sua mensagem..."
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
        <div className="col-2 px-2">
          <Button
            className="w-100"
            label="Enviar"
            icon="pi pi-send"
            iconPos="right"
            onClick={() => {
              enviarMensagem();
            }}
          />
        </div>
        <div className="col-2 d-flex">
          <AvaliarUsuario usuario={props.idUsuario} idAnuncioProduto={props.idUsuario}  />
        </div>
      </div>
  );
}
