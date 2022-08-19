import { ScrollPanel } from "primereact/scrollpanel";
import { Button } from "primereact/button";

export default function CartoesOpcoes(props) {
  labelsCartao = {
    title: "",
    subtitle: "",
    selectCard : []
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
      <div className="col-10 d-flex flex-wrap">
        <div className="col-12 text-center fw-bold text-white">
          <h1>{labelsCartao.title}</h1>
        </div>
        <div className="col-12 text-white">
          <h1>{labelsCartao.subtitle}</h1>
        </div>
        <ScrollPanel
          className="col-12 scroll text-dark mb-3 ps-1 justify-content-center flex-wrap rounded"
          style={{ height: "50vh" }}
        ></ScrollPanel>
      </div>
      <div className="col-12">
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
