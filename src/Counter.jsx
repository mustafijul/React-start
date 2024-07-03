import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  // console.log(count);
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleDec = () => {
    const newDec = count - 1;
    setCount(newDec);
  };

  return (
    <div>
      <h2>Welcome to counter: {count}</h2>
      <button onClick={handleAdd}>ADD</button>
      <br />
      <button onClick={handleDec}>DEC</button>
    </div>
  );
}
