import React from "react";

import UsuariosChat from "./UsuariosChat";
import ChatMessage from "./ChatMessage";

import { ScrollPanel } from "primereact/scrollpanel";
import EnviarMensagem from "./EnviarMensagem";
import ChatService from "../app/service/chatService";
import { mensagemErro } from "./Toastr";
import ComponenteItemsVazio from "./ComponenteItemsVazio";

class Chat extends React.Component {
  constructor() {
    super();
    this.service = new ChatService();
    this.state = {
      users: [],
      chat: [],
      idAnuncioProduto: 0,
      idUsuario: 0,
      idChat: 0,
    };
  }

  async componentDidMount() {
    let { id } = JSON.parse(localStorage.getItem("_usuario_logado"));
    this.setState({ idUsuario: id });

    await this.listaChat(id);
    this.buscarMensagens(id, this.state.idAnuncioProduto);
  }

  async listaChat(idUsuario) {
    await this.service.listarChat(idUsuario).then((response) => {
      this.setState({
        users: response.data.map((chat) => ({
          nome: chat.anuncioProduto.vendedor.nome,
          idAnuncio: chat.anuncioProduto.id,
        })),
        idAnuncioProduto: response.data[0]["anuncioProduto"]["id"],
        idChat: response.data[0]["id"],
      });
    });
  }

  buscarMensagens(idUsuario, idAnuncio) {
    this.service
      .buscarMensagens(idUsuario, idAnuncio)
      .then((response) => {
        this.setState({ chat: response.data.mensagemLista });
      })
      .catch(() => {
        mensagemErro("Nenhuma mensagem encontrada")
      });
  }

  handleCallback = (childData) => {
    this.setState({
      idAnuncioProduto: childData,
    });
    this.buscarMensagens(this.state.idUsuario, this.state.idAnuncioProduto);
  };

  render() {
    return (
      <div
        className="col-12 d-flex flex-wrap bg-blue py-4 rounded"
        style={{ height: "40rem" }}
      >
        <div className="col-12 text-center text-white">
          <h1>Chat</h1>
        </div>
        <div className="col-4 d-flex align-items-center justify-content-center">
          <ScrollPanel
            className="col-11 scroll text-dark mb-3 ps-1 justify-content-center flex-wrap"
            style={{ height: "40rem" }}
          >
            {
            this.state.usuario ?
            this.state.users.map((chat) => {
              return (
                <UsuariosChat
                  parentCallback={this.handleCallback}
                  key={chat.idAnuncio}
                  idAnuncio={chat.idAnuncio}
                  nome={chat.nome}
                />
              );
            }) : <ComponenteItemsVazio mensagem="Nenhum usuario encontrado"/>  
            }
          </ScrollPanel>
        </div>
        <div
          className="col-8 py-2 d-flex align-items-center justify-content-center flex-wrap"
          style={{ height: "30rem" }}
        >
          <ScrollPanel
            className="col-11 scroll text-dark bg-white rounded mb-3 ps-1 justify-content-center flex-wrap"
            style={{ height: "25rem" }}
          >
            {this.state.chat ? this.state.chat.map((chat) => {
              return (
                <ChatMessage
                  proprietarioMensagem={
                    chat.usuario.id === this.state.idUsuario ? true : false
                  }
                  mensagem={chat.mensagem}
                  nome={chat.usuario.nome}
                />
              );
            }) : <ComponenteItemsVazio mensagem="Nenhuma mensagem encontrada"/> }
          </ScrollPanel>
          <div className="col-12 d-flex justify-content-center">
            <EnviarMensagem
              anuncioProdutoAnunciado={this.state.idAnuncioProduto}
              idUsuario={this.state.idUsuario}
              idChat={this.state.idChat}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
