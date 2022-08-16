import React from "react";

import Menu from "../components/Menu"; 
import ProdutoPagamento from "../components/ProdutoPagamento";

class PageProdutoPagamento extends React.Component{
    render(){
        return(
            <>
            <Menu/>
            <ProdutoPagamento/>
            </>
        )
    }
}

export default PageProdutoPagamento;