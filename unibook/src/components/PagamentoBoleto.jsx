import { Button } from "primereact/button";
import React from "react";

export default function PagamentoBoleto() {
  return (
    <div className="col-12 d-flex flex-wrap justiy-content-center align-items-center">
        <div className="col-12 text-center">
          <h1 className="fw-bold text-white py-4">Boleto</h1>
        </div>
        <div className="col-12 text-center text-white">
          <h2>O código de acompanhamento do seu pedido é 30940499</h2>
          <div className="col-12 d-flex justify-content-center py-4">
            <Button className="p-4 px-5" label="Gerar Boleto" icon="pi pi-qrcode" iconPos="right" />
          </div>
          <h2>
            Em instantes você receberá um e-mail de confirmação da sua compra.
          </h2>
        </div>
    </div>
  );
}
