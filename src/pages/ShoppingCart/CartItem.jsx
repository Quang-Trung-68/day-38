import { formatPrice } from "@/helpers/formatPrice";
import PropTypes from "prop-types";

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
        <div className="cart-dropdown-item-info-title">{title}</div>
        <div>
          {quantity} x {formatPrice(price)}
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
        <button onClick={() => handleRemoveFromCart({ id })}>x</button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  handleAbstractFromCart: PropTypes.func.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};

export default CartItem;
