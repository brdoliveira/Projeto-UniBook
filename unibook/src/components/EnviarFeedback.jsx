import React from "react";

import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

class EnviarFeedback extends React.Component {
  state = {
    id: "",
    feedback: "",
  };

  render() {
    return (
      <div className="col-12 py-2 d-flex flex-wrap">
        <InputText
          className="col-10"
          placeholder="Digite seu feedback..."
          value={this.state.feedback}
          onChange={(e) => this.setState({ feedback: e.target.value })}
        />
        <div className="col-2 px-2">
          <Button
            className="w-100"
            label="Enviar"
            icon="pi pi-send"
            iconPos="right"
          />
        </div>
      </div>
    );
  }
}

export default EnviarFeedback;
