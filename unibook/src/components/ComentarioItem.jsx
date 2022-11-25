export default function ComentarioItem(props) {
      return (
        <div className="col-12 d-flex justify-content-start">
          <div className="col-12 border border-3 rounded my-2 p-3 border-orange">
            <div className="col-12 d-flex justify-content-start py-1 fw-bold">
            {props.nome ? props.nome : ""}
            </div>
            <div className="col-12 d-flex">
              <p className="col-11 text-break">
                {props.mensagem ? props.mensagem : ""}
              </p>
            </div>
          </div>
        </div>
      );
}