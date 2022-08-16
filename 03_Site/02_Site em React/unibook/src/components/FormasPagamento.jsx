import Boleto from "../templates/images/formas-pagamentos/boleto.png";
import Credito from "../templates/images/formas-pagamentos/cartao-de-credito.png";
import Debito from "../templates/images/formas-pagamentos/cartao-de-debito.png";
import Pix from "../templates/images/formas-pagamentos/pix.png";

import React, { useState } from "react";

import { RadioButton } from "primereact/radiobutton";

export default function FormasPagamento() {
  const [formaPagamento, setFormaPagamento] = useState(null);

  return (
    <div className="col-12 d-flex flex-wrap">
      <div className="col-12 text-center">
        <h1 className="color-orange">Formas de Pagamento</h1>
      </div>
      <div className="col-12 d-flex flex-wrap py-3">
        <div className="col-4 d-flex justify-content-center align-items-center">
          <RadioButton
            inputId="formaPagamento1"
            name="formaPagamento"
            value="Boleto"
            onChange={(e) => setFormaPagamento(e.value)}
            checked={formaPagamento === "Boleto"}
          />
          <img src={Boleto} alt="icon-boleto" className="img-fluid p-2" style={{width: '100px',height: '100px'}} />
        </div>
        <div className="col-8">
          <h1>Boleto</h1>
        </div>
      </div>
      <div className="col-12 d-flex flex wrap py-3">
        <div className="col-4 d-flex justify-content-center align-items-center">
          <RadioButton
            inputId="formaPagamento2"
            name="formaPagamento"
            value="Credito"
            onChange={(e) => setFormaPagamento(e.value)}
            checked={formaPagamento === "Credito"}
          />
          <img src={Credito} alt="icon-credito" className="img-fluid p-2" style={{width: '100px',height: '100px'}} />
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
            value="Debito"
            onChange={(e) => setFormaPagamento(e.value)}
            checked={formaPagamento === "Debito"}
          />

          <img src={Debito} alt="icon-debito" className="img-fluid p-2" style={{width: '100px',height: '100px'}}/>
        </div>
        <div className="col-8">
          <h1>Débito</h1>
        </div>
      </div>
      <div className="col-12 d-flex flex wrap py-3">
        <div className="col-4 d-flex justify-content-center align-items-center">
          <RadioButton
            inputId="formaPagamento4"
            name="formaPagamento"
            value="Pix"
            onChange={(e) => setFormaPagamento(e.value)}
            checked={formaPagamento === "Pix"}
          />
          <img src={Pix} alt="icon-pix" className="img-fluid p-2" style={{width: '100px',height: '100px'}}/>
        </div>
        <div className="col-8">
          <h1>Pix</h1>
        </div>
      </div>
    </div>
  );
}
