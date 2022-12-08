import React from "react";

import Menu from "../components/Menu";

import { TabView, TabPanel } from "primereact/tabview";
import PerfilVendedorMostrar from "../components/PerfilVendedorMostrar";

class PageUsuario extends React.Component{
    render(){
        return(
          <div className="min-vh-100">
            <Menu />
            <div
              className="col-12 d-flex justify-content-center align-items-center pt-5 mt-5"
              style={{ height: "90vh" }}
            >
              <div className="col-10">
                <TabView className="perfil-tabview">
                  <TabPanel header="Vendedor">
                    <PerfilVendedorMostrar className="col-12" />
                  </TabPanel>
                </TabView>
              </div>
            </div>
          </div>
        )
    }
}

export default PageUsuario;