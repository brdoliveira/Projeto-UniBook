import React, { useState, useEffect } from "react";

import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Password } from "primereact/password";
import { Tooltip } from "primereact/tooltip";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

export default function AdicionarCartao(props) {
  const [displayModal, setDisplayModal] = useState(props.showAdicionarCartao);

  useEffect(() => {
    setDisplayModal(props.showAdicionarCartao);
  }, [props.showAdicionarCartao]);

  function onTriggerAdicionarCartao() {
    props.parentCallbackAdicionarCartao(false);
  }

  const [state, setState] = useState({
    brand: "",
    number: "",
    cvv: "",
    expiration_date: "",
    holder: "",
  });

  const onHide = () => {
    setDisplayModal(false);
  };

  var tooltipCvv = "Na maioria dos cartões, ele fica no verso,\n logo abaixo da linha magnética.\n São três ou quatro dígitos.";

  return (
    <Dialog
      header={
        props.isCredit
          ? "Adicionar Cartão de Crédito"
          : "Adicionar Cartão de Débito"
      }
      visible={displayModal}
      modal={false}
      style={{ width: "25vw" }}
      onHide={() => {
        onHide();
        onTriggerAdicionarCartao();
      }}
    >
      <div className="col-12 d-flex flex-wrap">
        <div className="col-12">
          <div className="col-12">
            <p>Nome do titular</p>
            <InputText
              value={state.holder}
              onChange={(e) => setState({ holder: e.target.value })}
              className="col-12 border border-1 rounded-pill mb-3"
              type="text"
              placeholder="Digite o nome do titular..."
            />
            <p>Número do cartão</p>
            <InputText
              value={state.number}
              onChange={(e) => setState({ number: e.target.value })}
              className="col-12 border border-1 rounded-pill mb-3"
              type="text"
              placeholder="Digite o numero do cartão..."
            />
            <p>
              <div className="col-12">Código de segurança (CVV)</div>
              <Tooltip target=".disabled-button" />
              <span
                className="disabled-button color-orange cursor-pointer"
                data-pr-tooltip={tooltipCvv}
              >
                (O que é isso?)
              </span>
            </p>
            <Password
              value={state.cvv}
              onChange={(e) => setState({ cvv: e.target.value })}
              feedback={false}
              className="col-12 border border-1 rounded-pill mb-3"
            />
            <p>Data de validade</p>
            <Calendar
              id="monthpicker"
              value={state.expiration_date}
              onChange={(e) => setState({ expiration_date: e.value })}
              view="month"
              dateFormat="mm/yy"
              className="col-6 border border-1 rounded-pill mb-3"
            />
          </div>
          <div className="col-12 d-flex justify-content-end align-items-center">
            <span className="text-dark px-2 cursor-pointer" onClick={onHide}>
              Cancelar
            </span>
            <Button
              label="Adicionar"
              className="bg-orange border border-1 border-dark text-dark rounded-pill hover-orange"
            />
          </div>
        </div>
      </div>
    </Dialog>
  );
}
