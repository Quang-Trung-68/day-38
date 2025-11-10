import { CartContext } from "@/contexts/CartContext";
import { useContext } from "react";

const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) throw Error("Can not use Cart Context!");
  else {
    return context;
  }
};

export default useCart;
