import React from "react";

import Menu from "../components/Menu";
import Chat from "../components/Chat";

import "../templates/styles/styles-perfil.css";

class PageChat extends React.Component {
  render() {
    return (
        <div className="min-vh-100">
          <Menu />
          <div
            className="col-12 d-flex justify-content-center align-items-center pt-4"
          >
            <div className="col-10 d-flex justify-content-center align-items-center pt-4 mt-4">
                <Chat/>
            </div>
          </div>
        </div>
      );
  }
}

export default PageChat;
