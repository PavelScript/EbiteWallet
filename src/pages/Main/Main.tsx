import styles from "./Main.module.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import WalletBalanceInfo from "@/components/WalletBalanceInfo/WalletBalanceInfo";
import NavigationBar from "@/components/NavigationBar/NavigationBar";

function Main() {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={styles.mainContent}>
        <WalletBalanceInfo />
      </div>
      <Footer />
      <NavigationBar />
    </div>
  );
}

export default Main;
