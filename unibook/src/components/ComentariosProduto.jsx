import React from "react";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import ComentarioItem from "./ComentarioItem";
import ComentarioVazio from "./ComentarioVazio";
import withParams from "../components/PegarParametros";

import MensagemService from "../app/service/mensagemService";
import { mensagemErro, mensagemSucesso } from "./Toastr";

class ComentariosProduto extends React.Component {
  constructor() {
    super();
    this.service = new MensagemService();
    this.state = {
      idUsuario: 0,
      idAnuncio: 0,
      mensagem: " ",
      mensagens: [],
    };
  }

  async componentDidMount() {
    let { id } = this.props.params;
    this.setState({ idAnuncio: id });
    this.buscarMensagensProdutos(id);

    let idUsuario = JSON.parse(localStorage.getItem("_usuario_logado")).id;
    this.setState({ idUsuario: idUsuario });
  }

  enviarMensagemParaProduto() {
    this.service
      .enviarMensagem(
        this.state.mensagem,
        this.state.idUsuario,
        this.state.idAnuncio
      )
      .then(() => {})
      .catch(() => {
        mensagemErro("Erro ao enviar mensagem, tente novamente");
        return;
      });
    mensagemSucesso("Mensagem enviada com sucesso");
    this.buscarMensagensProdutos(this.state.idAnuncio);
  }

  async buscarMensagensProdutos(idAnuncio) {
    await this.service
      .filtrarMensagemPorProduto(idAnuncio)
      .then((response) => {
        this.setState({
          mensagens: response.data.map((item, idx) => {
            return (
              <ComentarioItem
                id={idx}
                key={idx}
                nome={`Usuario ${item.nomeUsuario ? item.nomeUsuario : ""}`}
                mensagem={item.mensagem}
              />
            );
          }),
        });
      })
      .catch(
        this.setState({
          mensagens: <ComentarioVazio />,
        })
      );
  }

  render() {
    return (
      <div className="py-4">
        <div className="col-12 border-dark border-3 border-bottom mb-3">
          <h2 className="text-dark">Comentarios</h2>
        </div>
        <div className="col-12 border border-2 rounded p-2 py-4">
          <div className="col-12 d-flex justify-content-center">
            <h4 className="text-center">Comentários Anteriores</h4>
          </div>
          {this.state.mensagens}
        </div>
        <div className="col-12 border border-2 rounded p-2 py-4 my-2">
          <h5>Adicionar Comentario: </h5>
          <div className="col-12 d-flex">
            <div className="col-10">
              <InputText
                className="w-100"
                value={this.state.mensagem}
                onChange={(e) => this.setState({ mensagem: e.target.value })}
                placeholder="Adicionar comentário..."
              />
            </div>
            <div className="col-2 px-4">
              <Button
                className="w-100"
                label="Enviar Mensagem"
                icon="pi pi-send"
                iconPos="right"
                onClick={() => {
                  this.enviarMensagemParaProduto();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withParams(ComentariosProduto);
