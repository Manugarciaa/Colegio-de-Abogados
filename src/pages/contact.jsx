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
            <p><i className="fas fa-map-marker-alt"></i> Calle Principal 123, Ciudad</p>
            <p><i className="fas fa-phone"></i> (123) 456-7890</p>
            <p><i className="fas fa-envelope"></i> info@colegiodeabogados.com</p>
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