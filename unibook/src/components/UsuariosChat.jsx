import { Button } from "primereact/button";
import React from "react";

export default function UsuariosChat(props) {
  const setIdAnuncioProduto = () => {
    props.parentCallback(props.idAnuncio);
  };

  return (
    <div
      className="col-12 d-flex flex-wrap my-3 rounded border border-3 border-orange py-2 px-1 usuarios-chat"
      onClick={() => {
        setIdAnuncioProduto();
      }}
    >
      <div
        className="col-4 rounded-pill bg-white"
        style={{ width: "5rem", height: "5rem" }}
      >
        <img
          src={props.foto}
          alt={props.foto}
          className="img-fluid rounded-pill"
          style={{ width: "5rem", height: "5rem" }}
        />
      </div>
      <div className="col-8 d-flex align-items-center ps-2 text-white">
        <h5>{props.nome ? props.nome.slice(0, 13) + "..." : ""}</h5>
        <Button
          className="p-1"
          label="Ver produto"
          onClick={() => {
            window.location.href = `/produto/${props.idAnuncio}`;
          }}
        />
      </div>
    </div>
  );
}
