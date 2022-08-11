import React from "react";

import { Sidebar } from "primereact/sidebar";

class Carrinho extends React.Component {
  render() {
    const [visibleCarrinho, setVisibleCarrinho] = useState(false);

    return (
      <>
        <Sidebar
          visible={visibleCarrinho}
          position="right"
          className="p-sidebar-lg"
          onHide={() => setVisibleCarrinho(false)}
        >
          <h1>Carrinho</h1>
        </Sidebar>
        <Button
          icon="pi pi-arrow-right"
          onClick={() => setVisibleLeft(true)}
          className="mr-2"
        />
      </>
    );
  }
}

export default Carrinho;
