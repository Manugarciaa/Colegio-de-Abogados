import Link from 'next/link';
import styles from './DashboardFooter.module.css';

const DashboardFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerSection}>
            <h3>Aula Virtual</h3>
            <p>Plataforma de educación legal del Colegio de Abogados.</p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className={styles.footerSection}>
            <h3>Enlaces Rápidos</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/dashboard">Inicio</Link></li>
              <li><Link href="/dashboard/courses">Cursos</Link></li>
              <li><Link href="/dashboard/schedule">Horario</Link></li>
              <li><Link href="/dashboard/resources">Recursos</Link></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>Soporte</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/dashboard/help">Centro de Ayuda</Link></li>
              <li><Link href="/dashboard/faq">Preguntas Frecuentes</Link></li>
              <li><Link href="/dashboard/contact">Contacto</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Colegio de Abogados. Todos los derechos reservados.</p>
          <ul className={styles.legalLinks}>
            <li><Link href="/privacy">Política de Privacidad</Link></li>
            <li><Link href="/terms">Términos de Uso</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter;