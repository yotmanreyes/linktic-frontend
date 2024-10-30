// src/pages/ProductDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <p>{product.description}</p>
      {/* Aquí podrías agregar un botón para añadir al carrito */}
    </div>
  );
};

export default ProductDetail;
