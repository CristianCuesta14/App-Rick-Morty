import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; // Importamos los estilos del componente

function Navbar() {
  const [showMenu, setShowMenu] = useState(false); // Definimos el estado para mostrar/ocultar el menú

  const handleMenuClick = () => { // Definimos la función para cambiar el estado del menú al hacer clic
    setShowMenu(!showMenu);
  };

  return (
    <nav className={styles.nav}> {/* Agregamos la clase 'nav' para los estilos del componente */}
      <div className={`container ${styles.container}`}> {/* Agregamos la clase 'container' para los estilos del componente */}
        <div className={`${styles.logo} ${showMenu ? styles.hideLogo : ""}`}> {/* Agregamos la clase 'logo' para los estilos del componente y la clase 'hideLogo' si el menú está activo */}
          <img src="/logo.png" alt="Logo" /> {/* Agregamos la imagen del logo */}
          <h1>Cristian Cuesta</h1> {/* Agregamos el texto del logo */}
        </div>
        <ul className={`${styles.menu} ${showMenu ? styles.showMenu : ""}`}> {/* Agregamos la clase 'menu' para los estilos del componente y la clase 'showMenu' si el menú está activo */}
          <li>
            <Link to="/" onClick={handleMenuClick}> {/* Agregamos la ruta y la función para cerrar el menú al hacer clic en cada elemento */}
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleMenuClick}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={handleMenuClick}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleMenuClick}>
              Contact
            </Link>
          </li>
        </ul>
        <div className={styles.menuIcon} onClick={handleMenuClick}> {/* Agregamos la clase 'menuIcon' para los estilos del componente y la función para abrir/cerrar el menú al hacer clic en el ícono */}
          <i className="fas fa-bars"></i> {/* Agregamos el ícono del menú */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar; // Exportamos el componente para utilizarlo en otras partes de la aplicación
