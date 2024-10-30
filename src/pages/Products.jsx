import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Efecto para cargar productos
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products");
        if (!response.ok) {
          throw new Error("Error al cargar productos");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // El array vacío asegura que esto solo se ejecute una vez al montar el componente

  // Manejo de carga
  if (loading) {
    return <h2>Cargando...</h2>;
  }

  // Manejo de errores
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Navbar />

      <section className="products-section">
        <h1>Todos los Productos</h1>
        {products.length === 0 ? (
          <p>No hay productos disponibles.</p>
        ) : (
          <div className="products-list">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="card-header">
                  <img src={product.image_url} alt="" srcset="" />
                </div>
                <div className="card-content">
                  <h3>{product.name}</h3>
                  <p className="product-price">Precio: {product.price} $</p>
                  <p>{product.category.name}</p>
                  <button className="btn">Añadir al carrito</button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Products;
