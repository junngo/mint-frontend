import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Layout.scss";

const Layout = ({ children }) => {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <div className="app-container">
      <button className="nav-toggle" onClick={toggleNav}>
        ☰
      </button>

      <nav className={`left-nav ${navVisible ? "visible" : ""}`}>
        <div className="logo">MintFins Stock</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/stocks">Stocks</Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>

      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;

