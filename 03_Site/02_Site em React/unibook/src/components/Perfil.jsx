import '../templates/styles/styles-perfil.css'

function Perfil(){
    return(
        <div
        className="col-12 d-flex flex-wrap align-items-center justify-content-center container-perfil py-4 px-lg-0"
      >
        <div
          className="col-11 col-lg-10 div-perfil d-flex flex-wrap justify-content-center"
        >
          <div
            className="col-12 col-md-6 bg-orange div-perfil rounded d-flex flex-wrap align-items-center justify-content-center py-4"
          >
            <div
              className="col-12 bg-white rounded-pill d-flex flex-wrap align-items-center justify-content-center"
              style={{height: '300px', width: '300px'}}
            >
              <img alt="" />
            </div>
            <span className="col-12 text-center text-dark py-2">
              <span className="fs-3"> Nome Sobrenome, idade </span>
              <br />
              <span><i className="bi bi-geo-alt-fill"></i> Endereço</span>
            </span>
          </div>
          <div className="col-12 col-md-6">
            <div className="col-12 bg-blue text-white py-2 my-2 rounded">
              <span>Sexo: A</span>
            </div>
            <div className="col-12 bg-blue text-white py-2 my-2 rounded">
              <span>CPF: 000.000.000-00</span>
            </div>
            <div className="col-12 bg-blue text-white py-2 my-2 rounded">
              <span>Email: email@gmail.com</span>
            </div>
            <div className="col-12 bg-blue text-white py-2 my-2 rounded">
              <span>Data de nascimento: 00/00/0000</span>
            </div>
            <div className="col-12 d-flex flex-wrap">
              <div className="col-12 col-lg-5 text-center py-2">
                <button
                  className="bg-orange rounded-pill border border-dark border-2 fw-bold px-4 py-1 w-100 w-lg-75 button-perfil"
                >
                  Editar
                </button>
              </div>
              <div className="col-12 col-lg-7 text-center py-2">
                <button
                  className="bg-orange rounded-pill border border-dark border-2 fw-bold px-4 py-1 w-100 button-perfil"
                >
                  Adicionar Produto +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Perfil;