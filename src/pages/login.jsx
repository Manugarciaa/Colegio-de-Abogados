import React from 'react';
import Layout from '../components/layout/Layout';
import styles from './login.module.css';

const LoginPage = () => {
  return (
    <Layout>
      <div className={styles.loginPage}>
        <div className={styles.loginCard}>
          <h1 className={styles.title}>Iniciar Sesión</h1>
          <form className={styles.loginForm}>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Contraseña" required />
            <button type="submit" className={styles.loginButton}>Ingresar</button>
          </form>
          <p className={styles.forgotPassword}>
            <a href="#">¿Olvidaste tu contraseña?</a>
          </p>
          <p className={styles.register}>
            ¿No tienes una cuenta? <a href="/register">Regístrate</a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;