import { Button } from "primereact/button";

export default function PagamentoBoleto() {
  return (
    <div className="col-12 d-flex flex-wrap justiy-content-center align-items-center">
      <div className="col-10 d-flex flex-wrap">
        <div className="col-12 fw-bold text-white">Boleto</div>
        <div className="col-12">
          <h2>O código de acompanhamento do seu pedido é 30940499</h2>
          <div className="col-12 d-flex align-items-center">
            <Button label="Gerar Boleto" icon="pi pi-qrcode" iconPos="right" />
          </div>
          <h2>
            Em instantes você receberá um e-mail de confirmação da sua compra.
          </h2>
        </div>
      </div>
    </div>
  );
}
