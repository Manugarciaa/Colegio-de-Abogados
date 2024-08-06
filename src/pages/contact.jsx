import React from 'react';
import Layout from '../components/layout/Layout';
import styles from './contact.module.css';

const ContactPage = () => {
  return (
    <Layout>
      <div className={styles.contactPage}>
        <h1 className={styles.title}>Contáctanos</h1>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2>Información de Contacto</h2>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Ubicación:</span>
              <p className={styles.infoValue}><i className="fas fa-map-marker-alt"></i> España 1583, Concepción, Tucuman, Argentina</p>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Teléfono:</span>
              <p className={styles.infoValue}><i className="fas fa-phone"></i> +54 9 3865821116</p>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Email:</span>
              <p className={styles.infoValue}><i className="fas fa-envelope"></i> sec.colegioabogadossur@gmail.com</p>
            </div>
          </div>
          <form className={styles.contactForm}>
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Asunto" required />
            <textarea placeholder="Mensaje" required></textarea>
            <button type="submit" className={styles.submitButton}>Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
