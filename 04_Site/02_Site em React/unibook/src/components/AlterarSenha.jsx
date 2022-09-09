import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Divider } from "primereact/divider";
import AdministradorService from "../app/service/administradorService";
import AuthService from "../app/service/authService";

const service = new AdministradorService();

const AlterarSenha = () => {
  const [displayBasic, setDisplayBasic] = useState(false);
  const [inputSenha, setInputSenha] = useState();
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
    var log = AuthService.obterUsuarioAutenticado()
    var idUser = log.id

    service.changePassword(idUser,inputSenha).then((response) => {
        AuthService.removerUsuarioAutenticado()
        window.location.href = "/login"
      })
      .catch((erro) => {
      });
  
  } 

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
        style={{ width: "25vw" , height: "29vh" }}
        onHide={() => onHide("displayBasic")}
      >
        <label className="ps-1 py-2 fw-bold">Nova Senha</label>
        <Password
          className="w-100"
          onChange={(e) => setInputSenha(e.target.value)}
          value={inputSenha}
          feedback={true}
          header={header}
          footer={footer}
          weakLabel="Fraca"
          mediumLabel="Media"
          strongLabel="Forte"
          toggleMask
        ></Password>{" "}
        <div className="col-12 d-flex justify-content-end pt-4 mt-4">
            <Button label="Alterar" icon="pi pi-pencil" iconPos="right" onClick={changePassword}/>
        </div>
      </Dialog>
    </>
  );
};

export default AlterarSenha;
