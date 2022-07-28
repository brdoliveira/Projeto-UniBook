import "../templates/styles/styles-menu.css";

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg bg-blue">
      <div className="container-fluid">
        <div className="col-3 col-sm-2">
          <a className="navbar-brand px-3 text-white" href="/">
            Unibook
          </a>
        </div>
        <div className="col-9 col-sm-8 col-lg-4">
          <form action="#" className="search-wrap">
            <div className="input-group w-100">
              <input
                type="text"
                className="form-control search-form"
                placeholder="Pesquisar livro . . ."
              />
              <div className="input-group-append">
                <button
                  className="btn btn-search text-white search-button border border-0 py-2 button-menu"
                  type="submit"
                >
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-2 col-sm-2 d-bloc d-lg-none">
          <button
            className="navbar-toggler mx-2 mt-y border border-1 border-white me-4 button-menu"
            style={{ width: "40px", height: "40px" }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list text-white"></i>
          </button>
        </div>
        <div
          className="navbar-collapse collapse show col-12 col-lg-6"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
            <li className="nav-item rounded mx-1 li-menu">
              <a
                className="nav-link text-white px-3 a-menu"
                aria-current="page"
                href="/fale-conosco"
              >
                Fale Conosco
              </a>
            </li>
            <li className="nav-item rounded mx-1 li-menu">
              <a className="nav-link text-white px-3" href="/quem-somos">
                Quem Somos
              </a>
            </li>
            <li className="nav-item dropdown li-menu">
              <button
                className="text-white nav-link dropdown-toggle btn btn-secondary dropdown-toggle bg-blue border border-white border-1 p-2 d-lg-block d-none button-menu"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Faça seu Login
              </button>
              <ul
                className="w-25 dropdown-menu bg-blue border border-white border-2 p-2"
                aria-labelledby="navbarDropdown"
              >
                <li className="li-menu">
                  <a
                    className="dropdown-item rounded border border-white border-3 px-2 fw-bold text-center text-white a-menu"
                    href="/login"
                  >
                    Login
                  </a>
                </li>
                <li className="rounded li-menu">
                  <a
                    className="dropdown-item mt-2 rounded text-white rounded a-menu"
                    href="/cadastro"
                  >
                    Cliente novo?
                    <br />
                    <b>Comece aqui.</b>
                  </a>
                </li>
              </ul>
            </li>
            <div className="col-12 d-block d-lg-none py-2">
              <div className="col-12 bg-blue rounded border border-white border-2 p-2 text-center">
                <a className="text-decoration-none a-menu" href="/login">
                  <li className="col-12 rounded border border-white border-3 px-2 fw-bold text-center text-white py-2 li-menu">
                    Login
                  </li>
                </a>
                <div className="col-12">
                  <a className="text-decoration-none a-menu" href="/cadastro">
                    <li className="mt-2 rounded text-white li-menu">
                      Cliente novo?
                      <b>Comece aqui.</b>
                    </li>
                  </a>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Menu;
