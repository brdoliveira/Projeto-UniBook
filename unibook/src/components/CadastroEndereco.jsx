import React, { useState } from "react";

import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { Button } from "primereact/button";

import EnderecoService from "../app/service/enderecoService";

export default function CadastroEndereco(props){
  const [enderecoCadastro, setEnderecoCadastro] = useState(
    props.endereco
  );

  const [ pesquisaEndereco , setPesquisaEndereco] = useState(
    props.enderecoPesquisa
  )

  function onTriggerEnderecoCadastro() {
    props.parentCallback(enderecoCadastro);
  }

  const consultarCEP = async (cep) => {
    let enderecoService = new EnderecoService();
    let dadosCEP = await enderecoService.consultarCEP(cep.replace(/-/,"")).then()

    if(!dadosCEP.success || dadosCEP.dados.erro === "true" ){
      console.log("ERROR!")
    }else{
      var setDadosCEP = {
        cidade : dadosCEP.dados.localidade,
        logradouro : dadosCEP.dados.logradouro,
        estado : dadosCEP.dados.uf
      }

      setPesquisaEndereco(setDadosCEP)
      props.parentCallbackCEP(setDadosCEP);
    }
  };

    return (
      <>
        <div
          className="col-12 bg-blue d-flex flex-wrap align-items-center justify-content-center rounded"
          style={{ height: "40rem" }}
        >
          <h1 className="col-12 text-center text-white py-4 py-lg-1">
            Cadastro - Endereço
          </h1>
          <div className="col-12 col-lg-6 px-4">
          <div className="col-12 text-white py-4">
              <p>CEP</p>
              <div className="p-inputgroup">
                <InputMask
                  className="col-12 border border-0 rounded-pill rounded-end"
                  mask="99999-999"
                  value={enderecoCadastro.cep}
                  onChange={(e) => {
                    setEnderecoCadastro({ cep: e.target.value });
                    onTriggerEnderecoCadastro();
                  }}
                />
                <Button icon="pi pi-search" className="rounded-start rounded-pill" onClick={() => {consultarCEP(enderecoCadastro.cep)}}/>
              </div>
            </div>
            <div className="col-12 text-white py-4">
              <p>Cidade</p>
              <InputText
                value={pesquisaEndereco.cidade}
                className="col-12 border border-0 rounded-pill"
                type="text"
                disabled={true}
              />
            </div>
            <div className="col-12 text-white py-4">
              <p>Logradouro</p>
              <InputText
                value={pesquisaEndereco.logradouro}
                className="col-12 border border-0 rounded-pill"
                type="text"
                disabled={true}
              />
            </div>
          </div>
          <div className="col-12 col-lg-6 px-4">
            <div className="col-12 text-white py-4">
              <p>Numero</p>
              <InputText
                value={enderecoCadastro.numeroResidencia}
                onChange={(e) => {
                  setEnderecoCadastro({ numeroResidencia: e.target.value });
                  onTriggerEnderecoCadastro();
                }}
                className="col-12 border border-0 rounded-pill"
                type="text"
                placeholder="digite o numero da sua casa..."
              />
            </div>
            <div className="col-12 text-white py-4">
              <p>Complemento (Opcional)</p>
              <InputText
                value={enderecoCadastro.complemento}
                onChange={(e) => {
                  setEnderecoCadastro({ complemento: e.target.value });
                  onTriggerEnderecoCadastro();
                }}
                className="col-12 border border-0 rounded-pill"
                type="text"
                placeholder="digite o complemento..."
              />
            </div>
            <div className="col-12 text-white py-4">
              <p>Estado</p>
              <InputText
                value={pesquisaEndereco.estado}
                className="col-12 border border-0 rounded-pill"
                type="text"
                disabled={true}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
