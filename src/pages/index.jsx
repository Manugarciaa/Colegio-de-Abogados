import React from 'react';
import Layout from '../components/layout/Layout';
import styles from './index.module.css';

const HomePage = () => {
  return (
    <Layout>
      <div className={styles.homePage}>
        <header className={styles.hero}>
          <h1 className={styles.title}>Colegio de Abogados del Sur de Tucumán</h1>
          <p className={styles.subtitle}>Defendiendo la justicia, protegiendo tus derechos desde 1950</p>
          <button className={styles.heroButton}>Consulta Gratuita</button>
        </header>
        
        <section className={styles.about}>
          <h2>Sobre Nosotros</h2>
          <p>El Colegio de Abogados del Sur de Tucumán es una institución comprometida con la excelencia legal y el servicio a la comunidad. Con más de 70 años de experiencia, somos líderes en la defensa de los derechos y la promoción de la justicia en nuestra región.</p>
        </section>

        <section className={styles.features}>
          <div className={styles.feature}>
            <i className="fas fa-balance-scale"></i>
            <h3>Servicios Legales</h3>
            <p>Asesoramiento jurídico integral en diversas áreas del derecho.</p>
          </div>
          <div className={styles.feature}>
            <i className="fas fa-user-graduate"></i>
            <h3>Desarrollo Profesional</h3>
            <p>Programas de formación continua y actualización legal.</p>
          </div>
          <div className={styles.feature}>
            <i className="fas fa-users"></i>
            <h3>Networking</h3>
            <p>Eventos y oportunidades para expandir tu red profesional.</p>
          </div>
          <div className={styles.feature}>
            <i className="fas fa-gavel"></i>
            <h3>Ética Profesional</h3>
            <p>Promovemos los más altos estándares éticos en la práctica legal.</p>
          </div>
        </section>

        <section className={styles.stats}>
          <div className={styles.stat}>
            <h3>+1000</h3>
            <p>Miembros Activos</p>
          </div>
          <div className={styles.stat}>
            <h3>70+</h3>
            <p>Años de Experiencia</p>
          </div>
          <div className={styles.stat}>
            <h3>100+</h3>
            <p>Casos Exitosos al Año</p>
          </div>
        </section>

        <section className={styles.cta}>
          <h2>Únete a Nuestra Comunidad Legal</h2>
          <p>Descubre los beneficios de ser parte del Colegio de Abogados del Sur de Tucumán</p>
          <button className={styles.ctaButton}>Hazte Miembro</button>
        </section>

        <section className={styles.testimonials}>
          <h2>Lo que dicen nuestros miembros</h2>
          <div className={styles.testimonial}>
            <p>"El Colegio de Abogados ha sido fundamental en mi desarrollo profesional."</p>
            - Dra. María López
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;