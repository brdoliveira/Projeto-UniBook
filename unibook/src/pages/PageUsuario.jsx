import React from "react";

import Menu from "../components/Menu";

import { TabView, TabPanel } from "primereact/tabview";
import PerfilVendedor from "../components/PerfilVendedor";
import withParams from "../components/PegarParametros";
import UsuarioService from "../app/service/usuarioService";
import ComponenteVazioHome from "../components/ComponenteVazioHome";
import CardProduto from "../components/CardProduto";  

class PageUsuario extends React.Component{
    constructor(){
      super();
      this.service = new UsuarioService();
      this.state = {
        usuario : "",
        listaUsuario : ""
      }
    }

     async componentDidMount() {
      let { id } = this.props.params;
      var usuario = await this.pesquisarUsuario(id);
      this.carregarProdutos(usuario.login);
    }
      
    async pesquisarUsuario(id){
      return await this.service.getUsuario(id).then(
        (response) => {
          return response.data
        }
      )
    }

    async carregarProdutos(login){
      await this.service.listarAnunciosPorVendedor(login).then(
        (response) => {
          this.setState({
            listaUsuario: response.data.map((livro,idx) => {
              return <CardProduto id={idx} key={idx} livro={livro} isDono={false} />;
            }),
          });
        }).catch(
          this.setState({
            listaUsuario : <ComponenteVazioHome/>
          })
        )
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