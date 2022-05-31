import "../templates/styles/styles-cadastro.css";

function CadastroEndereco() {
  return (
    <div className="col-12 d-flex flex-wrap align-items-center justify-content-center container-cadastro py-4 px-lg-0">
      <div className="d-none d-lg-block col-lg-1 text-center py-4 px-lg-0">
        <a href="/cadastro" className="text-decoration-none text-dark">
          <button
            style={{ width: "50px", height: "50px" }}
            className="border border-dark border-2 rounded-pill bg-orange button-cadastro"
          >
            <i className="bi bi-caret-left-fill"></i>
          </button>
          <div className="col-12">
            <span className="fw-bold"> Voltar </span>
          </div>
        </a>
      </div>
      <div className="col-11 col-lg-10 bg-blue p-4 div-cadastro rounded d-flex flex-wrap align-items-center justify-content-center">
        <h1 className="col-12 text-center text-white">Cadastro - Endereço</h1>
        <div className="col-12 col-md-6 px-4">
          <div className="col-12 text-white py-4">
            <span>Cidade</span>
            <input className="col-12 border border-0 rounded-pill px-3" />
          </div>
          <div className="col-12 text-white py-4">
            <span>Estado</span>
            <input className="col-12 border border-0 rounded-pill px-3" />
          </div>
          <div className="col-12 text-white py-4">
            <span>Logradouro</span>
            <input className="col-12 border border-0 rounded-pill px-3" />
          </div>
        </div>
        <div className="col-12 col-md-6 px-4">
          <div className="col-12 text-white py-4">
            <span>Numero</span>
            <input className="col-12 border border-0 rounded-pill px-3" />
          </div>
          <div className="col-12 text-white py-4">
            <span>CEP</span>
            <input className="col-12 border border-0 rounded-pill px-3" />
          </div>
          <div className="col-12 text-white py-4">
            <span>Complemento</span>
            <input className="col-12 border border-0 rounded-pill px-3" />
          </div>
        </div>
      </div>
      <div className="d-none d-lg-block col-lg-1 text-center py-4 px-lg-0">
        <a href="/cadastro/imagem" className="text-decoration-none text-dark">
          <button
            style={{ width: "50px", height: "50px" }}
            className="border border-dark border-2 rounded-pill bg-orange button-cadastro"
          >
            <i className="bi bi-caret-right-fill"></i>
          </button>
          <div className="col-12">
            <span className="fw-bold"> Proximo </span>
          </div>
        </a>
      </div>
      <div className="col-12 d-flex d-lg-none">
        <div className="text-center py-4 px-lg-0 col-6">
          <a href="/cadastro" className="text-decoration-none text-dark">
            <button
              style={{ width: "50px", height: "50px" }}
              className="border border-dark border-2 rounded-pill bg-orange button-cadastro"
            >
              <i className="bi bi-caret-left-fill"></i>
            </button>
            <div className="col-12">
              <span className="fw-bold"> Voltar </span>
            </div>
          </a>
        </div>
        <div className="text-center py-4 px-lg-0 col-6">
          <a href="/cadastro/imagem" className="text-decoration-none text-dark">
            <button
              style={{ width: "50px", height: "50px" }}
              className="border border-dark border-2 rounded-pill bg-orange button-cadastro"
            >
              <i className="bi bi-caret-right-fill"></i>
            </button>
            <div className="col-12">
              <span className="fw-bold"> Proximo </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default CadastroEndereco;
