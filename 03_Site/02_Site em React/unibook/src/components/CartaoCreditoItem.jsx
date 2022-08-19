import React, { useState } from "react";

import { RadioButton } from "primereact/radiobutton";

export default function FormasPagamento(props) {
  const [selectInstallment, onInstallmentChange] = useState(null);

  const installmentValue = props.installment;

  const installment = [
    { name: `1 * R$${installmentValue}`, code: `${installmentValue/1}` },
    { name: `2 * R$${installmentValue}`, code: `${installmentValue/2}` },
    { name: `3 * R$${installmentValue}`, code: `${installmentValue/3}` },
    { name: `4 * R$${installmentValue}`, code: `${installmentValue/4}` },
    { name: `5 * R$${installmentValue}`, code: `${installmentValue/5}` },
    { name: `6 * R$${installmentValue}`, code: `${installmentValue/6}` },
    { name: `7 * R$${installmentValue}`, code: `${installmentValue/7}` },
    { name: `8 * R$${installmentValue}`, code: `${installmentValue/8}` },
    { name: `9 * R$${installmentValue}`, code: `${installmentValue/9}` },
    { name: `10 * R$${installmentValue}`, code: `${installmentValue/10}` }
  ];

  return (
    <div className="col-12 d-flex flex-wrap" style={{width : '10vh'}}>
      <div className="col-2 d-flex justify-content-center align-items-center">
        <RadioButton
          inputId="formaPagamento"
          name="formaPagamento"
          value="Credito"
        />
      </div>
      <div className="col-4 d-flex justify-content-center align-items-center">
        <p className="col-12 fw-bold">###### terminado em #####</p>
        <Dropdown
          value={selectInstallment}
          options={installment}
          onChange={onInstallmentChange}
          optionLabel="name"
          placeholder="Selecione a forma de parcelamento"
          hidden={!props.isCredit}
        />
      </div>
      <div className="col-3">
        <p className="fw-bold col-12 text-center">Titulo do cartão</p>
        <p className="col-12 fw-bold"> AAAAA AAA AAAAAAA</p>
      </div>
      <div className="col-3">
        <p className="fw-bold col-12 text-center">Vencimento do cartão</p>
        <p className="col-12 fw-bold">00/00/0000</p>
      </div>
    </div>
  );
}
