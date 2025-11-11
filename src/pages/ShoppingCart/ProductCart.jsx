import { formatPrice } from "@/helpers/formatPrice";
import PropTypes from "prop-types";

/* -------------------- ProductCart -------------------- */
const ProductCart = ({ id, title, price, thumbnail, handleAddToCart }) => {
  return (
    <div className="product-item">
      <img src={thumbnail} alt={title} />
      <div className="product-item-title">{title}</div>
      <div className="product-item-price">{formatPrice(price)}</div>
      <button onClick={() => handleAddToCart({ id, title, price, thumbnail })}>
        Add to Cart
      </button>
    </div>
  );
};

ProductCart.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default ProductCart;
