import { useEffect, useLayoutEffect } from "react";

const TestUseEffect = () => {
  console.time("hookComparison");
  useLayoutEffect(() => {
    console.log("=== Temps useLayoutEffect ===");
    console.timeLog("hookComparison");
  }, []);
  useEffect(() => {
    console.log("=== Temps useEffect ===");
    console.timeLog("hookComparison");
  }, []);
  return <h1>Différence entre useEffect et useLayoutEffect</h1>;
};

export default TestUseEffect;
