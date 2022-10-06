import React, { Suspense as SuspenseReact } from "react";
import DataContainer from "./dataContainer";

const Suspense = () => {
  return (
    <>
      <h1>Suspense</h1>
      <SuspenseReact fallback={<h1>Loading</h1>}>
        <DataContainer />
      </SuspenseReact>
    </>
  );
};
export default Suspense;
