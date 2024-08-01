import React from 'react';
import Layout from '../components/layout/Layout';
import styles from './services.module.css';

const ServicesPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Servicios del Colegio de Abogados</h1>
        
        <section className={styles.section}>
          <h2>Asesoría Legal</h2>
          <p>Ofrecemos asesoría legal especializada en diversas áreas del derecho para nuestros miembros y la comunidad.</p>
        </section>
        
        <section className={styles.section}>
          <h2>Formación Continua</h2>
          <p>Proporcionamos programas de formación continua para mantener a nuestros miembros actualizados en las últimas tendencias y cambios en la legislación.</p>
        </section>
        
        <section className={styles.section}>
          <h2>Representación Profesional</h2>
          <p>Representamos los intereses de nuestros miembros ante instituciones gubernamentales y otros organismos relevantes.</p>
        </section>
        
        <section className={styles.section}>
          <h2>Mediación y Arbitraje</h2>
          <p>Facilitamos servicios de mediación y arbitraje para resolver disputas de manera eficiente y efectiva.</p>
        </section>
        
        <section className={styles.section}>
          <h2>Biblioteca Jurídica</h2>
          <p>Mantenemos una extensa biblioteca jurídica con recursos actualizados para la investigación y consulta.</p>
        </section>
        
        <section className={styles.section}>
          <h2>Networking Profesional</h2>
          <p>Organizamos eventos y oportunidades de networking para fomentar la colaboración entre profesionales del derecho.</p>
        </section>
      </div>
    </Layout>
  );
};

export default ServicesPage;