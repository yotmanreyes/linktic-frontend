import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import AdminMenu from "../../components/AdminMenu";
import AddProduct from "../../components/AddProduct";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products");
        if (!response.ok) {
          throw new Error("Error fetching products");
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
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar />
      <AdminMenu />
      <main className="main-content">
        <h2>Lista de Productos</h2>
        <button className="btn btn-primary" type="button" onClick={openModal}>
          Agregar Producto
        </button>

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Categoría</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category.name}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <AddProduct isOpen={isModalOpen} onClose={closeModal} />
      </main>
    </>
  );
};

export default AdminProducts;
