import React, { useEffect , useState} from "react";

import UsuariosChat from "./UsuariosChat";
import ChatMessage from "./ChatMessage";

import { ScrollPanel } from "primereact/scrollpanel";
import EnviarMensagem from "./EnviarMensagem";
import ChatService from "../app/service/chatService";

const service = new ChatService();

function Chat() {
  const [listaUsers, setListaUsers] = useState([]);
  const [listaChat, setListChat] = useState([]);
  let { id } = JSON.parse(localStorage.getItem("_usuario_logado"))

  useEffect(() => {
    service.chatUsuario(JSON.parse(localStorage.getItem("_usuario_logado")).id).then((response) => {
      console.log(response.data);
      setListaUsers(response.data);
    });
  }, []);

  useEffect(() => {
    service.pegarMensagens().then((response) => {
      console.log(response.data);
      setListChat(response.data);
    });
  }, []);

  return (
    <div
      className="col-12 d-flex flex-wrap bg-blue py-4 rounded"
      style={{ height: "60vh" }}
    >
      <div className="col-12 text-center text-white">
        <h1>Chat</h1>
      </div>
      <div className="col-4 d-flex align-items-center justify-content-center">
        <ScrollPanel
          className="col-11 scroll text-dark mb-3 ps-1 justify-content-center flex-wrap"
          style={{ height: "50vh" }}
        >
            {listaUsers.map((chat) => {
                  return <UsuariosChat onClick={() => { console.log("Iniciar Chat")}}
                    key={chat.id}
                    nome={chat.usuario.id === id?
                        chat.anuncioProduto.vendedor.nome:
                        chat.usuario.nome}
                  />
            })}
        </ScrollPanel>
      </div>
      <div className="col-8 py-2 d-flex align-items-center justify-content-center flex-wrap">
        <ScrollPanel
          className="col-11 scroll text-dark bg-white rounded mb-3 ps-1 justify-content-center flex-wrap"
          style={{ height: "40vh" }}
        >
          { listaChat.map((chat) => {
            return <ChatMessage 
              proprietarioMensagem={chat.usuario.id === id ? true : false}
              mensagem={chat.mensagem}
              nome={chat.mensagem}
            />
          })}
        </ScrollPanel>
        <div className="col-12">
          <EnviarMensagem />
        </div>
      </div>
    </div>
  );
}

export default Chat;
