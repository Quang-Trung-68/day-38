import { useEffect, useReducer, useState } from "react";
import useCart from "@/hooks/useCart";
import { reducer } from "./reducer";
import "./CartDropdown.css";

/* -------------------- CartItem -------------------- */
const CartItem = ({
  id,
  title,
  quantity,
  price,
  thumbnail,
  handleAddToCart,
  handleAbstractFromCart,
  handleRemoveFromCart,
}) => {
  return (
    <div className="cart-dropdown-item">
      <img src={thumbnail} alt={title} />
      <div className="cart-dropdown-item-info">
        <div>{title}</div>
        <div>
          {quantity} x {price}đ
        </div>
      </div>
      <div className="cart-dropdown-item-actions">
        <button
          onClick={() => handleAddToCart({ id, title, price, thumbnail })}
        >
          +
        </button>
        <button
          onClick={() =>
            handleAbstractFromCart({ id, title, price, thumbnail })
          }
        >
          -
        </button>
        <button onClick={() => handleRemoveFromCart({ id })}>X</button>
      </div>
    </div>
  );
};

/* -------------------- ProductCart -------------------- */
const ProductCart = ({ id, title, price, thumbnail, handleAddToCart }) => {
  return (
    <div className="product-item">
      <img src={thumbnail} alt={title} />
      <div>{title}</div>
      <div>{price}đ</div>
      <button onClick={() => handleAddToCart({ id, title, price, thumbnail })}>
        Add to Cart
      </button>
    </div>
  );
};

/* -------------------- ShoppingCart -------------------- */
const ShoppingCart = () => {
  const cartData = useCart();
  const [cartState, dispatch] = useReducer(reducer, cartData);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  /* ----- Handlers ----- */
  const handleAddToCart = (item) => {
    console.log(cartState);
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const handleAbstractFromCart = (item) => {
    dispatch({ type: "ABSTRACT_FROM_CART", payload: item });
  };

  const handleRemoveFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  /* ----- Fetch products ----- */
  useEffect(() => {
    fetch("https://api01.f8team.dev/api/products")
      .then((res) => res.json())
      .then((result) => {
        setProducts(result.data.items);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <div>Loading....</div>;

  return (
    <div style={{ padding: "16px" }}>
      {/* Cart Icon + Dropdown */}
      <div className="cart-wrapper">
        <div className="cart-icon">
          🛒
          {cartState.totalQuantity > 0 && (
            <span className="cart-badge">{cartState.totalQuantity}</span>
          )}
        </div>
        <div className="cart-dropdown">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
            }}
          >
            <div>
              <strong>Your Cart</strong>
            </div>
            <button onClick={clearCart}>Clear Cart</button>
          </div>
          {cartState.items.length > 0 ? (
            cartState.items.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                handleAddToCart={handleAddToCart}
                handleAbstractFromCart={handleAbstractFromCart}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            ))
          ) : (
            <div>Your cart is empty</div>
          )}
          <div style={{ marginTop: "8px", fontWeight: "bold" }}>
            Total: {cartState.totalPrice}đ
          </div>
        </div>
      </div>

      {/* Products List */}
      <div style={{ marginTop: "32px" }}>
        <h2>Products</h2>
        <div>
          {products.map((product) => (
            <ProductCart
              key={product.id}
              {...product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
