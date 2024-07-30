import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './DashboardNavbar.module.css';
import { Menu } from 'lucide-react';

const DashboardNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/dashboard" className={styles.logo}>
          Colegio de Abogados
        </Link>
        <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
          <Link href="/dashboard" className={router.pathname === '/dashboard' ? styles.active : ''}>
            Inicio
          </Link>
          <Link href="/dashboard/cases" className={router.pathname.startsWith('/dashboard/cases') ? styles.active : ''}>
            Casos
          </Link>
          <Link href="/dashboard/library" className={router.pathname === '/dashboard/library' ? styles.active : ''}>
            Biblioteca Legal
          </Link>
          <Link href="/dashboard/events" className={router.pathname === '/dashboard/events' ? styles.active : ''}>
            Eventos
          </Link>
        </div>
        <div className={styles.userMenu}>
          <img src="/api/placeholder/40/40" alt="Usuario" className={styles.userAvatar} />
          <span className={styles.userName}>Abogado</span>
          <div className={styles.dropdownContent}>
            <Link href="/dashboard/profile">Perfil</Link>
            <Link href="/dashboard/settings">Configuración</Link>
            <a href="#" onClick={() => { /* Implementar lógica de cierre de sesión */ }}>Cerrar sesión</a>
          </div>
        </div>
        <button className={styles.menuButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default DashboardNavbar;