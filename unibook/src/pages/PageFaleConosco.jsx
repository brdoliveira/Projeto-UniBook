import Menu from "../components/Menu";
import FaleConosco from "../components/FaleConosco";

function PageFaleConosco() {
  return (
    <>
      <div className="min-vh-100">
      <Menu />
      <div className="col-12 d-flex justify-content-center align-items-center pt-5">
        <FaleConosco />
      </div>
      </div>
    </>
  );
}

export default PageFaleConosco;
