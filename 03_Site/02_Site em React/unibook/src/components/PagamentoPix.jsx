import { Button } from "primereact/button";

export default function PagamentoPix() {
  return (
    <div className="col-12 d-flex flex-wrap justiy-content-center align-items-center">
      <div className="col-12 text-center">
        <h1 className="fw-bold text-white py-4">Pix</h1>
      </div>
        <div className="col-12 px-5">
          <h2 className="text-white fw-bold text-center">Copie ou escanei o QR CODE</h2>
          <h3 className="text-white text-center">
            Ao copiar o código, abra seu aplicativo cadastrado no PIX e
            realizado o seu pagamento de forma rápida.
          </h3>
        </div>
      <div className="col-12 d-flex flex-wrap px-5 justify-content-center">
        <div className="bg-white" style={{width: "300px", height: "300px"}}></div>
        <div className="col-12 d-flex justify-content-center py-5">
            <Button label="Cópiar Código"/>
        </div>
      </div>
    </div>
  );
}
