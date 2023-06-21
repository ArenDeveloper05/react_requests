import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import "./Counter.scss";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function changeCount(type) {
    if (type) {
      setCount((prev) => prev + 1);
    } else {
      if (count > 0) {
        setCount((prev) => prev - 1);
      }
    }
  }

  return (
    <div className="counter">
      <AiOutlineMinusCircle
        className="counter-decrement"
        onClick={() => {
          changeCount(false);
        }}
      />
      <span>{count}</span>
      <AiOutlinePlusCircle
        className="counter-increment"
        onClick={() => {
          changeCount(true);
        }}
      />
    </div>
  );
};

export default Counter;
