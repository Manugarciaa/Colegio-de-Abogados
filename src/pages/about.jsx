import React from 'react';
import Layout from '../components/layout/Layout';
import styles from './about.module.css';

const AboutPage = () => {
  return (
    <Layout>
      <div className={styles.aboutPage}>
        <h1 className={styles.title}>Acerca del Colegio de Abogados</h1>
        <section className={styles.aboutContent}>
          <div className={styles.missionVision}>
            <h2>Nuestra Misión</h2>
            <p>Promover la excelencia en la práctica legal, defender la justicia y proteger los derechos de todos los ciudadanos.</p>
            <h2>Nuestra Visión</h2>
            <p>Ser el referente principal en la comunidad legal, liderando el camino hacia un sistema judicial más justo y eficiente.</p>
          </div>
          <div className={styles.values}>
            <h2>Nuestros Valores</h2>
            <ul>
              <li>Integridad</li>
              <li>Excelencia</li>
              <li>Compromiso</li>
              <li>Innovación</li>
              <li>Responsabilidad Social</li>
            </ul>
          </div>
        </section>
        <section className={styles.history}>
          <h2>Nuestra Historia</h2>
          <p>Fundado en [año], el Colegio de Abogados ha sido un pilar en la comunidad legal durante más de [número] años. A lo largo de nuestra historia, hemos...</p>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;