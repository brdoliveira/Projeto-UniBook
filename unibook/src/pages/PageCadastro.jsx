import React from "react";

import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";
import { Steps } from "primereact/steps";

import CadastroUsuario from "../components/CadastroUsuario";
import CadastroEndereco from "../components/CadastroEndereco";
import CadastroImagem from "../components/CadastroImagem";
import Menu from "../components/Menu";

import iconAddImage from "../templates/images/icon-add-image.png";
import { mensagemErro, mensagemSucesso } from "../components/Toastr";

import UsuarioService from "../app/service/usuarioService";

import "../templates/styles/styles-cadastro.css";

class PageCadastro extends React.Component {
  constructor(props) {
    super(props);

    this.service = new UsuarioService();

    this.state = {
      tabcard: 0,
      buttonLeft: true,
      buttonRight: false,
      usuario: {
        nome: "",
        dataNascimento: new Date(),
        sexo: "FEMININO",
        cpf: "",
        email: "",
        senha: "",
        confirmarSenha: "",
        cep: "",
        numeroResidencia: "",
        complemento: "",
        login: "",
        foto: iconAddImage,
      },
      enderecoPesquisa: {
        cidade: "",
        logradouro: "",
        estado: "",
      },
    };
  }
  
  disabled(index) {
    if (index === 0) {
      this.setState({ buttonLeft: true });
      this.setState({ buttonRight: false });
    } else if (index === 1) {
      this.setState({ buttonLeft: false });
      this.setState({ buttonRight: false });
    } else if (index === 2) {
      this.setState({ buttonLeft: false });
      this.setState({ buttonRight: true });
    }
  }

  handleCallback = (childData) => {
    this.setState({ usuario: { ...this.state.usuario, ...childData } });
  };

  handleCallbackCEP = (childData) => {
    this.setState({
      enderecoPesquisa: { ...this.state.enderecoPesquisa, ...childData },
    });
  };

  handleCallbackFoto = (childData) => {
    this.setState({
      usuario : {...this.state.usuario, ...{ foto : childData}}
    })
  }
  
  cadastrarUsuario = () => {
    var usuarioCadastro = {
      "nome": this.state.usuario.nome,
      "dataNascimento": Date.parse(this.state.usuario.dataNascimento),
      "sexo": this.state.usuario.sexo,
      "cpf": this.state.usuario.cpf,
      "email": this.state.usuario.email,
      "senha": this.state.usuario.senha,
      "tipoUsuario": "VENDEDOR",
      "cep": this.state.usuario.cep.replace(/-/,""),
      "numeroResidencia": this.state.usuario.numeroResidencia + " " +  this.state.usuario.complemento ,
      "login": this.state.usuario.login
      // ,"foto": this.state.usuario.foto
    }

    try{
      this.service.validarUsuario(usuarioCadastro)
    }catch(erro){
      const msgs = erro.mensagens;
      msgs.forEach((msg) => mensagemErro(msg));
      return false;
    }

    this.service.salvarUsuario(usuarioCadastro).then((response) => {
      mensagemSucesso("Usuário cadastrado")
      setInterval(1000000)
      window.location.href = "/login"
    })
    .catch((erro) => {
      mensagemErro(erro.response.data.message);
      return;
    });
  };
  
  items = [{ label: "Usuario" }, { label: "Endereço" }, { label: "Imagem" }];
  
  render() {
    const clickLeft = () => {
      if (this.state.tabcard === 0) {
        return;
      }
      this.setState({ tabcard: this.state.tabcard - 1 });
      this.disabled(this.state.tabcard - 1);
    };

    const clickRight = () => {
      if (this.state.tabcard === 2) {
        return;
      }
      this.setState({ tabcard: this.state.tabcard + 1 });
      this.disabled(this.state.tabcard + 1);
    };

    return (
      <>
        <div className="min-vh-100">
          <Menu />
          <div className="col-12 d-flex justify-content-center align-items-center min-vh-100">
            <div className="col-10 div-cadastro h-100 pt-5 mt-5">
              <div className="col-12 d-flex justify-content-center">
                <div className="col-10">
                  <Steps
                    className="w-100"
                    model={this.items}
                    activeIndex={this.state.tabcard}
                  />
                </div>
              </div>
              <div className="col-12 d-flex">
                <div className="col-1 d-flex justify-content-center align-items-center">
                  <Button
                    icon="pi pi-angle-left"
                    className="p-button-rounded button-cadastro"
                    style={{ width: "75px", height: "75px" }}
                    aria-label="Antes"
                    hidden={this.state.buttonLeft}
                    onClick={clickLeft}
                  />
                </div>
                <div className="col-10">
                  <TabView
                    activeIndex={this.state.tabcard}
                    onTabChange={(e) => {
                      this.setState({ tabcard: e.index });
                      this.disabled(e.index);
                    }}
                    className="cadastro"
                  >
                    <TabPanel header="Usuario">
                      <CadastroUsuario
                        className="col-12"
                        parentCallback={this.handleCallback}
                        usuario={this.state.usuario}
                      />
                    </TabPanel>
                    <TabPanel header="Endereço">
                      <CadastroEndereco
                        parentCallback={this.handleCallback}
                        parentCallbackCEP={this.handleCallbackCEP}
                        endereco={this.state.usuario}
                        enderecoPesquisa={this.state.enderecoPesquisa}
                        className="col-12"
                      />
                    </TabPanel>
                    <TabPanel header="Imagem">
                      <CadastroImagem
                        className="col-12"
                        parentCallbackFoto={this.handleCallbackFoto}
                        foto={this.state.usuario.foto}
                      />
                    </TabPanel>
                  </TabView>
                  <div className="col-12 d-flex justify-content-end pe-4 my-2">
                    <Button
                      className="bg-orange rounded-pill border border-dark border-2 fw-bold px-4 pb-2 text-dark hover-yellow"
                      label="Finalizar Cadastro"
                      hidden={!this.state.buttonRight}
                      onClick={() => {
                        this.cadastrarUsuario();
                      }}
                    />
                  </div>
                </div>
                <div className="col-1 d-flex justify-content-center align-items-center">
                  <Button
                    icon="pi pi-angle-right"
                    className="p-button-rounded button-cadastro"
                    style={{ width: "75px", height: "75px" }}
                    aria-label="Depois"
                    onClick={clickRight}
                    hidden={this.state.buttonRight}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PageCadastro;
