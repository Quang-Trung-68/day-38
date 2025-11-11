import { useEffect, useState } from "react";
import useCart from "@/hooks/useCart";

import CartItem from "./CartItem";
import ProductCart from "./ProductCart";

import { formatPrice } from "@/helpers/formatPrice";
import "./CartDropdown.css";

/* -------------------- ShoppingCart -------------------- */
const ShoppingCart = () => {
  const { cartState, dispatch } = useCart();
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  /* ----- Handlers ----- */
  const handleAddToCart = (item) => {
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
              alignItems: "center",
              margin: "10px",
            }}
          >
            <div>
              <strong
                style={{
                  fontSize: "20px",
                }}
              >
                Your Cart
              </strong>
            </div>
            <div style={{ fontWeight: "bold", fontSize: "20px" }}>
              Total: {formatPrice(cartState.totalPrice)}
            </div>
            {cartState.items.length > 0 && (
              <button onClick={clearCart}>Clear Cart</button>
            )}
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
            <div
              style={{
                marginTop: "50px",
                fontStyle: "italic",
                fontSize: "14px",
              }}
            >
              Your cart is empty!
            </div>
          )}
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
