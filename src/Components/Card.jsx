import { useContext } from "react";
import { UserContext } from "../App";

const Card = () => {
  const user = useContext(UserContext);
  console.log(user);

  const { name, age } = user.userData;
  return (
    <div>
      <h2>Prénom : {name}</h2>
      <h2>Age : {age}</h2>
      <label htmlFor="firstName">Prénom</label>
      <input
        onChange={(e) =>
          user.setUserData({ ...user.userData, name: e.target.value })
        }
        id="firstName"
        name="firstName"
      ></input>
      <label htmlFor="age">Age</label>
      <input
        onChange={(e) =>
          user.setUserData({ ...user.userData, age: e.target.value })
        }
        id="age"
        name="age"
      ></input>
    </div>
  );
};

export default Card;
