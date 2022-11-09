export default function ChatMessage(props) {
  if (props.proprietarioMensagem) {
    return (
      <div className="col-12 d-flex justify-content-end">
        <div className="col-8 border border-3 rounded my-2 p-3 border-orange">
          <div className="col-12 d-flex justify-content-end py-1 fw-bold">
          {props.nome ? props.nome : ""}
          </div>
          <div className="col-12 d-flex">
            <p className="col-11 text-break px-2">
              {props.mensagem ? props.mensagem : ""}
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="col-12 d-flex justify-content-start">
      <div className="col-8 border border-3 rounded my-2 p-3 border-blue">
        <div className="col-12 d-flex justify-content-end py-1 fw-bold">
            {props.nome ? props.nome : ""}
        </div>
        <div className="col-12 d-flex">
          <p className="col-11 text-break px-2">
            {props.mensagem ? props.mensagem : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
