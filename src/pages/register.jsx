import React from 'react';
import Layout from '../components/layout/Layout';
import styles from './register.module.css';

const RegisterPage = () => {
  return (
    <Layout>
      <div className={styles.registerPage}>
        <div className={styles.registerCard}>
          <h1 className={styles.title}>Registro</h1>
          <form className={styles.registerForm}>
            <input type="text" placeholder="Nombre" required />
            <input type="text" placeholder="Apellido" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Contraseña" required />
            <input type="password" placeholder="Confirmar Contraseña" required />
            <button type="submit" className={styles.registerButton}>Registrarse</button>
          </form>
          <p className={styles.login}>
            ¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;