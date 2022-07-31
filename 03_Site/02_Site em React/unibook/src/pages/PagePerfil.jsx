import React from "react";
import Menu from "../components/Menu";

import { TabView, TabPanel } from "primereact/tabview";

import PerfilUsuario from "../components/PerfilUsuario";
import PerfilVendedor from "../components/PerfilVendedor";
import PerfilAnalitycs from "../components/PerfilAnalytics";
class PagePerfil extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <div
          className="col-12 d-flex justify-content-center align-items-center"
          style={{ height: "90vh" }}
        >
          <div className="col-10">
            <TabView className="perfil-tabview">
              <TabPanel header="Usuario">
                <PerfilUsuario className="col-12" />
              </TabPanel>
              <TabPanel header="Vendedor">
                <PerfilVendedor className="col-12" />
              </TabPanel>
              <TabPanel header="Analytics">
                <PerfilAnalitycs className="col-12" />
              </TabPanel>
            </TabView>
          </div>
        </div>
      </>
    );
  }
}

export default PagePerfil;
