import { createContext, useState } from "react";
import "./App.css";
import Card from "./Components/Card";

export const UserContext = createContext();

function App() {
  const [userData, setUserData] = useState({ name: "John", age: 35 });
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <div className="App">
        <Card />
      </div>
    </UserContext.Provider>
  );
}

export default App;
