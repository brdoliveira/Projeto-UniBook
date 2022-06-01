import "../templates/styles/styles-cadastro.css";

function CadastroUsuario() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    sessionStorage.setItem("cpf", data.cpf);
    sessionStorage.setItem("usuario", data.usuario);
    sessionStorage.setItem("email", data.email);
    sessionStorage.setItem("senha", data.senha);
    sessionStorage.setItem("data", data.data);
    sessionStorage.setItem("sexo", data.sexo);

    window.location.href = "/cadastro/endereco";
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="col-12 d-flex flex-wrap align-items-center justify-content-center container-cadastro py-4 px-lg-0">
        <div className="d-none d-lg-block col-lg-1 text-center">
          <div style={{ width: "50px", height: "50px" }}></div>
        </div>
        <div className="col-11 col-lg-10 bg-blue p-4 div-cadastro rounded d-flex flex-wrap align-items-center justify-content-center">
          <h1 className="col-12 text-center text-white">Cadastro - Usuario</h1>
          <div className="col-12 col-md-6 px-4">
            <div className="col-12 text-white py-4">
              <span>Usuario</span>
              <input
                className="col-12 border border-0 rounded-pill px-3"
                type="text"
                placeholder="digite seu usuario ..."
                name="usuario"
                required
              />
            </div>
            <div className="col-12 text-white py-4">
              <span>Email</span>
              <input
                className="col-12 border border-0 rounded-pill px-3"
                type="text"
                placeholder="digite seu email ..."
                name="email"
                required
              />
            </div>
            <div className="col-12 text-white py-4">
              <span>Senha</span>
              <input
                className="col-12 border border-0 rounded-pill px-3"
                type="password"
                placeholder="digite uma senha ..."
                name="senha"
                required
              />
            </div>
          </div>
          <div className="col-12 col-md-6 px-4">
            <div className="col-12 text-white py-4">
              <span>Data Nascimento</span>
              <input
                className="col-12 border border-0 rounded-pill px-3"
                type="date"
                name="data"
                required
              />
            </div>
            <div className="col-12 text-white py-4">
              <span className="col-12">Sexo</span>
              <div className="col-12 d-flex flex-wrap">
                <div className="col-4">
                  <input
                    type="radio"
                    placeholder="digite seu genero ..."
                    name="sexo"
                    value="F"
                    required
                  />{" "}
                  Feminino
                </div>
                <div className="col-4">
                  <input
                    type="radio"
                    placeholder="digite seu genero ..."
                    name="sexo"
                    value="M"
                    required
                  />{" "}
                  Masculino
                </div>
                <div className="col-4">
                  <input
                    type="radio"
                    placeholder="digite seu genero ..."
                    name="sexo"
                    value="O"
                    required
                  />{" "}
                  Outros
                </div>
              </div>
            </div>
            <div className="col-12 text-white py-4">
              <span>CPF</span>
              <input
                className="col-12 border border-0 rounded-pill px-3"
                type="cpf"
                maxLength={12}
                placeholder="digite seu CPF ..."
                name="cpf"
                required
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-1 text-center py-4 px-lg-0">
          <span className="text-decoration-none text-dark" type="submit">
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
    </form>
  );
}

export default CadastroUsuario;
