import React from "react";

import { Button } from "primereact/button";
import { Chart } from "primereact/chart";

import "../templates/styles/styles-perfil.css";

function PerfilAnalitycs() {
  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "#2f4860",
        borderColor: "#2f4860",
        tension: 0.4,
      },
      {
        label: "Second Dataset",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        backgroundColor: "#00bb7e",
        borderColor: "#00bb7e",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="col-12 d-flex flex-wrap">
      <div className="col-12 col-md-4 d-flex flex-wrap align-items-center justify-content-start bg-orange div-perfil p-4">
        <div className="col-12 bg-white p-3 rounded h-100">
          <h2 className="d-flex align-items-center">
            Volume total de vendas
            <Button
              icon="pi pi-info"
              className="ms-2 p-button-rounded p-button-secondary p-button-outlined"
              aria-label="Information"
              style={{ width: "30px", height: "30px" }}
            />
          </h2>
          <h3 className="text-dark fw-bold">R$ 00,00</h3>
          <Chart type="line" data={lineData} />
          <div className="col-12 d-flex align-items-center justify-content-center">
            <Button label="Ver detalhes" icon="pi pi-angle-right" className="p-button-outlined col-11 my-4 py-3 border-blue border-4 fw-bold color-blue" iconPos="right" />
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 d-flex flex-wrap align-items-center justify-content-center bg-orange div-perfil p-4">
        <div className="col-12 bg-white p-3 rounded h-100">
          <h2 className="d-flex align-items-center">
            Quantidade de vendas
            <Button
              icon="pi pi-info"
              className="ms-2 p-button-rounded p-button-secondary p-button-outlined"
              aria-label="Information"
              style={{ width: "30px", height: "30px" }}
            />
          </h2>
          <h3 className="text-dark fw-bold">0 vendas</h3>
          <Chart type="line" data={lineData} />
          <div className="col-12 d-flex align-items-center justify-content-center">
            <Button label="Ver detalhes" icon="pi pi-angle-right" className="p-button-outlined col-11 my-4 py-3 border-blue border-4 fw-bold color-blue" iconPos="right" />
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 d-flex flex-wrap align-items-center justify-content-end bg-orange div-perfil p-4">
        <div className="col-12 bg-white p-3 rounded h-100">
          <h2 className="d-flex align-items-center">
            Média de vendas
            <Button
              icon="pi pi-info"
              className="ms-2 p-button-rounded p-button-secondary p-button-outlined"
              aria-label="Information"
              style={{ width: "30px", height: "30px" }}
            />
          </h2>
          <h3 className="text-dark fw-bold">R$ 00,00</h3>
          <Chart type="line" data={lineData} />
          <div className="col-12 d-flex align-items-center justify-content-center">
            <Button label="Ver detalhes" icon="pi pi-angle-right" className="p-button-outlined col-11 my-4 py-3 border-blue border-4 fw-bold color-blue" iconPos="right" />
          </div>
        </div>
      </div>
      <div className="div-perfil-items py-2 col-12">
        <div className="w-100 col-12"></div>
      </div>
    </div>
  );
}

export default PerfilAnalitycs;
