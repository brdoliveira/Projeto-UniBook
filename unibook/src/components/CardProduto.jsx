import { Card } from "primereact/card";
import { Button } from "primereact/button";

import FavoritosService from "../app/service/favoritosService";
import { mensagemErro, mensagemSucesso } from "./Toastr";
import EditarProduto from "./EditarProduto";
import DeletarProduto from "./DeletarProduto";
import { useState } from "react";

const service = new FavoritosService();

function CardProduto(props) {
  const [isDono] = useState(props.isDono)
  const livro = props.livro;
  const key = props.id

  const header = (
    <div className="col-12">
      <div className="position-absolute d-flex justify-content-end ms-3 mt-2">
        <Button
          icon="pi pi-bookmark"
          className="p-button-rounded p-button-secondary"
          aria-label="Bookmark"
          onClick={() => {
            adicionarFavorito(livro.id);
          }}
          hidden={isDono}
          key={key + 1000}
        />
        <div hidden={!isDono}>
        <EditarProduto key={key + 2000} id={props.livro.id}/>
        <DeletarProduto
          id={props.livro.id}
          key={key + 3000}
          nome={livro.titulo}
          />
          </div>
      </div>
      <img
        alt="Card"
        src={livro.foto ? livro.foto : ""}
        style={{ height: "10rem" }}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
      />
    </div>
  );

  const adicionarFavorito = async (id) => {
    var usuarioLogado = JSON.parse(localStorage.getItem("_usuario_logado"));
    if (usuarioLogado) {
      await service
        .adicionarFavorito(usuarioLogado.id, id)
        .then((response) => {
          mensagemSucesso("Produto adicionado aos favoritos");
        })
        .catch((erro) => {
          mensagemErro(erro.response.data.message);
        });
    } else {
      mensagemErro("Faça login para adicionar algum livro aos favoritos");
    }
  };

  const comprarLivro = (id) => {
    var usuarioLogado = JSON.parse(localStorage.getItem("_usuario_logado"));
    if (usuarioLogado) {
      localStorage.setItem("_livro_escolhido", JSON.stringify(livro));
      window.location.href = `/produto/${id}`;
    } else {
      mensagemErro("Faça login para comprar algum livro");
    }
  };

  const footer = (
    <span>
      <div className="col-12 d-flex flex-wrap">
        <div className="col-4">
          <p className="fw-bold m-0">Preço</p>
          <p>R$ {livro.valor}</p>
        </div>
        <div className="col-8 d-flex justify-content-end align-items-start">
          <Button
            label="Comprar"
            icon="pi pi-shopping-cart"
            onClick={() => {
              comprarLivro(livro.id);
            }}
            iconPos="right"
          />
        </div>
      </div>
    </span>
  );
  return (
    <>
      <Card
        key={key + 4000}
        title={
          livro.titulo.length >= 30
            ? livro.titulo.slice(0, 30) + "..."
            : livro.titulo
        }
        subTitle={
          livro.descricao.length >= 20
            ? livro.descricao.slice(0, 21) + "..."
            : livro.descricao
        }
        style={{ width: "20rem", height: "25rem" }}
        className="border border-2 border-secondary rounded col-3 m-1 text-break"
        header={header}
      >
        <div className="p-card-footer">{footer}</div>
      </Card>
    </>
  );
}

export default CardProduto;
