import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import styles from './index.module.css';
import Modal from '../components/ui/Modal';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import Head from 'next/head';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const [refHero, inViewHero] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [refMembership, inViewMembership] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [refFeatures, inViewFeatures] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [refStats, inViewStats] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [refCta, inViewCta] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [refTestimonials, inViewTestimonials] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Layout>
      <Head>
        <title>Colegio de Abogados del Sur de Tucumán</title>
        <meta name="description" content="Defendiendo la justicia, protegiendo tus derechos desde 1950. Únete a nuestra comunidad legal y descubre los beneficios de ser parte del Colegio de Abogados del Sur de Tucumán." />
      </Head>
      <div className={styles.homePage}>
        <motion.header 
          ref={refHero}
          className={`${styles.hero} ${inViewHero ? styles.fadeIn : styles.hidden}`}
          initial={{ opacity: 0, y: 50 }}
          animate={inViewHero ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className={styles.title}>Colegio de Abogados del Sur de Tucumán</h1>
          <p className={styles.subtitle}>Defendiendo la justicia, protegiendo tus derechos desde 1950</p>
          <div className={styles.heroButtons}>
            <motion.button 
              className={styles.heroButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Consulta Gratuita
            </motion.button>
          </div>
        </motion.header>
        
        <motion.section 
          ref={refMembership}
          className={`${styles.membership} ${inViewMembership ? styles.fadeIn : styles.hidden}`}
          initial={{ opacity: 0, y: 50 }}
          animate={inViewMembership ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2>Únete a Nuestra Comunidad Legal</h2>
          <p>Descubre los beneficios de ser parte del Colegio de Abogados del Sur de Tucumán. La matriculación es tu primer paso para acceder a desarrollo profesional, networking y más.</p>
          <motion.button 
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleModal}
          >
            Ver Requisitos de Matriculación
          </motion.button>
        </motion.section>

        <motion.section 
          ref={refFeatures}
          className={`${styles.features} ${inViewFeatures ? styles.fadeIn : styles.hidden}`}
          initial={{ opacity: 0, y: 50 }}
          animate={inViewFeatures ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
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
        </motion.section>

        <motion.section 
          ref={refStats}
          className={`${styles.stats} ${inViewStats ? styles.fadeIn : styles.hidden}`}
          initial={{ opacity: 0, y: 50 }}
          animate={inViewStats ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className={styles.stat}>
            <h3>
              {inViewStats && (
                <CountUp end={1000} duration={2.5} prefix="+" />
              )}
            </h3>
            <p>Miembros Activos</p>
          </div>
          <div className={styles.stat}>
            <h3>
              {inViewStats && (
                <CountUp end={70} duration={2.5} suffix="+" />
              )}
            </h3>
            <p>Años de Experiencia</p>
          </div>
          <div className={styles.stat}>
            <h3>
              {inViewStats && (
                <CountUp end={100} duration={2.5} suffix="+" />
              )}
            </h3>
            <p>Casos Exitosos al Año</p>
          </div>
        </motion.section>

        <motion.section 
          ref={refCta}
          className={`${styles.cta} ${inViewCta ? styles.fadeIn : styles.hidden}`}
          initial={{ opacity: 0, y: 50 }}
          animate={inViewCta ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2>Únete a Nuestra Comunidad Legal</h2>
          <p>Descubre los beneficios de ser parte del Colegio de Abogados del Sur de Tucumán</p>
          <motion.button 
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hazte Miembro
          </motion.button>
        </motion.section>

        <motion.section 
          ref={refTestimonials}
          className={`${styles.testimonials} ${inViewTestimonials ? styles.fadeIn : styles.hidden}`}
          initial={{ opacity: 0, y: 50 }}
          animate={inViewTestimonials ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2>Lo que dicen nuestros miembros</h2>
          <div className={styles.testimonial}>
            <p>"El Colegio de Abogados ha sido fundamental en mi desarrollo profesional."</p>
            - Dra. María López
          </div>
        </motion.section>

        <Modal isOpen={isModalOpen} onClose={toggleModal}>
          <h2>Requisitos de Matriculación</h2>
          <ol>
            <li>*Diploma original* legalizado por el Ministerio de Educación de la Nación y Ministerio del Interior.</li>
            <li>*Dos fotocopias reducidas del Diploma* (Tamaño A4) certificadas.</li>
            <li>*Una fotocopia del certificado analítico* certificada.</li>
            <li>*Fotocopia del DNI* de ambos lados.</li>
            <li>*Constancia de CUIL/CUIT*.</li>
            <li>*Constancia de otros Colegios* donde estuvieras matriculado (si aplica).</li>
          </ol>
          <p>Nota: No se recibirán inscripciones sin la debida intervención ministerial en el Diploma.</p>
        </Modal>
      </div>
    </Layout>
  );
};

export default HomePage;
