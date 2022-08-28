import React, { useState , useEffect } from "react";

import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Password } from "primereact/password";
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

  return (
    <Dialog
      header={
        props.isCredit
          ? "Adicionar Cartão de Crédito"
          : "Adicionar Cartão de Débito"
      }
      visible={displayModal}
      modal={false}
      style={{ width: "50vw" }}
      onHide={() => {onHide(); onTriggerAdicionarCartao()}}
    >
      <div className="col-12 d-flex flex-wrap">
        <div className="col-12">
          <div className="col-12">
            <p>Nome do titular</p>
            <InputText
              value={state.holder}
              onChange={(e) => setState({ holder: e.target.value })}
              className="col-12 border border-0 rounded-pill"
              type="text"
              placeholder="Digite o nome do titular..."
            />
            <p>Número do cartão</p>
            <InputText
              value={state.number}
              onChange={(e) => setState({ number: e.target.value })}
              className="col-12 border border-0 rounded-pill"
              type="text"
              placeholder="Digite o numero do cartão..."
            />
            <p>Data de validade</p>
            <Calendar
              id="monthpicker"
              value={state.expiration_date}
              onChange={(e) => setState({ expiration_date: e.value })}
              view="month"
              dateFormat="mm/yy"
            />
            <p>
              Código de segurança (CVV){" "}
              <Password
                value={state.cvv}
                onChange={(e) => setState({ cvv: e.target.value })}
                feedback={false}
              />
              <div className="text-white">(O que é isso?)</div>
            </p>
          </div>
          <div className="col-12 d-flex justify-content-end align-items-end">
            <span className="text-white fw-bold">Cancelar</span>
            <Button
              label="Adicionar"
              className="bg-orange border border-1 border-dark text-dark rounded"
            />
          </div>
        </div>
      </div>
    </Dialog>
  );
}
