function Card() {
  return (
    <>
      <div className="col-md-6 col-lg-4 d-inline-block">
        <div className="card shadow-sm border-light mb-4">
          <a href="/" className="position-relative">
            <img
              src="https://via.placeholder.com/500x350/5fa9f8/ffffff"
              className="card-img-top"
              alt="Imagem do produto"
            />
          </a>
          <div className="card-body">
            <a href="/">
              <h5 className="font-weight-normal color-blue">
                Livro de Geografia
              </h5>
            </a>
            <div className="post-meta">
              <span className="small lh-120">
                <i className="bi bi-bookmark-fill mr-2"></i>Editora Globo , 1994
              </span>
            </div>
            <div className="d-flex my-4">
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <span className="badge badge-pill badge-secondary ml-2">5.0</span>
            </div>
            <div className="d-flex flex-wrap justify-content-between col-12">
              <div className="col-6 col-sm-4 col-md-6 col-lg-4 pl-0 text-center">
                <span className="text-muted font-small d-block mb-2">
                  Qtdade.
                </span>
                <span className="h5 text-dark font-weight-bold">2</span>
              </div>
              <div className="col-6 col-sm-4 col-md-6 col-lg-4 px-lg-0 text-center">
                <span className="text-muted font-small d-block mb-2">
                  Preço
                </span>
                <span className="h5 text-dark font-weight-bold">R$ 10</span>
              </div>
              <div className="col-12 col-sm-4 col-md-12 col-lg-4 pr-0 d-flex align-items-center justify-content-center">
                <button className="btn bg-blue text-white px-4 px-lg-1 btn-comprar">
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
