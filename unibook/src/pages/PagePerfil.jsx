import React from "react";
import Menu from "../components/Menu";

import { TabView, TabPanel } from "primereact/tabview";

import PerfilUsuario from "../components/PerfilUsuario";
import PerfilVendedor from "../components/PerfilVendedor";
import PerfilAnalitycs from "../components/PerfilAnalytics";
import UsuarioService from "../app/service/usuarioService";
class PagePerfil extends React.Component {
  constructor(){
    super()
    this.state = ""
    this.service = new UsuarioService();
  }

  componentDidMount(){
    if(JSON.parse(localStorage.getItem("_usuario_logado")).id){
      this.setState(JSON.parse(localStorage.getItem("_usuario_logado")));

      this.service.getUsuario(JSON.parse(localStorage.getItem("_usuario_logado")).id).then(
        (res) => {
          this.setState(res.data);
        } 
      )
    }else{
      window.location.href = "/"
    }
  }

  render() {
    return (
      <div className="min-vh-100">
        <Menu />
        <div
          className="col-12 d-flex justify-content-center align-items-center pt-5 mt-5"
        >
          <div className="col-10">
            <TabView className="perfil-tabview">
              <TabPanel header="Usuario">
                <PerfilUsuario className="col-12" />
              </TabPanel>
              <TabPanel header="Vendedor" disabled={this.state.tipoUsuario !== 'VENDEDOR'}>
                <PerfilVendedor className="col-12" />
              </TabPanel>
              <TabPanel header="Analytics" disabled={this.state.tipoUsuario !== 'VENDEDOR'}>
                <PerfilAnalitycs className="col-12" />
              </TabPanel>
            </TabView>
          </div>
        </div>
      </div>
    );
  }
}

export default PagePerfil;
