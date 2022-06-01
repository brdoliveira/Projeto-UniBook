import "../templates/styles/styles-cadastro.css";

function CadastroEndereco() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    sessionStorage.setItem("cidade", data.cidade);
    sessionStorage.setItem("estado", data.estado);
    sessionStorage.setItem("logradouro", data.logradouro);
    sessionStorage.setItem("numero", data.numero);
    sessionStorage.setItem("cep", data.cep);

    if (data.complemento) {
      sessionStorage.setItem("complemento", data.complemento);
    } else {
      sessionStorage.setItem("complemento", "");
    }

    window.location.href = "/cadastro/imagem";
  };

  const backWindow = () => {
    window.history.back();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="col-12 d-flex flex-wrap align-items-center justify-content-center container-cadastro py-4 px-lg-0">
        <div className="d-none d-lg-block col-lg-1 text-center py-4 px-lg-0">
          <span className="text-decoration-none text-dark">
            <button
              style={{ width: "50px", height: "50px" }}
              className="border border-dark border-2 rounded-pill bg-orange button-cadastro"
              onClick={backWindow}
            >
              <i className="bi bi-caret-left-fill"></i>
            </button>
            <div className="col-12">
              <span className="fw-bold" onClick={backWindow}>
                {" "}
                Voltar{" "}
              </span>
            </div>
          </span>
        </div>
        <div className="col-11 col-lg-10 bg-blue p-4 div-cadastro rounded d-flex flex-wrap align-items-center justify-content-center">
          <h1 className="col-12 text-center text-white">Cadastro - Endereço</h1>
          <div className="col-12 col-md-6 px-4">
            <div className="col-12 text-white py-4">
              <span>Cidade</span>
              <input
                className="col-12 border border-0 rounded-pill px-3"
                name="cidade"
                type="text"
                placeholder="Digite sua cidade ..."
                required
              />
            </div>
            <div className="col-12 text-white py-4">
              <span>Estado</span>
              <input
                className="col-12 border border-0 rounded-pill px-3"
                name="estado"
                type="text"
                placeholder="Digite seu estado ..."
                required
              />
            </div>
            <div className="col-12 text-white py-4">
              <span>Logradouro</span>
              <input
                className="col-12 border border-0 rounded-pill px-3"
                name="logradouro"
                type="text"
                placeholder="Digite seu logradouro ..."
                required
              />
            </div>
          </div>
          <div className="col-12 col-md-6 px-4">
            <div className="col-12 text-white py-4">
              <span>Numero</span>
              <input
                className="col-12 border border-0 rounded-pill px-3"
                name="numero"
                type="text"
                placeholder="Digite o numero da sua casa ..."
                required
              />
            </div>
            <div className="col-12 text-white py-4">
              <span>CEP</span>
              <input
                className="col-12 border border-0 rounded-pill px-3"
                name="cep"
                type="text"
                placeholder="Digite seu CEP ..."
                required
              />
            </div>
            <div className="col-12 text-white py-4">
              <span>Complemento (Opcional)</span>
              <input
                className="col-12 border border-0 rounded-pill px-3"
                name="complemento"
                type="type"
                placeholder="Digite o complemento da sua casa ..."
              />
            </div>
          </div>
        </div>
        <div className="d-none d-lg-block col-lg-1 text-center py-4 px-lg-0">
          <span type="submit" className="text-decoration-none text-dark">
            <button
              style={{ width: "50px", height: "50px" }}
              className="border border-dark border-2 rounded-pill bg-orange button-cadastro"
            >
              <i className="bi bi-caret-right-fill"></i>
            </button>
            <div className="col-12">
              <span className="fw-bold"> Proximo </span>
            </div>
          </span>
        </div>
        <div className="col-12 d-flex d-lg-none">
          <div className="text-center py-4 px-lg-0 col-6">
            <span className="text-decoration-none text-dark">
              <button
                style={{ width: "50px", height: "50px" }}
                className="border border-dark border-2 rounded-pill bg-orange button-cadastro"
                onClick={backWindow}
              >
                <i className="bi bi-caret-left-fill"></i>
              </button>
              <div className="col-12">
                <span className="fw-bold" onClick={backWindow}>
                  {" "}
                  Voltar{" "}
                </span>
              </div>
            </span>
          </div>
          <div className="text-center py-4 px-lg-0 col-6">
            <span type="submit" className="text-decoration-none text-dark">
              <button
                style={{ width: "50px", height: "50px" }}
                className="border border-dark border-2 rounded-pill bg-orange button-cadastro"
              >
                <i className="bi bi-caret-right-fill"></i>
              </button>
              <div className="col-12">
                <span className="fw-bold"> Proximo </span>
              </div>
            </span>
          </div>
        </div>
      </div>
    </form>
  );
}
export default CadastroEndereco;
