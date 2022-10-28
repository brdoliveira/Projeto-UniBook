import React from "react";
import { Divider } from "primereact/divider";
import { Rating } from "primereact/rating";
import { Button } from "primereact/button";
import { Chip } from "primereact/chip";

import AuthService from "../app/service/authService";
import CarrinhosService from "../app/service/carrinhosService";
import { mensagemErro, mensagemSucesso } from "./Toastr";
const service = new CarrinhosService();

export default function Produto(props) {
  const livro = props.livro;
  let {id} = AuthService.obterUsuarioAutenticado();

  const comprarProduto = async () => {
    let idLivro = livro.id;
    let quantidade = 1; 

    service.adicionarProduto(id,idLivro,quantidade).then(
      () => {
        mensagemSucesso("Produto adicionado ao carrinho");
      }
    ).catch((erro) => {
      mensagemErro(erro.response.data.message);
      setTimeout(() => {window.location.href = "/"}, 5000);
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
        <div className="col-12">R$ {livro.valor ? livro.valor : 0.00}</div>
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
            <span className="fw-bold">Ano: </span> {livro.anoPublicacao ? livro.anoPublicacao : '0000'}
          </p>
          <p>
            <span className="fw-bold">Quantidade: </span> {livro.quantidade ? livro.quantidade : '0'}
          </p>
          <p className="fw-bold color-orange">
            *Livros com algumas marcações por dentro
          </p>
        </div>
        <div className="col-12 d-flex justify-content-end align-items-center">
          {/* Botão Chat */}
          <Button
            icon="pi pi-user"
            aria-label="Ver perfil vendedor"
            iconPos="right"
          /> 
          <Button
            icon="pi pi-comments"
            className="p-button-rounded me-1"
            aria-label="Chat"
          />
          <Button
            className="bg-orange rounded-pill border border-dark text-dark border-2 fw-bold px-4 button-perfil ms-1"
            label="Comprar"
            onClick={() => {
              comprarProduto();
            }}
          />
        </div>
      </div>
      <div className="div-perfil-items py-4 col-12">
        <div className="w-100 col-12 border-dark border-3 border-bottom">
          <h2 className="text-dark">Recomendados</h2>
        </div>
      </div>
    </div>
  );
}
