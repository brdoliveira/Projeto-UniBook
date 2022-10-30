import React, { useState } from "react";
// import React from "react";

import { ScrollPanel } from "primereact/scrollpanel";
import { Button } from "primereact/button";

import AdicionarCartao from "./AdicionarCartao";

export default function CartoesOpcoes(props) {
  const [showAdicionarCartao, setAdicionarCartao] = useState(false);
  // var labelsCartao = [];

  const handleAdicionarCartao = (childData) => {
    setAdicionarCartao(childData);
  };

  const adicionarCartao = () => {
    setAdicionarCartao(true);
  };

  return (
    <div className="col-12 d-flex flex-wrap justiy-content-center align-items-center">
      <div className="col-12 text-center fw-bold text-white">
        <h1 className="fw-bold py-4">
          {props.isCredit ? "Cartão de Crédito" : "Cartão de Débito"}
        </h1>
      </div>
      <div className="col-12 text-white">
        <h2>
          {props.isCredit
            ? "Seus cartões de crédito"
            : "Seus cartões de débito"}
        </h2>
      </div>
      <div className="col-12 d-flex align-items-center">
        <div className="col-11 d-flex">
          <ScrollPanel className="col-12 scroll text-dark mb-3 ps-1 justify-content-center flex-wrap rounded h-auto"></ScrollPanel>
        </div>
      </div>
      <div className="col-12 d-flex flex-wrap px-2">
        <div className="col-6 d-flex justify-content-start">
          <Button
            label={
              props.isCredit
                ? "Adicionar cartão de crédito"
                : "Adicionar cartão de débito"
            }
            className="bg-yellow border border-1 border-dark text-dark rounded-pill hover-yellow"
            icon="pi pi-plus"
            iconPos="right"
            onClick={adicionarCartao}
          />
        </div>
        <div className="col-6 d-flex justify-content-end">
          <Button
            label="Confirmar"
            className="bg-orange border border-1 border-dark text-dark rounded-pill hover-orange"
          />
        </div>
      </div>
      <AdicionarCartao
        isCredit={props.isCredit ? true : false}
        showAdicionarCartao={showAdicionarCartao}
        parentCallbackAdicionarCartao={handleAdicionarCartao}
      />
    </div>
  );
}
