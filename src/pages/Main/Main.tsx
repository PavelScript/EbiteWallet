import styles from "./Main.module.scss";
import Header from "@/components/Header/Header";
import WalletBalanceInfo from "@/components/WalletBalanceInfo/WalletBalanceInfo";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import CurrencyInfo from "@/components/CurrencyInfo/CurrencyInfo";

function Main() {
  return (
    <div className={styles.mainContainer}>
      <Header />

      <WalletBalanceInfo />
      <CurrencyInfo />
      <NavigationBar />
    </div>
  );
}

export default Main;
