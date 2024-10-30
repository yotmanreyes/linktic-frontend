// src/components/CategoryCard.js
import { Link } from "react-router-dom";
import "../styles/category.css";

const CategoryCard = ({ category }) => {
  return (
    <article className="category-card">
      <img src={category.feature_image} alt="" />
      <div className="content">
        <h3>{category.name}</h3>
        <p>{category.description}</p>
      </div>
      <Link className="card-link" to={`/category/${category.id}`}>
        Ver Productos
      </Link>
    </article>
  );
};

export default CategoryCard;
