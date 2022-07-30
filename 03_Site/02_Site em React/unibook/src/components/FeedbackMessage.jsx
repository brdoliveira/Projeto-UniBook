import React from "react";

class FeedbackMessage extends React.Component{
    render(){
        return(
            <div className="col-12 border border-3 rounded my-2 p-2 border-blue">
                <p className="fw-bold">Nome</p>
                <p className="text-wrap">Mensagem</p>
            </div>
        )
    }
}

export default FeedbackMessage;