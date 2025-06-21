import styles from "./CurrencyInfo.module.scss";
import usdtIcon from "../../assets/USDT.svg";
import doge from "../../assets/Doge.png";

const CurrencyInfo = () => {
  return (
    <div className={styles.currencyInfoWrapper}>
      <div className={styles.innerWrapper}>
        <span className={styles.mainText}>Курс криптовалют</span>
        <div className={styles.currencyList}>
          <div className={styles.currency}>
            <img src={usdtIcon} alt="USDT" /> <p>USDT </p><p>65 rub</p>
          </div>
          <div className={styles.currency}>
            <img src={doge} alt="doge" /> <p>DOGE </p><p>150 rub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyInfo;
