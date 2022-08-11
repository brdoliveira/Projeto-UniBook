import React from "react";

import { Sidebar } from "primereact/sidebar";

class Favoritos extends React.Component {
  render() {
    const [visibleFavoritos, setVisibleFavoritos] = useState(false);

    return (
      <>
      <Sidebar
      visible={visibleFavoritos}
      position="right"
      className="p-sidebar-lg"
      onHide={() => setVisibleFavoritos(false)}
      >
        <h1>Favoritos</h1>
      </Sidebar>
      <Button icon="pi pi-arrow-right" onClick={() => setVisibleFavoritos(true)} className="mr-2" />
      </>
    );
  }
}

export default Favoritos;
