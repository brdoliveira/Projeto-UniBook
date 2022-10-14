import { Dropdown } from "primereact/dropdown";
import { useState } from "react";

export default function DadosVisitas() {
  const [selectedPeriod, setSelectedPeriod] = useState(null);

  const period = [
    { name: "4 Junho - 31 Julho", code: "NY" },
    { name: "4 Junho - 31 Julho", code: "RM" },
    { name: "4 Junho - 31 Julho", code: "LDN" },
    { name: "4 Junho - 31 Julho", code: "IST" },
    { name: "4 Junho - 31 Julho", code: "PRS" },
  ];

  const onPeriodChange = (e) => {
    setSelectedPeriod(e.value);
  };

  return (
    <>
      <div className="col-12">
        <div className="col-12 d-flex align-items-center justify-content-end px-5">
          <div className="col-2">
            <Dropdown
              value={selectedPeriod}
              options={period}
              onChange={onPeriodChange}
              optionLabel="name"
              placeholder="4 Junho - 31 Julho"
              className="w-100"
            />
          </div>
        </div>
        <div className="row col-12 d-flex flex-wrap py-3">
          <div className="col-12 col-md-6 col-lg-3 px-4 d-flex flex-wrap">
            <div className="col-12 text-center text-dark fw-bold h-50">
              <h4>Visitas Mês</h4>
            </div>
            <div className="col-12 text-center p-2 bg-blue rounded text-white display-6 d-flex align-items-center justify-content-center h-50">
              <span className="fw-bold">140</span>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 px-4 d-flex flex-wrap">
            <div className="col-12 text-center text-dark fw-bold h-50">
              <h4>Visitas Últimos 7 dias</h4>
            </div>
            <div className="col-12 text-center p-2 bg-blue rounded text-white display-6 d-flex align-items-center justify-content-center h-50">
              <span className="fw-bold">140</span>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 px-4 d-flex flex-wrap">
            <div className="col-12 text-center text-dark fw-bold h-50">
              <h4>Usuarios Ativos</h4>
            </div>
            <div className="col-12 text-center p-2 bg-blue rounded text-white display-6 d-flex align-items-center justify-content-center h-50">
              <span className="fw-bold">140</span>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 px-4 d-flex flex-wrap">
            <div className="col-12 text-center text-dark fw-bold h-50">
              <h4>Usuarios Inativos</h4>
            </div>
            <div className="col-12 text-center p-2 bg-blue rounded text-white display-6 d-flex align-items-center justify-content-center h-50">
              <span className="fw-bold">140</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
