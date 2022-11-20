import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Divider } from "primereact/divider";
import AuthService from "../app/service/authService";
import { mensagemErro, mensagemSucesso } from "./Toastr";
import UsuarioService from "../app/service/usuarioService";

const service = new UsuarioService();

const AlterarSenha = () => {
  const [displayBasic, setDisplayBasic] = useState(false);
  const [inputSenhaAntiga, setInputSenhaAntiga] = useState();
  const [inputSenhaNova, setInputSenhaNova] = useState();
  const [setPosition] = useState("center");

  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
  };

  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);

    if (position) {
      setPosition(position);
    }
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  const header = <h6>Insire sua senha</h6>;

  const footer = (
    <React.Fragment>
      <Divider />
      <p className="mt-2">Sugestões</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
        <li>Pelo menos uma letra minúscula</li>
        <li>Pelo menos uma letra maiúscula</li>
        <li>Pelo menos um número</li>
        <li>No mínimo 8 caracteres</li>
      </ul>
    </React.Fragment>
  );

  const changePassword = () => {
    var log =  JSON.parse(localStorage.getItem("_usuario_logado"));
    var idUser = log.id;
    var emailUser = log.email;

    service
      .alterarSenha(idUser, inputSenhaNova, inputSenhaAntiga)
      .then((response) => {
        service.logoff(emailUser, inputSenhaAntiga);
        mensagemSucesso("Senha alterada com sucesso");
        AuthService.removerUsuarioAutenticado();
        window.location.href = "/login";
      })
      .catch((erro) => {
        console.log("ERROR = ", erro);
        mensagemErro(erro.response.data.message);
      });
  };

  return (
    <>
      <Button
        className="bg-orange rounded-pill border border-dark text-dark border-2 fw-bold px-4 py-3 w-100 w-lg-75 button-perfil"
        label="Alterar Senha"
        icon="pi pi-pencil"
        iconPos="right"
        onClick={() => onClick("displayBasic")}
      />
      <Dialog
        header="Alterar Senha"
        visible={displayBasic}
        style={{ width: "25vw", height: "35vh" }}
        onHide={() => onHide("displayBasic")}
      >
        <Password
          className="w-100"
          onChange={(e) => setInputSenhaNova(e.target.value)}
          value={inputSenhaNova}
          feedback={true}
          header={header}
          footer={footer}
          weakLabel="Fraca"
          mediumLabel="Media"
          strongLabel="Forte"
          toggleMask
        ></Password>{" "}
        <label className="ps-1 py-2 fw-bold">Senha Nova</label>
        <Password
          className="w-100"
          onChange={(e) => setInputSenhaAntiga(e.target.value)}
          value={inputSenhaAntiga}
          feedback={false}
          toggleMask
        ></Password>{" "}
        <label className="ps-1 py-2 fw-bold">Senha Antiga</label>
        <div className="col-12 d-flex justify-content-end pt-4 mt-4">
          <Button
            label="Alterar"
            icon="pi pi-pencil"
            iconPos="right"
            onClick={changePassword}
          />
        </div>
      </Dialog>
    </>
  );
};

export default AlterarSenha;
