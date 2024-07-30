import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={styles.mainContent}>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;