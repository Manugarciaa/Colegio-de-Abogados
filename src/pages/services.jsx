import React from 'react';
import Layout from '../components/layout/Layout';
import styles from './services.module.css';
import Head from 'next/head';

const ServicesPage = () => {
  return (
    <Layout>
      <Head>
        <title>Servicios del Colegio de Abogados del Sur de Tucumán</title>
        <meta name="description" content="Descubre los servicios ofrecidos por el Colegio de Abogados del Sur de Tucumán, incluyendo honorarios sugeridos, alquiler de salones y contactos de juzgados." />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Servicios</h1>
        
        <section className={`${styles.section} ${styles.highlight}`}>
          <h2>Honorarios Sugeridos por Consultas</h2>
          <div className={styles.feeContainer}>
            <div className={styles.feeCard}>
              <h3>Consultas Escritas</h3>
              <p className={styles.fee}>$350.000</p>
            </div>
            <div className={styles.feeCard}>
              <h3>Consultas Verbales</h3>
              <p className={styles.fee}>$175.000</p>
            </div>
          </div>
          <p className={styles.resolution}>Resolución N° 06/24 (DE PRESIDENCIA). Vigencia desde el 23 de marzo de 2024.</p>
        </section>

        <section className={styles.section}>
          <h2>Alquiler del Salón - Categoría "B" Particular</h2>
          <ul className={styles.listModern}>
            <li>Alquiler mediodía (10 a 18): $33.000</li>
            <li>Alquiler Tarde Noche (17 a 23): $40.000</li>
            <li>Alquiler Noche (22 a 05): $40.000</li>
            <li>Cumpleaños Infantiles (Lunes a Jueves 10 a 18): $20.000</li>
            <li>Cumpleaños Infantiles (Lunes a Jueves 17 a 23): $25.000</li>
            <li>SERV. de Limpieza: $5.000</li>
            <li>IPLA: $8.000</li>
            <li>Garantía: $15.000</li>
          </ul>
          <p>Incluye vajilla (platos, cubiertos, copas, platos de postre, paneras, hieleras), manteles, mesas y sillas. Asador, cocina, freezer, aire acondicionado.</p>
        </section>

        <section className={styles.section}>
          <h2>Alquiler del Salón - Categoría "A" Colegiados</h2>
          <ul className={styles.listModern}>
            <li>Alquiler mediodía (10 a 18): $27.000</li>
            <li>Alquiler Tarde Noche (17 a 23): $32.000</li>
            <li>Alquiler Noche (22 a 05): $32.000</li>
            <li>Cumpleaños Infantiles (Lunes a Jueves 10 a 18): $18.000</li>
            <li>Cumpleaños Infantiles (Lunes a Jueves 17 a 23): $23.000</li>
            <li>SERV. de Limpieza: $5.000</li>
            <li>IPLA: $8.000</li>
            <li>Garantía: $15.000</li>
          </ul>
        </section>
        
        <section className={styles.section}>
          <h2>Información de Contacto</h2>
          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <h3>Mesa de Atención</h3>
              <p>428600 (Int 388)</p>
            </div>
            <div className={styles.contactCard}>
              <h3>Juzgado Familia I</h3>
              <p>3815708704</p>
            </div>
            <div className={styles.contactCard}>
              <h3>Juzgado Familia II</h3>
              <p>3815772952</p>
            </div>
            <div className={styles.contactCard}>
              <h3>Juzgado Familia III</h3>
              <p>3815770649</p>
            </div>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>Juzgados Civiles y Comerciales</h2>
          <ul className={styles.listModern}>
            <li>Juzgado Civil y Comercial Común I Nom.: 3815780694</li>
            <li>Juzgado Civil y Comercial Común II Nom.: 3815775770</li>
            <li>Juzgado Civil y Comercial Común III Nom.: 3815783346</li>
          </ul>
        </section>
        
        <section className={styles.section}>
          <h2>Otros Juzgados</h2>
          <div className={styles.tabContainer}>
            <div className={styles.tab}>
              <input type="radio" id="tab1" name="tab-control" defaultChecked />
              <label htmlFor="tab1">Documentos y Locaciones</label>
              <div className={styles.tabContent}>
                <p>I Nom.: 3815705740</p>
                <p>II Nom.: 3815773480</p>
                <p>III Nom.: 3815772943</p>
              </div>
            </div>
            <div className={styles.tab}>
              <input type="radio" id="tab2" name="tab-control" />
              <label htmlFor="tab2">Cobros y Apremios</label>
              <div className={styles.tabContent}>
                <p>I: 3815707324</p>
                <p>II: 3815975698</p>
              </div>
            </div>
            <div className={styles.tab}>
              <input type="radio" id="tab3" name="tab-control" />
              <label htmlFor="tab3">Juzgados de Trabajo</label>
              <div className={styles.tabContent}>
                <p>I: 3815783759</p>
                <p>II: 3815984412</p>
                <p>III: 3815984353</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ServicesPage;
