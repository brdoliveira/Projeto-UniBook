import React, { useState } from "react";

import { FileUpload } from "primereact/fileupload";

import iconAddImage from "../templates/images/icon-add-image.png";

export default function CadastroImagem(props) {
  const [imgPath, setImgPath] = useState(props.foto);

  const customBase64Uploader = async (event) => {
    if (imgPath === iconAddImage) {
      var base64data;
      const file = event.files[0];
      const reader = new FileReader();
      let blob = await fetch(file.objectURL).then((r) => r.blob());
      reader.readAsDataURL(blob);
      reader.onloadend = function () {
        base64data = reader.result;
        setImgPath(base64data);
        onTriggerFoto(base64data)
      };
      onTriggerFoto()
      return;
    }
  };

  function onTriggerFoto(img) {
    props.parentCallbackFoto(img);
  }

  return (
    <>
      <div
        className="col-12 bg-blue rounded d-flex flex-wrap align-items-center justify-content-center"
        style={{ height: "40rem" }}
      >
        <h1 className="col-12 text-center text-white">Cadastro - Imagem</h1>
        <div className="col-12 d-flex flex-wrap align-items-center justify-content-center">
          <div
            className="col-12 bg-white rounded-pill d-flex flex-wrap align-items-center justify-content-center"
            style={{ height: "300px", width: "300px" }}
          >
            <img
              src={imgPath}
              alt=""
              id="imgPhoto"
              className="rounded-pill"
              style={{ height: "300px", width: "300px" }}
            />
          </div>
          <div className="col-12 text-center py-2">
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
      </div>
    </>
  );
}
