import React from "react";

import { Rating } from "primereact/rating";
import { Button } from "primereact/button";

import FormasPagamento from "./FormasPagamento";

class ProdutoPagamento extends React.Component{
    render(){
        return(
            <div className="col-12 h-100">
            <div className="col-12 d-flex flex-wrap">
                <div className="col-6 bg-bluelight">
                    <div className="col-12">Nome do livro</div>
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        <div className="col-10 bg-white" style={{width: '300px', height: '150px'}}></div>
                    </div>
                    <div className="col-12">
                        <Rating value={5} readOnly stars={5} cancel={false} /> 10.000 Avaliações
                    </div>
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                    <FormasPagamento/>
                </div>
            </div>
            <div className="col-12 d-flex flex-wrap bg-blue">
                <div className="col-6 d-flex justify-content-start">
                <Button
                    className="bg-orange rounded-pill border border-dark border-2 fw-bold px-4 py-1 text-dark"
                    label="Continuar Comprando"
                  />
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <span className="text-white fw-bold">R$ 00,00</span>
                    <Button
                    className="bg-yellow rounded-pill border border-dark border-2 fw-bold px-4 py-1 text-dark"
                    label="Comprar"
                  />
                </div>
            </div>
            </div>
        )
    }
}

export default ProdutoPagamento;