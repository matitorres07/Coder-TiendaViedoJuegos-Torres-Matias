import { useState } from "react";
import { useEffect } from "react";
const Contador = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("cambio el componenete");
  }, [count]);

  const addHandler = () => {
    setCount(count + 1);
  };
  const resHandler = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div>Contador</div>
      <button onClick={resHandler}>-</button>
      <strong>{count}</strong>
      <button onClick={addHandler}>+</button>
    </>
  );
};
export default Contador;
