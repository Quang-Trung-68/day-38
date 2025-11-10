import PropTypes from "prop-types";
import { memo } from "react";

const CounterA = memo(({ value, increase }) => {
  console.log("Re-render Counter A");
  return (
    <>
      <h2>Count A is {value}</h2>
      <button onClick={increase}>Increase Count A</button>
    </>
  );
});

CounterA.prototype = {
  value: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
};

export default CounterA;
