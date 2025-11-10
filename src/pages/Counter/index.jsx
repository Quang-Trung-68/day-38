import { useCallback, useState } from "react";
import CounterA from "./CounterA";
import CounterB from "./CounterB";

const Counter = () => {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);
  const handleIncreaseA = useCallback(() => {
    setValueA((prev) => prev + 1);
  }, []);
  const handleIncreaseB = useCallback(() => {
    setValueB((prev) => prev + 1);
  }, []);
  return (
    <div>
      <h1>Counter Page</h1>
      <CounterA value={valueA} increase={handleIncreaseA} />
      <CounterB value={valueB} increase={handleIncreaseB} />
    </div>
  );
};

export default Counter;
