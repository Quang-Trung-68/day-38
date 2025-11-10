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
      return {
        ...state,
        items: newItems,
        totalQuantity: newItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: newItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),
      };
    }
    case "ABSTRACT_FROM_CART": {
      const { id } = action.payload;
      const newItems = state.items
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
      return {
        ...state,
        items: newItems,
        totalQuantity: newItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: newItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),
      };
    }

    case "REMOVE_FROM_CART": {
      const { id } = action.payload;
      const newItems = state.items.filter((item) => item.id !== id);
      return {
        ...state,
        items: newItems,
        totalQuantity: newItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: newItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),
      };
    }
    case "CLEAR_CART": {
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
