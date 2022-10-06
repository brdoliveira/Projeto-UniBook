import React from "react";

import { Link } from "react-router-dom";

import { Divider } from "primereact/divider";
import { Rating } from "primereact/rating";
import { Button } from "primereact/button";
import { Chip } from "primereact/chip";

export default function Produto(props) {
  const livro = props.livro

  return (
    <div className="col-12 d-flex flex-wrap">
      <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
        <div className="col-11 bg-blue h-100"></div>
      </div>
      <div className="col-12 col-lg-8">
        <div className="col-12 py-2">
          <h3>{livro.titulo}</h3>
          <Divider />
        </div>
        <div className="col-12">R$ {livro.valor}</div>
        <div className="col-12 py-2">
          <Rating value={4} readOnly stars={5} cancel={false} />
        </div>
        <div className="col-12 py-2">
          <h3>Etiquetas</h3>
          <Chip label={livro.estadoUso} className="mr-2 mb-2 custom-chip me-1" />
          <Chip label="Português" className="mr-2 mb-2 custom-chip me-1" />
          <Chip
            label="Editora Mundial"
            className="mr-2 mb-2 custom-chip me-1"
          />
        </div>
        <div className="col-12 py-2">
          <h3>Descrição</h3>
          <p>
            {/* <span className="fw-bold">Número de Páginas: </span>0 */}
            {livro.descricao}
          </p>
          <p>
            <span className="fw-bold">Ano: </span> {livro.anoPublicacao}
          </p>
          <p>
            <span className="fw-bold">Quantidade: </span> {livro.quantidade}
          </p>
          <p className="fw-bold color-orange">
            *Livros com algumas marcações por dentro
          </p>
        </div>
        <div className="col-12 d-flex justify-content-end align-items-center">
          <Button
            icon="pi pi-comments"
            className="p-button-rounded me-1"
            aria-label="Chat"
          /> 
          {/* Botão Chat */}
          <Link to="pagamento" className="text-decoration-none">
            <Button
              className="bg-orange rounded-pill border border-dark text-dark border-2 fw-bold px-4 button-perfil ms-1"
              label="Comprar"
            />
          </Link>
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
