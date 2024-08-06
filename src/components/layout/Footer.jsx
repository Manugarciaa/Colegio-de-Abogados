import Link from 'next/link';
import { useState } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const [emailFocus, setEmailFocus] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerSection}>
            <h3>Colegio de Abogados</h3>
            <p>Promoviendo la justicia y el desarrollo profesional de nuestros miembros desde 1950.</p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className={styles.footerSection}>
            <h3>Enlaces Rápidos</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/about">Nosotros</Link></li>
              <li><Link href="/services">Servicios</Link></li>
              <li><Link href="/contact">Contacto</Link></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>Contacto</h3>
            <p><i className="fas fa-map-marker-alt"></i> España 1583, Concepción, Tucuman, Argentina 4149</p>
            <p><i className="fas fa-phone"></i> +54 9 3865821116</p>
            <p><i className="fas fa-envelope"></i> sec.colegioabogadossur@gmail.com</p>
          </div>
          <div className={styles.footerSection}>
            <h3>Suscríbete a nuestro boletín</h3>
            <form className={styles.newsletterForm}>
              <div className={`${styles.inputWrapper} ${emailFocus ? styles.focused : ''}`}>
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                />
              </div>
              <button type="submit">Suscribirse</button>
            </form>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Colegio de Abogados. Todos los derechos reservados.</p>
          <ul className={styles.legalLinks}>
            <li><Link href="/privacy">Política de Privacidad</Link></li>
            <li><Link href="/terms">Términos de Uso</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;