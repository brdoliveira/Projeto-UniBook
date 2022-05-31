import iconAddImage from "../templates/images/icon-add-image.png";
import "../templates/styles/styles-cadastro.css";

function CadastroImagem() {
  const finalizarCadastro = () => {
    console.log(file.files);
  };

  let photo = document.getElementById("imgPhoto");
  let file = document.getElementById("flImage");

  photo.addEventListener("click", () => {
    file.click();
  });

  file.addEventListener("change", () => {
    if (file.files.length <= 0) {
      return;
    }

    let reader = new FileReader();

    reader.onload = () => {
      photo.src = reader.result;
    };

    reader.readAsDataURL(file.files[0]);
  });

  return (
    <div>
      <div className="col-12 d-flex flex-wrap align-items-center justify-content-center container-cadastro py-4 px-lg-0">
        <div className="col-1 text-center d-none d-lg-block">
          <a
            href="/cadastro/endereco"
            className="text-decoration-none text-dark"
          >
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
          <h1 className="col-12 text-center text-white">Cadastro - Imagem</h1>
          <div className="col-12 d-flex flex-wrap align-items-center justify-content-center">
            <div
              className="col-12 bg-white rounded-pill d-flex flex-wrap align-items-center justify-content-center"
              style={{ height: "300px", width: "300px" }}
            >
              <img src={iconAddImage} alt="" id="imgPhoto" className="rounded-pill" style={{ height: "300px", width: "300px" }}/>
            </div>
            <div className="col-12 text-center py-2">
              <input
                type="file"
                name="arquivos"
                id="flImage"
                className="btn btn-success bg-orange rounded-pill border border-dark border-2 fw-bold px-4 py-1 button-cadastro"
                accept="image/png, image/jpeg"
                multiple
              />
            </div>
          </div>
        </div>
        <div className="col-1 text-center d-none d-lg-block">
          <div style={{ width: "50px", height: "50px" }}></div>
        </div>
      </div>
      <div className="col-11 text-end d-none d-lg-block">
        <button
          className="bg-orange rounded-pill border border-dark border-2 fw-bold px-4 py-1 button-cadastro"
          onClick={finalizarCadastro}
        >
          Finalizar Cadastro
        </button>
      </div>
      <div className="col-11 d-flex d-block d-lg-none">
        <div className="col-6 text-center">
          <a
            href="/cadastro/endereco"
            className="text-decoration-none text-dark"
          >
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
        <div className="col-6 text-center">
          <button
            className="bg-orange rounded-pill border border-dark border-2 fw-bold px-4 py-1 button-cadastro"
            onClick={finalizarCadastro}
          >
            Finalizar Cadastro
          </button>
        </div>
      </div>
    </div>
  );
}

export default CadastroImagem;
