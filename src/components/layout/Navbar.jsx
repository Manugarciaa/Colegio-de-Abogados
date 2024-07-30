import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Colegio de Abogados
        </Link>
        <button className={`${styles.menuBtn} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`${styles.navContainer} ${isMenuOpen ? styles.active : ''}`}>
          <div className={styles.navLinks}>
            <Link href="/" onClick={toggleMenu}>Inicio</Link>
            <Link href="/about" onClick={toggleMenu}>Nosotros</Link>
            <Link href="/services" onClick={toggleMenu}>Servicios</Link>
            <Link href="/contact" onClick={toggleMenu}>Contacto</Link>
          </div>
          <div className={styles.authLinks}>
            <Link href="/login" className={styles.loginBtn} onClick={toggleMenu}>
              Iniciar Sesión
            </Link>
            <Link href="/register" className={styles.registerBtn} onClick={toggleMenu}>
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;