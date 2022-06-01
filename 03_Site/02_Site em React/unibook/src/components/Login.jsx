import "../templates/styles/styles-login.css";

function Login() {
  const doLogin = (e) => {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    let login = data.login;
    let senha = data.senha;

    console.log("login = ", login)
    console.log("senha = ", senha)
  };

  return (
    <form onSubmit={doLogin}>
      <div className="col-12 px-0 bg-image bg-height d-flex justify-content-end">
        <div className="col-12 col-md-6 col-lg-5 bg-bluelight bg-height d-flex align-items-center px-4">
          <div className="d-block col-12">
            <h1 className="text-white text-center">Login</h1>
            <div className="col-12 text-white py-2">
              <span>Login</span>
              <input
                type="text "
                className="col-12 border border-0 rounded-pill px-3"
                name="login"
                placeholder="Digite seu usuario ..."
                required
              />
            </div>
            <div className="col-12 text-white py-2">
              <span>Senha</span>
              <input
                type="password"
                className="col-12 border border-0 rounded-pill px-3"
                name="senha"
                placeholder="Digite sua senha ..."
                required
              />
            </div>
            <div className="col-12 text-end text-white pb-3">
              <p>Esqueci a senha</p>
            </div>
            <div className="col-12 text-white text-end">
              <a href="/cadastro" className="text-decoration-none text-white">
                <span className="pe-2" style={{ fontSize: "13px" }}>
                  Criar conta <b>clique aqui</b>
                </span>
              </a>
              <button className="bg-orange rounded-pill border border-dark border-2 fw-bold px-4 py-1 button-entrar" type="submit">
                Entrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
