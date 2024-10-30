import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/forms.css";
import app_logo from "../../assets/logo-linktic.svg";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de registro aquí
    if (username === "" || email === "" || password === "") {
      setError("Por favor completa todos los campos.");
      return;
    }

    console.log("Registro exitoso:", { username, email, password });
    // Redirigir o manejar el registro aquí
  };

  return (
    <div className="form-container sign-up-container">
      <Link to="/">
        <img src={app_logo} style={{ filter: "brightness(0.5)" }} alt="" />
      </Link>
      <h2 className="text-center">Registrarse</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-block">
          <label htmlFor="username">Nombre de Usuario:</label>
          <input
            className="form-control"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Introduce tu username"
            required
          />
        </div>
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
            autoComplete="new-password"
            required
          />
        </div>
        <div className="form-block">
          <label htmlFor="password">Repite tu contraseña:</label>
          <input
            className="form-control"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Repite tu contraseña"
            required
          />
        </div>
        <button className="btn btn-block btn-primary" type="submit">
          Registrarse
        </button>
      </form>
      <p>
        ¿Ya tienes una cuenta? <Link to="/sign-in">Inicia sesión aquí</Link>
      </p>
      <Link to="/">Volver a la pagina de Inicio</Link>
    </div>
  );
};

export default SignUp;
