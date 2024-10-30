import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Cambia useHistory a useNavigate
import axios from "axios";
import "../../styles/forms.css";
import app_logo from "../../assets/logo-linktic.svg";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Por favor completa todos los campos.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:9000/auth/login", {
        email,
        password,
      });

      localStorage.setItem("access_token", response.data.access_token);
      console.log("Inicio de sesión exitoso:", response.data);

      // Redirigir al panel administrativo o a otra página usando navigate
      navigate("/admin/dashboard");
    } catch (err) {
      setError("Credenciales incorrectas. Inténtalo de nuevo.");
      console.error("Error de inicio de sesión:", err);
    }
  };

  return (
    <div className="form-container admin-login-container">
      <img src={app_logo} alt="" style={{ filter: "brightness(0.5)" }} />
      <h2 className="text-center">Admin Portal</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-block">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            className="form-control"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Introduce tu email"
            required
          />
        </div>
        <div className="form-block">
          <label htmlFor="password">Contraseña:</label>
          <input
            className="form-control"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Introduce tu contraseña"
            required
          />
        </div>
        <button className="btn btn-primary btn-block" type="submit">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
