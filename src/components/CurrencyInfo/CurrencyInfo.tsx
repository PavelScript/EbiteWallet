import styles from "./CurrencyInfo.module.scss";
import bitcoin from "../../assets/bitcoin.webp";
import etherium from "../../assets/etherium.webp";
import tether from "../../assets/tether.webp";
// import xrp from "../../assets/XRP.webp";

const CurrencyInfo = () => {
  return (
    <div className={styles.currencyInfoWrapper}>
      <div className={styles.innerWrapper}>
        <span className={styles.mainText}>Курс криптовалют</span>
        <div className={styles.currencyList}>
          <div className={styles.currency}>
            <img src={bitcoin} alt="bitcoin" />
            <div className={styles.currencyValue}>
              <p>Bitcoin</p>
              <p className={styles.valueNumber}>$106 823,19 USD</p>
            </div>
          </div>
          <div className={styles.currency}>
            <img src={etherium} alt="etherium" />{" "}
            <div className={styles.currencyValue}>
              <p>Etherium</p>
              <p className={styles.valueNumber}>$2 430,60 USD</p>
            </div>
          </div>
          <div className={styles.currency}>
            <img src={tether} alt="tether" />{" "}
            <div className={styles.currencyValue}>
              <p>Thether</p>
              <p className={styles.valueNumber}>$1 USD</p>
            </div>
          </div>
          {/* <div className={styles.currency}>
            <img src={xrp} alt="XRP" />{" "}
            <div className={styles.currencyValue}>
              <p>XRPr</p>
              <p className={styles.valueNumber}>$2,08 USD</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CurrencyInfo;
