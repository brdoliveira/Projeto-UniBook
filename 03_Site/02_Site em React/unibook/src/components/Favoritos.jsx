import React, {useState} from "react";

import { Sidebar } from "primereact/sidebar";

function Favoritos(props){
    const [visibleFavoritos, setVisibleFavoritos] = useState(props.showFavoritos);

    return (
      <Sidebar
      visible={visibleFavoritos}
      position="left"
      className="p-sidebar-lg bg-blue"
      onHide={() => setVisibleFavoritos(props.showFavoritos)}
      >
        <h1 className="fw-bold text-white">Favoritos</h1>
      </Sidebar>
    );
}

export default Favoritos;
