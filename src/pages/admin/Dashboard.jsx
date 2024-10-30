// Dashboard.js
import React from "react";
import Navbar from "../../components/Navbar";
import AdminMenu from "../../components/AdminMenu";
import shopcart from "../../assets/shopcart.svg";

const Dashboard = () => {
  return (
    <>
      <Navbar></Navbar>
      <AdminMenu></AdminMenu>
      <main className="main-content">
        <h2>Bienvenido al Dashboard</h2>
        <div className="insights">
          <article className="insight-box">
            <div className="insight-content">
              Ordenes Pendientes
              <img src={shopcart} alt="" />
            </div>
          </article>
          <article className="insight-box">
            <div className="insight-content">Ordenes Realizadas</div>
          </article>
          <article className="insight-box">
            <div className="insight-content">Productos</div>
          </article>
          <article className="insight-box">
            <div className="insight-content">Total</div>
          </article>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
