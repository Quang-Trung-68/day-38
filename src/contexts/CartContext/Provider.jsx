import { useReducer } from "react";
import CartContext from "./Context";
import { reducer } from "@/pages/ShoppingCart/reducer";
import { cartStorage } from "@/helpers/cartStorage";
import PropTypes from "prop-types";

const Provider = ({ children }) => {
  const initialCartStorage = cartStorage.get();
  const [cartState, dispatch] = useReducer(reducer, initialCartStorage);
  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
