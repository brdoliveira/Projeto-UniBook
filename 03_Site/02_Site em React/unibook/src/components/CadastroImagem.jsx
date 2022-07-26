import React from "react";
import iconAddImage from "../templates/images/icon-add-image.png";

class CadastroImagem extends React.Component {
  render() {
    return (
      <>
        <div className="col-12 bg-blue rounded d-flex flex-wrap align-items-center justify-content-center">
          <h1 className="col-12 text-center text-white">Cadastro - Imagem</h1>
          <div className="col-12 d-flex flex-wrap align-items-center justify-content-center">
            <div
              className="col-12 bg-white rounded-pill d-flex flex-wrap align-items-center justify-content-center"
              style={{ height: "300px", width: "300px" }}
            >
              <img
                src={iconAddImage}
                alt=""
                id="imgPhoto"
                className="rounded-pill"
                style={{ height: "300px", width: "300px" }}
              />
            </div>
            <div className="col-12 text-center py-2">
              <input
                type="file"
                name="img"
                id="flImage"
                className="btn btn-success bg-orange rounded-pill border border-dark border-2 fw-bold px-4 py-1 button-cadastro"
                accept="image/png, image/jpeg"
                required
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CadastroImagem;
