import React from "react";
import "./Counter.scss";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="counters">
      <p className="counters__title">Counter</p>
      <p className="counters__display">{counter}</p>
      <div className="counters__value">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};
export default Counter;
