import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    // const newState = currentState + 1
    // return newState
    setTimeout(() => {
      console.log("clicked the button");
      setValue((currentState)=>{
        return currentState + 1 
      });
    }, 3000);
  };
  return (
    <div>
      <h1>{value}</h1>
      <button className="btn" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
