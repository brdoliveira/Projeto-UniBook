import React from "react";
import iconAddImage from "../templates/images/icon-add-image.png";

import { FileUpload } from "primereact/fileupload";

class EditarImagem extends React.Component {
  state = {
    imgPath: "",
  };

  componentDidMount() {
    this.setState({ imgPath: iconAddImage });
  }

  render() {
    const customBase64Uploader = async (event) => {
      if (this.state.imgPath === iconAddImage) {
        var base64data;
        // convert file to base64 encoded
        const file = event.files[0];
        const reader = new FileReader();
        let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url
        reader.readAsDataURL(blob);
        reader.onloadend = function () {
          base64data = reader.result;
        };
        this.setState({ imgPath: base64data });
        console.log(this.state.imgPath);
      }

      console.log(this.state.imgPath);
    };

    return (
      <>
        <div
          className="col-12 bg-blue rounded d-flex flex-wrap align-items-center justify-content-center"
          style={{ height: "40vh" }}
        >
          <div className="col-12 d-flex flex-wrap align-items-center justify-content-center">
            <div
              className="col-12 bg-white rounded-pill d-flex flex-wrap align-items-center justify-content-center"
              style={{ height: "300px", width: "300px" }}
            >
              <img
                src={this.state.imgPath}
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
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EditarImagem;
