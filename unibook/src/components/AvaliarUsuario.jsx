import React, { useState } from "react";

import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Rating } from 'primereact/rating';
import FeedbackService from "../app/service/feedbackSerivce";
import { mensagemErro, mensagemSucesso } from "./Toastr";

const serviceFeedback = new FeedbackService();

export default function AvaliarUsuario(props) {
  const [displayBasic, setDisplayBasic] = useState(false);
  const [star, setStar] = useState(null);
  const [setPosition] = useState("center");

  const header = `Avaliar usuario ${props.usuario ? props.usuario : ""}`

  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
  };

  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);

    if (position) {
      setPosition(position);
    }
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  const sendFeedback = () => {
    if(star === null){
        mensagemErro("Digite uma nota")
        return
    }

    try {
        serviceFeedback.avaliarComprador(props.idAnuncioProduto,star)
    } catch (error) {
        try{
            serviceFeedback.avaliarVendedor(props.idAnuncioProduto,star)
        }catch(error){
            mensagemErro(`Erro ao avaliar o usuario ${props.usuario}, tente mais tarde`)
        }
    }
    mensagemSucesso("Usuario avaliado, obrigado pelo feedback")
  }

  return (
    <>
      <Button
        onClick={() => onClick("displayBasic")}
        icon="pi pi-star"
        iconPos="right"
        label="Avaliar Usuario"
      ></Button>
      <Dialog
        header={header}
        visible={displayBasic}
        style={{ width: "15vw", height: "23vh" }}
        onHide={() => onHide("displayBasic")}
      >
        <span>Dar nota:</span>
        <Rating value={star} cancel={false} onChange={(e) => setStar(e.value)} />
        <div className="col-12 d-flex justify-content-end pt-4 mt-4">
          <Button
            label="Enviar Feedback"
            icon="pi pi-send"
            iconPos="right"
            onClick={sendFeedback}
          />
        </div>
      </Dialog>
    </>
  );
}
