import { useState } from "react";

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState("");

  // falsy
  const [name, setName] = useState("susan");

  // Another Example
  const codeExample = text || "hello world";

  return (
    <div>
      <h4>Falsy or : {text || "hello world"}</h4>
      <h4>Falsy AND : {text && "hello world"}</h4>
      <h4>Truthy or : {name || "hello world"}</h4>
      <h4>Truthy AND : {name && "hello world"}</h4>
      {codeExample}
    </div>
  );
};
export default ShortCircuitOverview;
