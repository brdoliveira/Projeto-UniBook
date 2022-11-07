import React, { useEffect, useState } from "react";
import api from "../chat";
import "../templates/styles/index.css";

const ChatRoom = () => {
  const [tab, setTab] = useState("CHATROOM");
  const [lista, setLista] = useState([]);
  const usuario_logado = JSON.parse(localStorage.getItem("_usuario_logado"))

  useEffect(() => {
    api.get(`/chat/usuario/${usuario_logado.id}`).then((response) => {
      console.log(response.data);
      setLista(response.data);
    });
  }, []);

  useEffect(() => {
    api.get(`/chat-mensagens`).then((response) => {
      console.log(response.data);
      setLista(response.data);
    });
  }, []);

  return (
    <div className="container">
        <div className="chat-box">
          <div className="member-list">
            <ul>
                {lista.map((chat) => {
                  return <li onClick={() => {
                      setTab(chat.usuario.id==usuario_logado.id?
                        chat.anuncioProduto.vendedor.nome:
                        chat.usuario.nome);
                    }}
                    className={`member ${tab === chat.usuario.nome && "active"}`}
                    key={chat.id}>
                    {chat.usuario.id==usuario_logado.id?
                        chat.anuncioProduto.vendedor.nome:
                        chat.usuario.nome}
                  </li>
                  })}
            </ul>
          </div>
            <div className="chat-content">
              <ul className="chat-messages">
              </ul>
              <div className="send-message">
                <input type="text" className="input-message"
                  placeholder="Envie sua mensagem"/>
                <button
                  type="button"
                  className="send-button">Enviar</button>
              </div>
             </div>
        </div>
    </div>
  );
};

export default ChatRoom;
