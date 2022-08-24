import React from "react";

import { Link } from "react-router-dom";

import { Divider } from "primereact/divider";
import { Rating } from "primereact/rating";
import { Button } from "primereact/button";
import { Chip } from "primereact/chip";

class Produto extends React.Component {
  render() {
    return (
      <div className="col-12 d-flex flex-wrap">
        <div className="col-4 d-flex justify-content-center align-items-center">
            <div className="col-11 bg-blue h-100"></div>
        </div>
        <div className="col-8">
          <div className="col-12 py-2">
            <h3>Nome do Livro</h3>
            <Divider />
          </div>
          <div className="col-12">R$ 00,00</div>
          <div className="col-12 py-2">
            <Rating value={4} readOnly stars={5} cancel={false} />
          </div>
          <div className="col-12 py-2">
            <h3>Etiquetas</h3>
            <Chip label="Novo" className="mr-2 mb-2 custom-chip me-1" />
            <Chip label="Português" className="mr-2 mb-2 custom-chip me-1" />
            <Chip label="São Paulo" className="mr-2 mb-2 custom-chip me-1" />
            <Chip label="Editora Mundial" className="mr-2 mb-2 custom-chip me-1" />
          </div>
          <div className="col-12 py-2">
            <h3>Descrição</h3>
            <p>
              <span className="fw-bold">Número de Páginas: </span>0
            </p>
            <p>
              <span className="fw-bold">Ano: </span>0000
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
}

export default Produto;
