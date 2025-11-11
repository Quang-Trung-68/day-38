import { useEffect, useState } from "react";

const Countdown = () => {
  const [value, setValue] = useState(10);

  const handleReset = () => {
    setValue(10);
  };

  useEffect(() => {
    if (value === 0) return;
    const timer = setInterval(() => {
      setValue((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div>
      <h1>Countdown Page - Count is {value}</h1>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Countdown;
