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
              <li><i className="fas fa-check-circle"></i> Integridad</li>
              <li><i className="fas fa-check-circle"></i> Excelencia</li>
              <li><i className="fas fa-check-circle"></i> Compromiso</li>
              <li><i className="fas fa-check-circle"></i> Innovación</li>
              <li><i className="fas fa-check-circle"></i> Responsabilidad Social</li>
            </ul>
          </div>
        </section>
        <section className={styles.history}>
          <h2>Nuestra Historia</h2>
          <p>Fundado en 1950, el Colegio de Abogados del Sur de Tucumán ha sido un pilar en la comunidad legal durante más de 70 años. A lo largo de nuestra historia, hemos sido testigos y partícipes de importantes cambios en el sistema legal, siempre abogando por la justicia y el estado de derecho.</p>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;