import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const divide = () => {
    setCount(count / 2);
    console.log("increment did click");
  };
  const multiply = () => {
    setCount(count * 4);
  };
  const reset = () => {
    setCount(1);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold">Counter: {count}</h1>
      <div className="flex gap-4 mt-5">
        <button
          onClick={divide}
          className="px-6 py-2 border-none bg-[green] rounded-full"
        >
          +
        </button>
        <button
          onClick={multiply}
          className="px-6 py-2 border-none bg-red-400 rounded-full"
        >
          -
        </button>
        <button
          onClick={reset}
          className="px-6 py-2 border-none bg-amber-400 rounded-full"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
