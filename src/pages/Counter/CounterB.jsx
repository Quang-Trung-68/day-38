import PropTypes from "prop-types";
import { memo } from "react";

const CounterB = memo(({ value, increase }) => {
  console.log("Re-render Counter B");

  return (
    <>
      <h2>Count B is {value}</h2>
      <button onClick={increase}>Increase Count B</button>
    </>
  );
});

CounterB.prototype = {
  value: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
};

export default CounterB;
