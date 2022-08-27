import { ScrollPanel } from "primereact/scrollpanel";
import { Button } from "primereact/button";

export default function CartoesOpcoes(props) {
  var labelsCartao = {
    title: "",
    subtitle: "",
    selectCard: [],
  };

  if (props.isCredit) {
    labelsCartao.title = "Cartão de Crédito";
    labelsCartao.subtitle = "Seus cartões de crédito";
  } else {
    labelsCartao.title = "Cartão de Débito";
    labelsCartao.subtitle = "Seus cartões de débito";
  }

  return (
    <div className="col-12 d-flex flex-wrap justiy-content-center align-items-center">
      <div className="col-12 text-center fw-bold text-white">
        <h1 className="fw-bold py-4">{labelsCartao.title}</h1>
      </div>
      <div className="col-12 text-white">
        <h2>{labelsCartao.subtitle}</h2>
      </div>
      <div className="col-12 d-flex align-items-center">
        <div className="col-11 d-flex">
          <ScrollPanel className="col-12 scroll text-dark mb-3 ps-1 justify-content-center flex-wrap rounded h-auto"></ScrollPanel>
        </div>
      </div>
      <div className="col-12 d-flex flex-wrap px-2">
        <div className="col-6 d-flex justify-content-start">
          <Button
            label="Adicionar cartão de crédito"
            className="bg-yellow border border-1 border-dark text-dark rounded"
            icon="pi pi-plus"
            iconPos="right"
          />
        </div>
        <div className="col-6 d-flex justify-content-end">
          <Button
            label="Confirmar"
            className="bg-orange border border-1 border-dark text-dark rounded"
          />
        </div>
      </div>
    </div>
  );
}
