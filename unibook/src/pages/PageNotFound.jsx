import Menu from "../components/Menu";
import NotFound from "../components/NotFound";
import React from "react";

function PageNotFound() {
  return (
    <>
      <div className="min-vh-100">
        <Menu />
        <div
          className="col-12 d-flex justify-content-center align-items-center pt-4"
          style={{ height: "90vh" }}
        >
          <NotFound />
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
