import { Dropdown } from "primereact/dropdown";
import { useEffect } from "react";
import { useState } from "react";
import BiService from "../app/service/biService";

const biService = new BiService();

export default function DadosVisitas() {
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const [usuariosAtivosNumero, setUsuariosAtivosNumero] = useState(null);
  const [usuarioInativosNumero, setUsuariosInativosNumero] = useState(null);

  useEffect(() => {
    usuariosAtivos()
    usuarioInativos()
  }, [usuariosAtivosNumero,usuarioInativosNumero]);

  const usuariosAtivos = async () => {
    await biService.usuarioAtivos().then((response) => {
      setUsuariosAtivosNumero(response.data)
    })
  }

  const usuarioInativos = async () => {
    await biService.usuarioInativos().then((response) => {
      setUsuariosInativosNumero(response.data)
    })
  }

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
              <span className="fw-bold">{ usuariosAtivosNumero ? usuariosAtivosNumero : 0}</span>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 px-4 d-flex flex-wrap">
            <div className="col-12 text-center text-dark fw-bold h-50">
              <h4>Usuarios Inativos</h4>
            </div>
            <div className="col-12 text-center p-2 bg-blue rounded text-white display-6 d-flex align-items-center justify-content-center h-50">
              <span className="fw-bold">{ usuarioInativosNumero ? usuarioInativosNumero : 0}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
