import React, { useState } from "react";

import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { Password } from "primereact/password";
import { RadioButton } from "primereact/radiobutton";
import { FileUpload } from "primereact/fileupload";
import { Divider } from "primereact/divider";

import iconAddImage from "../templates/images/icon-add-image.png";

import "../templates/styles/styles-cadastro.css";

export default function AdicionarUsuario(props) {
  const [usuarioCadastro, setUsuarioCadastro] = useState(props.usuario);
  const [fotoEscolhida, setFotoEscolhida] = useState(props.foto);

  const customBase64Uploader = async (event) => {
    if (fotoEscolhida === iconAddImage) {
      var base64data;
      const file = event.files[0];
      const reader = new FileReader();
      let blob = await fetch(file.objectURL).then((r) => r.blob());
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        base64data = reader.result;
        setFotoEscolhida(base64data);
      };
      return;
    }
  };

  function onTriggerUsuarioCadastro() {
    props.parentCallback(usuarioCadastro);
  }

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

  return (
    <>
      <div
        className="col-12 rounded bg-blue d-flex justify-content-center align-items-center flex-wrap"
        style={{ height: "40rem" }}
      >
        <div className="col-11 text-white pt-4">
          <h2>Adicionar Usuario</h2>
        </div>
        <div className="col-12 col-md-4 px-4  d-flex flex-wrap align-items-center justify-content-center">
          <div
            className="col-12 bg-white d-flex flex-wrap align-items-center justify-content-center"
            style={{ height: "40vh", width: "60%" }}
          >
            <img
              src={fotoEscolhida}
              alt=""
              id="imgPhoto"
              style={{ height: "29vh", width: "90%" }}
            />
          </div>
          <div className="col-12 d-flex justify-content-center py-1">
            <FileUpload
              mode="basic"
              name="demo[]"
              accept="image/*"
              customUpload
              uploadHandler={customBase64Uploader}
              auto
            />
          </div>
        </div>
        <div className="col-12 col-md-8 px-4 d-flex flex-wrap">
          <div className="col-md-12 col-lg-6 px-4">
            <div className="col-12 text-white py-4">
              <p>Nome</p>
              <InputText
                value={usuarioCadastro.nome}
                onChange={(e) => {
                  setUsuarioCadastro({ nome: e.target.value });
                  onTriggerUsuarioCadastro();
                }}
                className="col-12 border border-0 rounded-pill"
                type="text"
                placeholder="digite seu nome..."
              />
            </div>
            <div className="col-12 text-white py-4">
              <p>Login</p>
              <InputText
                value={usuarioCadastro.login}
                onChange={(e) => {
                  setUsuarioCadastro({ login: e.target.value });
                  onTriggerUsuarioCadastro();
                }}
                className="col-12 border border-0 rounded-pill"
                type="text"
                placeholder="digite seu usuario..."
              />
            </div>
            <div className="col-12 text-white py-4">
              <p>Email</p>
              <InputText
                value={usuarioCadastro.email}
                onChange={(e) => {
                  setUsuarioCadastro({ email: e.target.value });
                  onTriggerUsuarioCadastro();
                }}
                className="col-12 border border-0 rounded-pill"
                type="text"
                placeholder="digite seu email..."
              />
            </div>
            <div className="col-12 text-white py-4">
              <p>Senha</p>
              <Password
                className="col-12 border border-0 rounded-pill"
                value={usuarioCadastro.senha}
                onChange={(e) => {
                  setUsuarioCadastro({ senha: e.target.value });
                  onTriggerUsuarioCadastro();
                }}
                feedback={true}
                header={header}
                footer={footer}
                weakLabel="Fraca"
                mediumLabel="Media"
                strongLabel="Forte"
                toggleMask
              />
            </div>
          </div>
          <div className="col-md-12 col-lg-6 px-4">
            <div className="col-12 text-white py-4">
              <p>Data Nascimento</p>
              <Calendar
                dateFormat="dd/mm/yy"
                className="col-12 border border-0 rounded-pill py-0"
                value={usuarioCadastro.dataNascimento || ""}
                defaultValue={Date()}
                onChange={(e) => {
                  setUsuarioCadastro({ dataNascimento: e.target.value });
                  onTriggerUsuarioCadastro();
                }}
              ></Calendar>
            </div>
            <div className="row text-white py-4">
              <p className="col-12">Sexo</p>
              <div className="col-12 d-flex flex-wrap py-2">
                <div className="col-4 field-radiobutton py-1">
                  <RadioButton
                    inputId="sexo"
                    name="sexo"
                    value="FEMININO"
                    onChange={(e) => {
                      setUsuarioCadastro({ sexo: e.target.value });
                      onTriggerUsuarioCadastro();
                    }}
                    checked={usuarioCadastro.sexo !== "MASCULINO"}
                  />
                  <label htmlFor="sexo" className="px-2">
                    Feminino
                  </label>
                </div>
                <div className="col-4 field-radiobutton py-1">
                  <RadioButton
                    inputId="sexo"
                    name="sexo"
                    value="MASCULINO"
                    onChange={(e) => {
                      setUsuarioCadastro({ sexo: e.target.value });
                      onTriggerUsuarioCadastro();
                    }}
                    checked={usuarioCadastro.sexo === "MASCULINO"}
                  />
                  <label htmlFor="sexo" className="px-3">
                    Masculino
                  </label>
                </div>
              </div>
            </div>
            <div className="col-12 text-white py-4">
              <p>CPF</p>
              <InputMask
                className="col-12 border border-0 rounded-pill"
                mask="999.999.999-99"
                value={usuarioCadastro.cpf}
                onChange={(e) => {
                  setUsuarioCadastro({ cpf: e.target.value });
                  onTriggerUsuarioCadastro();
                }}
              ></InputMask>
            </div>
            <div className="col-12 text-white py-4">
              <p>Confirmar Senha</p>
              <Password
                className="col-12 border border-0 rounded-pill"
                value={usuarioCadastro.confirmarSenha}
                onChange={(e) => {
                  setUsuarioCadastro({ confirmarSenha: e.target.value });
                  onTriggerUsuarioCadastro();
                }}
                feedback={false}
                toggleMask
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
