import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/forms.css";
import app_logo from "../../assets/logo-linktic.svg";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticación aquí (ej. llamada a API)
    if (email === "" || password === "") {
      setError("Por favor completa todos los campos.");
      return;
    }

    // Simulación de inicio de sesión exitoso
    console.log("Inicio de sesión exitoso:", { email, password });
    // Aquí podrías redirigir al usuario a otra página
  };

  return (
    <div className="form-container sign-in-container">
      <Link to="/">
        <img src={app_logo} alt="" style={{ filter: "brightness(0.5)" }} />
      </Link>
      <h2 className="text-center">Iniciar Sesión</h2>
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
            placeholder="Introduzca su email"
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
            placeholder="Introduzca su contraseña"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-block btn-primary" type="submit">
          Iniciar Sesión
        </button>
      </form>
      <p>
        ¿No tienes una cuenta? <Link to="/sign-up">Regístrate aquí</Link>
      </p>
      <Link to="/">Volver a la pagina de Inicio</Link>
    </div>
  );
};

export default SignIn;
