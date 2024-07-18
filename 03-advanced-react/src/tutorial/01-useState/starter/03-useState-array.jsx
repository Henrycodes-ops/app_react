import { data } from "../../../data";
import React from "react";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    //const newPeople = people.filter((person) => person.id !== id);
    setPeople(people.filter((person) => person.id !== id))
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button
        style={{ marginTop: "2rem" }}
        className="btn"
        onClick={() => setPeople([])}
      >
        Clear items
      </button>
    </div>
  );
};

export default UseStateArray;
