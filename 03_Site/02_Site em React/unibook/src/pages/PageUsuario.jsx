import React from "react";

import Menu from "../components/Menu";

import { TabView, TabPanel } from "primereact/tabview";
import PerfilVendedor from "../components/PerfilVendedor";
import withParams from "../components/PegarParametros";
  

class PageUsuario extends React.Component{
    componentDidMount() {
        let { usuario } = this.props.params;
        console.log("usuario = ",usuario)
    }

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
                    <PerfilVendedor className="col-12" />
                  </TabPanel>
                </TabView>
              </div>
            </div>
          </div>
        )
    }
}

export default withParams(PageUsuario);