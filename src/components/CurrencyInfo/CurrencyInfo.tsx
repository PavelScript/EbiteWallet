import styles from "./CurrencyInfo.module.scss";
import usdtIcon from "../../assets/USDT.svg";
import doge from "../../assets/doge.png";

const CurrencyInfo = () => {
  return (
    <div className={styles.currencyInfoWrapper}>
      <div className={styles.innerWrapper}>
        <span className={styles.mainText}>Курс криптовалют</span>
        <div className={styles.currencyList}>
          <div className={styles.currency}>
            <img src={usdtIcon} alt="USDT" />
            <div className={styles.currencyValue}>
              <p>USDT </p>
              <p className={styles.valueNumber}>65 rub</p>
            </div>
          </div>
          <div className={styles.currency}>
            <img src={doge} alt="doge" />{" "}
            <div className={styles.currencyValue}>
              <p>DOGE </p>
              <p className={styles.valueNumber}>150 rub</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyInfo;
