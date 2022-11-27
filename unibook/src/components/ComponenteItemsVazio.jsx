import React from "react";

export default function ComponenteItemsVazio(props){
    return(
        <>
            <div className="col-12 d-flex justify-content-center align-items-center py-4 bg-secondary fw-bold text-white rounded">
                <h4 className="py-4">{props.mensagem ? props.mensagem : "Dados não encontrado"}</h4>
            </div>
        </>
    )
}