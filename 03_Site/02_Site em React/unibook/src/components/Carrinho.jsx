import React, {useState} from "react";

import { Sidebar } from "primereact/sidebar";

function Carrinho(props){
    const [visibleCarrinho, setVisibleCarrinho] = useState(props.showFavoritos);

    return (
        <Sidebar
          visible={visibleCarrinho}
          position="left"
          className="p-sidebar-lg bg-blue"
          onHide={() => setVisibleCarrinho(props.showCarrinho)}
        >
          <h1 className="fw-bold text-white">Carrinho</h1>
        </Sidebar>
    );
}

export default Carrinho;
