import "../templates/styles/styles-perfil.css";

import { Button } from "primereact/button";

function PerfilUsuario() {
  return (
    <div className="col-12 d-flex flex-wrap">
      <div className="col-12 col-md-6 bg-orange div-perfil rounded d-flex flex-wrap align-items-center justify-content-center py-4">
        <div
          className="col-12 bg-white rounded-pill d-flex flex-wrap align-items-center justify-content-center"
          style={{ height: "300px", width: "300px" }}
        >
          <img alt="" />
        </div>
        <span className="col-12 text-center text-dark py-2">
          <span className="fs-3"> Nome Sobrenome, idade </span>
          <br />
          <span>
            <i className="bi bi-geo-alt-fill"></i> Endereço
          </span>
        </span>
      </div>
      <div className="col-12 col-md-6 flex-wrap align-items-start px-2">
        <div className="col-12 bg-blue text-white py-3 my-2 rounded px-3">
          <span>Sexo: A</span>
        </div>
        <div className="col-12 bg-blue text-white py-3 my-2 rounded px-3">
          <span>CPF: 000.000.000-00</span>
        </div>
        <div className="col-12 bg-blue text-white py-3 my-2 rounded px-3">
          <span>Email: email@gmail.com</span>
        </div>
        <div className="col-12 bg-blue text-white py-3 my-2 rounded px-3">
          <span>Data de nascimento: 00/00/0000</span>
        </div>
        <div className="col-12 d-flex flex-wrap">
          <div className="col-12 col-lg-5 text-center py-2 px-3">
            <Button
              className="bg-orange rounded-pill border border-dark text-dark border-2 fw-bold px-4 py-3 w-100 w-lg-75 button-perfil"
              label="Editar"
            />
          </div>
          <div className="col-12 col-lg-7 text-center py-2 px-3">
            <Button
              className="bg-orange rounded-pill border border-dark text-dark border-2 fw-bold px-4 py-3 w-100 button-perfil"
              label="Adicionar Produto"
              icon="pi pi-plus"
              iconPos="right"
            />
          </div>
        </div>
      </div>
      <div className="div-perfil-items py-2 col-12">
        <div className="w-100 col-12 border-dark border-3 border-bottom"><h2 className="text-dark">Historico de Compras</h2></div>
      </div>
    </div>
  );
}

export default PerfilUsuario;
