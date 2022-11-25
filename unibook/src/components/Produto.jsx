import React from "react";
import { Divider } from "primereact/divider";
import { Rating } from "primereact/rating";
import { Button } from "primereact/button";
import { Chip } from "primereact/chip";

import CarrinhosService from "../app/service/carrinhosService";
import { mensagemErro, mensagemSucesso } from "./Toastr";
import ChatService from "../app/service/chatService";
import ComponenteVazioHome from "./ComponenteVazioHome";
import ComentariosProduto from "./ComentariosProduto";

const service = new CarrinhosService();
const serviceChat = new ChatService();

export default function Produto(props) {
  const livro = props.livro;
  let { id } =  JSON.parse(localStorage.getItem("_usuario_logado"));

  const comprarProduto = async () => {
    let idLivro = livro.id;
    let quantidade = 1;

    service
      .adicionarProduto(id, idLivro, quantidade)
      .then(() => {
        mensagemSucesso("Produto adicionado ao carrinho");
      })
      .catch((erro) => {
        mensagemErro(erro.response.data.message);
        setTimeout(() => {
          window.location.href = "/";
        }, 5000);
      });
  };

  const verPerfilVendedor = () => {
    window.location.href = `/usuario/${livro.idVendedor}`;
  };

  const iniciarChat = (idProduto) => {
    let { id } = JSON.parse(localStorage.getItem("_usuario_logado"));
      serviceChat.salvarChat(id,idProduto).then(() => {
          window.location.href = `/chat`;
        }).catch(() => {
          mensagemErro("Erro ao iniciar o chat, tente mais tarde")
          setTimeout(() => {window.location.href = "/"}, 3000);
        })

  };

  return (
    <div className="col-12 d-flex flex-wrap">
      <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
        <div className="col-11 bg-blue h-100"></div>
      </div>
      <div className="col-12 col-lg-8">
        <div className="col-12 py-2">
          <h3>{livro.titulo ? livro.titulo : ""}</h3>
          <Divider />
        </div>
        <div className="col-12">R$ {livro.valor ? livro.valor : 0.0}</div>
        <div className="col-12 py-2">
          <Rating value={4} readOnly stars={5} cancel={false} />
        </div>
        <div className="col-12 py-2">
          <h3>Etiquetas</h3>
          <Chip
            label={livro.estadoUso ? livro.estadoUso.toLowerCase() : "Perfeito"}
            className="mr-2 mb-2 custom-chip me-1 text-capitalize"
          />
          <Chip
            label={livro.idioma ? livro.idioma.toLowerCase() : "Português"}
            className="mr-2 mb-2 custom-chip me-1 text-capitalize"
          />
          <Chip
            label={livro.editora ? livro.editora.toLowerCase() : "Editora"}
            className="mr-2 mb-2 custom-chip me-1 text-capitalize"
          />
        </div>
        <div className="col-12 py-2">
          <h3>Descrição</h3>
          <p>
            {/* <span className="fw-bold">Número de Páginas: </span>0 */}
            {livro.descricao}
          </p>
          <p>
            <span className="fw-bold">Ano: </span>{" "}
            {livro.anoPublicacao ? livro.anoPublicacao : "0000"}
          </p>
          <p>
            <span className="fw-bold">Quantidade: </span>{" "}
            {livro.quantidade ? livro.quantidade : "0"}
          </p>
          <p className="fw-bold color-orange">
            *Livros com algumas marcações por dentro
          </p>
        </div>
        <div className="col-12 d-flex justify-content-end align-items-center">
          <Button
            icon="pi pi-user"
            label="Ver perfil vendedor"
            className="p-button p-component bg-yellow rounded-pill border border-dark border-2 fw-bold px-4 py-1 text-dark py-2 px-4 me-2 hover-yellow"
            iconPos="right"
            onClick={() => {
              verPerfilVendedor();
            }}
          />
          <Button
            icon="pi pi-comments"
            label="Chat"
            className="p-button p-component bg-yellow rounded-pill border border-dark border-2 fw-bold px-4 py-1 text-dark py-2 px-4 me-2 hover-yellow"
            iconPos="right"
            onClick={() => {
              iniciarChat(livro.id);
            }}
          />
          <Button
            icon="pi pi-shopping-cart"
            className="bg-orange rounded-pill border border-dark text-dark border-2 fw-bold px-4 button-perfil ms-1"
            label="Comprar"
            iconPos="right"
            onClick={() => {
              comprarProduto();
            }}
          />
        </div>
      </div>
      <div className="div-perfil-items py-4 col-12">
        <div className="col-12 border-dark border-3 border-bottom">
          <h2 className="text-dark">Recomendados</h2>
        </div>
        <div className="col-12 d-flex py-2">
          <ComponenteVazioHome/>
        </div>
        <div className="col-12">
          <ComentariosProduto/>
        </div>
      </div>
    </div>
  );
}
