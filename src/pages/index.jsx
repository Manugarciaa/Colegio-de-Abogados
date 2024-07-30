import React from 'react';
import Layout from '../components/layout/Layout';
import styles from './index.module.css';

const HomePage = () => {
  return (
    <Layout>
      <div className={styles.homePage}>
        <header className={styles.hero}>
          <h1 className={styles.title}>Bienvenidos al Colegio de Abogados</h1>
          <p className={styles.subtitle}>Defendiendo la justicia, protegiendo tus derechos</p>
        </header>
        <section className={styles.features}>
          <div className={styles.feature}>
            <h2>Servicios Legales</h2>
            <p>Ofrecemos una amplia gama de servicios legales para nuestros miembros y clientes.</p>
          </div>
          <div className={styles.feature}>
            <h2>Desarrollo Profesional</h2>
            <p>Programas de formación continua para mantenerte actualizado en el campo legal.</p>
          </div>
          <div className={styles.feature}>
            <h2>Networking</h2>
            <p>Conecta con otros profesionales del derecho y expande tu red de contactos.</p>
          </div>
        </section>
        <section className={styles.cta}>
          <h2>Únete a Nuestra Comunidad Legal</h2>
          <button className={styles.ctaButton}>Hazte Miembro</button>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;