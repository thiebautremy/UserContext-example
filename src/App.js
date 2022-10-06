import { createContext, useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import UseRefBasics from "./Components/UseRef";
import Suspense from "./Components/Suspense";

export const UserContext = createContext();

function App() {
  const [userData, setUserData] = useState({ name: "John", age: 35 });
  const article = { author: "foin", date: "22/08/22" };
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <div className="App">
        <Card />
        <UseRefBasics title={"un bon titre"} {...article} />
        <Suspense />
      </div>
    </UserContext.Provider>
  );
}

export default App;
