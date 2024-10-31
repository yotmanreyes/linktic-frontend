import React, { useState } from "react";

const AddProduct = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para subir la imagen a S3 o al sistema de archivos local.
    console.log({ name, description, price, category, image });
    // Lógica para cerrar el modal después de enviar
    onClose();
  };

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2 className="text-center">Agregar Producto</h2>
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-block">
              <label>Nombre:</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-block">
              <label>Descripción:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="form-block">
              <label>Precio:</label>
              <input
                className="form-control"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div className="form-block">
              <label>Categoría:</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                {/* Aquí debes cargar las categorías desde tu base de datos o estado */}
                <option value="">Seleccionar categoría</option>
                <option value="electronics">Electrónica</option>
                <option value="clothing">Ropa</option>
                <option value="accessories">Accesorios</option>
              </select>
            </div>
            <div className="form-block">
              <label>Imagen:</label>
              <input
                className="form-control"
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
            </div>
            <button className="btn btn-primary btn-block" type="submit">
              Agregar Producto
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default AddProduct;
