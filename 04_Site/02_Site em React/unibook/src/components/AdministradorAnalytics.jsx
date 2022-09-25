import React from "react";

import TabelaAdministrador from "./TabelaAdministrador"

class AdministradorAnalytics extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <>
        <div className="col-12 text-center text-dark pt-5">
          <h1>Analitycs Administração</h1>
        </div>
        <div className="col-12">
          <TabelaAdministrador/>
        </div>
      </>
    );
  }
}

export default AdministradorAnalytics;
