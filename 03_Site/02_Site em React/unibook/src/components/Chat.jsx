import React from "react";

import UsuariosChat from "./UsuariosChat";
import ChatMessage from "./ChatMessage";

import { ScrollPanel } from "primereact/scrollpanel";
import EnviarMensagem from "./EnviarMensagem";

class Chat extends React.Component {
  render() {
    return (
      <div className="col-12 d-flex flex-wrap bg-blue py-4 rounded" style={{ height: "60vh" }}>
        <div className="col-12 text-center text-white">
            <h1>Chat</h1>
        </div>
        <div className="col-4 d-flex align-items-center justify-content-center">
          <ScrollPanel className="col-11 scroll text-dark mb-3 ps-1 justify-content-center flex-wrap" style={{ height: "50vh" }}>
            <UsuariosChat />
            <UsuariosChat />
            <UsuariosChat />
            <UsuariosChat />
            <UsuariosChat />
            <UsuariosChat />
            <UsuariosChat />
            <UsuariosChat />
            <UsuariosChat />
            <UsuariosChat />
            <UsuariosChat />
          </ScrollPanel>
        </div>
        <div className="col-8 py-2 d-flex align-items-center justify-content-center flex-wrap">
          <ScrollPanel className="col-11 scroll text-dark bg-white rounded mb-3 ps-1 justify-content-center flex-wrap" style={{ height: "40vh" }}>
            <ChatMessage />
            <ChatMessage proprietarioMensagem="true" />
            <ChatMessage proprietarioMensagem="true" />
            <ChatMessage proprietarioMensagem="true" />
            <ChatMessage />
            <ChatMessage />
            <ChatMessage proprietarioMensagem="true" />
            <ChatMessage />
            <ChatMessage />
          </ScrollPanel>
          <div className="col-12">
            <EnviarMensagem/>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
