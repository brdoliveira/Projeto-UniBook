import React from "react";

export default function ProdutoFavorito(){
    return (
      <div className="col-12 border border-3 rounded my-2 p-2 border-orange d-flex flex-wrap bg-orangelightbook text-dark">
      <div className="col-4">
        <img src="" alt="" />
      </div>
      <div className="col-8 d-flex flex-wrap">
        <div className="col-11">
          <span className="fw-bold text-wrap">Nome Sobrenomes</span>
        </div>
        <div className="col-1 d-flex align-items-end">
          <i className="pi pi-heart-fill cursor-pointer"></i>
        </div>
        <div className="col-12">
          <span className="text-wrap">R$ 00,00</span>
        </div>
      </div>
    </div>
    );
}
