import React from 'react';
import Layout from '../components/layout/Layout';
import styles from './about.module.css';
import Head from 'next/head';

const AboutPage = () => {
  return (
    <Layout>
      <Head>
        <title>Acerca del Colegio de Abogados del Sur de Tucumán</title>
        <meta name="description" content="Conoce la misión, visión, valores e historia del Colegio de Abogados del Sur de Tucumán. Promovemos la excelencia en la práctica legal y defendemos la justicia." />
      </Head>
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
          <p>Mediante la Ley 6023 se creó el Colegio de Abogados del Sur, con la categoría de organismo de la administración de justicia.</p>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
