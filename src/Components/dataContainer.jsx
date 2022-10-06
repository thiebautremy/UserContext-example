import React, { useEffect, useState } from "react";

const DataContainer = () => {
  const [activity, setActivity] = useState({});
  const fetchData = async () => {
    try {
      const response = await fetch("https://www.boredapi.com/api/activity");

      if (!response.ok) throw new Error(response.status);
      const result = await response.json();
      setActivity(result);
      return result;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>{activity.activity}</h1>
    </>
  );
};
export default DataContainer;
