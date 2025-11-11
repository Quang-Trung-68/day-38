import { initialCart } from "@/pages/ShoppingCart/reducer";

export const cartStorage = {
  set(newCart) {
    localStorage.setItem("your_cart", JSON.stringify(newCart));
  },
  get() {
    const yourCart = localStorage.getItem("your_cart");
    return yourCart ? JSON.parse(yourCart) : initialCart;
  },
};
