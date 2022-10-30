import Boleto from "../templates/images/formas-pagamentos/boleto.png";
import Credito from "../templates/images/formas-pagamentos/cartao-de-credito.png";
import Debito from "../templates/images/formas-pagamentos/cartao-de-debito.png";
import Pix from "../templates/images/formas-pagamentos/pix.png";

import React, { useState, useEffect } from "react";
// import React from "react";

import { RadioButton } from "primereact/radiobutton";

export default function FormasPagamento(props) {
  const [formaPagamento, setFormaPagamento] = useState(
    props.pagamentoEscolhido
  );

  useEffect(() => {
    setFormaPagamento(props.pagamentoEscolhido);
  }, [props.pagamentoEscolhido]);

  function onTriggerPagamentoEscolhido(e) {
    setFormaPagamento(e);
    props.parentCallbackPagamentoEscolhido(e);
  }

  return (
    <div className="col-12 d-flex flex-wrap">
      <div className="col-12 text-center">
        <h1 className="color-orange">Formas de Pagamento</h1>
      </div>
      <div className="col-12 d-flex flex wrap py-3">
        <div className="col-4 d-flex justify-content-center align-items-center">
          <RadioButton
            inputId="formaPagamento2"
            name="formaPagamento"
            value="credito"
            onChange={(e) => {
              onTriggerPagamentoEscolhido(e.value);
            }}
            checked={formaPagamento === "credito"}
          />
          <img
            src={Credito}
            alt="icon-credito"
            className="img-fluid p-2"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <div className="col-8">
          <h1>Crédito</h1>
        </div>
      </div>
      <div className="col-12 d-flex flex wrap py-3">
        <div className="col-4 d-flex justify-content-center align-items-center">
          <RadioButton
            inputId="formaPagamento3"
            name="formaPagamento"
            value="debito"
            onChange={(e) => {
              onTriggerPagamentoEscolhido(e.value);
            }}
            checked={formaPagamento === "debito"}
          />

          <img
            src={Debito}
            alt="icon-debito"
            className="img-fluid p-2"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <div className="col-8">
          <h1>Débito</h1>
        </div>
      </div>
      <div className="col-12 d-flex flex-wrap py-3">
        <div className="col-4 d-flex justify-content-center align-items-center">
          <RadioButton
            inputId="formaPagamento1"
            name="formaPagamento"
            value="boleto"
            onChange={(e) => {
              onTriggerPagamentoEscolhido(e.value);
            }}
            checked={formaPagamento === "boleto"}
          />
          <img
            src={Boleto}
            alt="icon-boleto"
            className="img-fluid p-2"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <div className="col-8">
          <h1>Boleto</h1>
        </div>
      </div>
      <div className="col-12 d-flex flex wrap py-3">
        <div className="col-4 d-flex justify-content-center align-items-center">
          <RadioButton
            inputId="formaPagamento4"
            name="formaPagamento"
            value="pix"
            onChange={(e) => {
              onTriggerPagamentoEscolhido(e.value);
            }}
            checked={formaPagamento === "pix"}
          />
          <img
            src={Pix}
            alt="icon-pix"
            className="img-fluid p-2"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <div className="col-8">
          <h1>Pix</h1>
        </div>
      </div>
    </div>
  );
}
