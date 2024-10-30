// src/components/ProductCard.js
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <article className="product-card">
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <Link to={`/product/${product.id}`}>Ver Detalles</Link>
    </article>
  );
};

export default ProductCard;
