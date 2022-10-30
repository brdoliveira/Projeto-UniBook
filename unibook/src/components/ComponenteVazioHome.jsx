import React from "react";
import { Skeleton } from "primereact/skeleton";

export default function ComponenteVazioHome() {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-1 d-flex justify-content-center align-items-center">
        <Skeleton width="20rem" height="25rem" />
      </div>
      <div className="col-md-6 col-lg-4 col-xl-3 p-1 d-none d-md-block d-flex justify-content-center align-items-center">
        <Skeleton width="20rem" height="25rem" />
      </div>
      <div className="col-lg-4 col-xl-3 p-1 d-none d-lg-block d-flex justify-content-center align-items-center">
        <Skeleton width="20rem" height="25rem" />
      </div>
      <div className="col-xl-3 p-1 d-none d-xl-block">
        <Skeleton width="20rem" height="25rem" />
      </div>
    </>
  );
}
