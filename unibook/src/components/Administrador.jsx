import React from "react";


import { Button } from "primereact/button";
import { TabView, TabPanel } from "primereact/tabview";

import AdministradorCliente from "../components/AdministradorCliente";
import AdministradorAnalytics from "../components/AdministradorAnalytics";

import "../templates/styles/styles-perfil.css";

class Admnistrador extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabcard: 0,
    };
  }

  render() {
    const changePage = (change) => {
      this.setState({ tabcard: change });
    };

    return (
      <>
        <div
          className="col-12 bg-orange rounded d-flex flex-wrap"
          style={{ height: "2.5rem" }}
        >
          <div className="col-6 d-flex align-items-center justify-content-center h-100 px-2">
            <Button
              label="Cliente Informações"
              onClick={() => {
                changePage(0);
              }}
              className="w-100 py-1 bg-orangelightbook hover-lightorange border border-0 text-dark"
            />
          </div>
          <div className="col-6 d-flex align-items-center justify-content-center h-100 px-2">
            <Button
              label="Analitycs"
              onClick={() => {
                changePage(1);
              }}
              className="w-100 py-1 bg-orangelightbook hover-lightorange border border-0 text-dark"
            />
          </div>
        </div>
        <div className="col-12">
          <TabView
            activeIndex={this.state.tabcard}
            onTabChange={(e) => {
              this.setState({ tabcard: e.index });
              this.disabled(e.index);
            }}
            className="cadastro"
          >
            <TabPanel>
              <AdministradorCliente />
            </TabPanel>
            <TabPanel>
              <AdministradorAnalytics />
            </TabPanel>
          </TabView>
        </div>
      </>
    );
  }
}

export default Admnistrador;
