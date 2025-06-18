import styles from "./Main.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Main() {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={styles.mainContent}>
        <img src="/logo.jpg" className={styles.logo} alt="EbiteWallet" />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
