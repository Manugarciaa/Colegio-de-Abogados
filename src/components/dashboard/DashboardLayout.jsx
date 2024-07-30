import DashboardNavbar from './DashboardNavbar';
import DashboardFooter from './DashboardFooter';
import styles from './DashboardLayout.module.css';

const DashboardLayout = ({ children }) => {
  return (
    <div className={styles.dashboardLayout}>
      <DashboardNavbar />
      <main className={styles.mainContent}>
        {children}
      </main>
      <DashboardFooter />
    </div>
  );
};

export default DashboardLayout;