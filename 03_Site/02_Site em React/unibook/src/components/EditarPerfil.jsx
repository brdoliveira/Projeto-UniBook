import iconAddImage from '../templates/images/icon-add-image.png';
import '../templates/styles/styles-editar-perfil.css';

function EditarPerfil(){
    return(
        <div
        className="col-12 d-flex flex-wrap align-items-center justify-content-center py-4 px-lg-0"
      >
        <div
          className="col-11 col-lg-10 bg-blue p-4 rounded d-flex flex-wrap align-items-end justify-content-center"
        >
          <h1 className="col-12 text-center text-white pb-4">Editar - Perfil</h1>
          <div
            className="col-12 d-flex flex-wrap align-items-center justify-content-center"
          >
            <div
              className="col-12 bg-white rounded-pill d-flex flex-wrap align-items-center justify-content-center"
              style={{height: '300px', width: '300px'}}
            >
              <img src={iconAddImage} alt="Adicionar Imagem" />
            </div>
            <div className="col-12 text-center py-2">
              <button
                className="bg-orange rounded-pill border border-dark border-2 fw-bold px-4 py-1 button-editar"
              >
                Alterar Imagem +
              </button>
            </div>
          </div>
          <h1 className="text-white col-12 border-bottom border-2 border-white">
            Usuario
          </h1>
          <div className="col-12 col-md-6">
            <div className="col-12 text-white p-4">
              <span>Usuario</span>
              <input className="col-12 border border-0 rounded-pill" />
            </div>
            <div className="col-12 text-white py-4">
              <span>Email</span>
              <input className="col-12 border border-0 rounded-pill" />
            </div>
            <div className="col-12 text-white py-4">
              <span>Senha</span>
              <input className="col-12 border border-0 rounded-pill" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="col-12 text-white py-4">
              <span>Data Nascimento</span>
              <input className="col-12 border border-0 rounded-pill" />
            </div>
            <div className="col-12 text-white py-4">
              <span>Sexo</span>
              <input className="col-12 border border-0 rounded-pill" />
            </div>
            <div className="col-12 text-white py-4">
              <span>CPF</span>
              <input className="col-12 border border-0 rounded-pill" />
            </div>
          </div>
          <h1 className="text-white col-12 border-bottom border-2 border-white">
            Endereço
          </h1>
          <div className="col-12 col-md-6">
            <div className="col-12 text-white p-4">
              <span>Cidade</span>
              <input className="col-12 border border-0 rounded-pill" />
            </div>
            <div className="col-12 text-white py-4">
              <span>Estado</span>
              <input className="col-12 border border-0 rounded-pill" />
            </div>
            <div className="col-12 text-white py-4">
              <span>Logradouro</span>
              <input className="col-12 border border-0 rounded-pill" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="col-12 text-white py-4">
              <span>Numero</span>
              <input className="col-12 border border-0 rounded-pill" />
            </div>
            <div className="col-12 text-white py-4">
              <span>CEP</span>
              <input className="col-12 border border-0 rounded-pill" />
            </div>
            <div className="col-12 text-white py-4">
              <span>Complemento</span>
              <input className="col-12 border border-0 rounded-pill" />
            </div>
          </div>
          <div className="col-12 d-flex justify-content-end">
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <button
                className="bg-orange rounded-pill border border-dark border-2 fw-bold px-4 py-1 w-100 button-editar"
              >
                Editar Perfil
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default EditarPerfil;