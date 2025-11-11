import { cartStorage } from "@/helpers/cartStorage";

export const initialCart = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const newCart = (state, newItems) => {
  return {
    ...state,
    items: newItems,
    totalQuantity: newItems.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: newItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    ),
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, title, price, thumbnail } = action.payload;
      const exitingItem = state.items.find((item) => item.id === id);
      let newItems;
      if (exitingItem) {
        newItems = state.items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        newItems = [
          ...state.items,
          { id, title, price, thumbnail, quantity: 1 },
        ];
      }
      cartStorage.set(newCart(state, newItems));
      return newCart(state, newItems);
    }
    case "ABSTRACT_FROM_CART": {
      const { id } = action.payload;
      const newItems = state.items
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
      cartStorage.set(newCart(state, newItems));
      return newCart(state, newItems);
    }

    case "REMOVE_FROM_CART": {
      const { id } = action.payload;
      const newItems = state.items.filter((item) => item.id !== id);
      cartStorage.set(newCart(state, newItems));
      return newCart(state, newItems);
    }
    case "CLEAR_CART": {
      cartStorage.set(initialCart);
      return {
        items: [],
        totalPrice: 0,
        totalQuantity: 0,
      };
    }

    default:
      return state;
  }
};
