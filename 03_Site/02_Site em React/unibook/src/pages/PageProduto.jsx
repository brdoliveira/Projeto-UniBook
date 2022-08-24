import React from "react";
import withParams from "../components/pegarParametros";

import Menu from "../components/Menu";
import Produto from "../components/Produto";


class PageProduto extends React.Component {
  componentDidMount() {
    let { id } = this.props.params;
    console.log("id = ",id)
  }

  render() {
    return (
      <>
        <Menu />
        <div
          className="col-12 d-flex justify-content-center align-items-center"
          style={{ height: "90vh" }}
        >
          <div className="col-10">
            <Produto />
          </div>
        </div>
      </>
    );
  }
}

export default withParams(PageProduto);
