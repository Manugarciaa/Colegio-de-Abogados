import Link from 'next/link';
import styles from './DashboardFooter.module.css';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const DashboardFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Colegio de Abogados</h3>
            <p>Defendiendo la justicia y promoviendo la excelencia legal.</p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook"><Facebook size={16} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={16} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
            </div>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.linkColumn}>
              <h4>Enlaces Rápidos</h4>
              <Link href="/dashboard">Panel de Control</Link>
              <Link href="/dashboard/cases">Mis Casos</Link>
              <Link href="/dashboard/library">Biblioteca Legal</Link>
              <Link href="/dashboard/events">Eventos</Link>
            </div>
            <div className={styles.linkColumn}>
              <h4>Soporte</h4>
              <Link href="/dashboard/help">Centro de Ayuda</Link>
              <Link href="/dashboard/faq">Preguntas Frecuentes</Link>
              <Link href="/dashboard/contact">Contacto</Link>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Colegio de Abogados. Todos los derechos reservados.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Política de Privacidad</Link>
            <Link href="/terms">Términos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter;