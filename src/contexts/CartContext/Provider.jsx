import CartContext from "./Context";

const Provider = ({ children }) => {
  const values = {
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default Provider;
