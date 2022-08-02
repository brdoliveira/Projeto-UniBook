import CardProduto from "../components/CardProduto";
import Menu from "../components/Menu";

import imageHome from "../templates/images/imagem-home.jpg";
import "../templates/styles/styles-index.css";

function PageHome() {
  return (
    <>
      <Menu />
      <div className="col-12 bg-image px-0 mx-0">
        <img src={imageHome} className="bg-image" alt="Imagem da home" />
      </div>
      <div className="col-12">
        <div className="container">
          <h2 className="col-12 py-2 border-bottom border-3 border-dark">
            Editora Globo
          </h2>
          <div className="row mb-md-2 py-3">
            <CardProduto/>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageHome;
