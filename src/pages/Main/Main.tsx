import styles from "./Main.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import WalletBalanceInfo from "../../components/WalletBalanceInfo/WalletBalanceInfo";

function Main() {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={styles.mainContent}>
        <WalletBalanceInfo />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
