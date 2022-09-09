import React from "react";

import Menu from "../components/Menu";
import Chat from "../components/Chat";

import "../templates/styles/styles-perfil.css";

class PageChat extends React.Component {
  render() {
    return (
        <>
          <Menu />
          <div
            className="col-12 d-flex justify-content-center align-items-center"
            style={{ height: "90vh" }}
          >
            <div className="col-10">
                <Chat/>
            </div>
          </div>
        </>
      );
  }
}

export default PageChat;
