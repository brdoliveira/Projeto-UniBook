import React from "react";

export default function FeedbackMessage() {
  return (
    <div className="col-12 border border-3 rounded my-2 p-2 border-blue">
      <p className="fw-bold">Nome</p>
      <p className="text-wrap">Mensagem</p>
    </div>
  );
}