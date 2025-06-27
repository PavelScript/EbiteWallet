import styles from "./WalletBalanceInfo.module.scss";
import arrowUp from "../../assets/arrowUp.svg";

const WalletBalanceInfo = () => {
  return (
    <div className={styles.balanceInfoWrapper}>
      <div className={styles.userAvatar}>
        <img src="/avatar.png" alt="user avatar" />
        <p className={styles.userName}>User_name</p>
      </div>
      <div className={styles.totalMoney}>
        <p>Общий баланс</p>
        <p className={styles.moneyValue}>111.2 USDT</p>
      </div>
      <div className={styles.buttons}>
        <div className={styles.button}>
          <button className={styles.button}>
            <img className={styles.plusIcon} src="/plusIcon.svg" alt="Add"  />
          </button>
          <p>Пополнить</p>
        </div>
        <div className={styles.button}>
          <button className={styles.button}>
            <img className={styles.arrowUp} src={arrowUp} alt="arrowUp" />
          </button>
          <p>Отправить</p>
        </div>
        <div className={styles.button}>
          <button className={styles.button}>
            <img className={styles.shoppingCart} src="/shoppingCart.svg" alt="Add" />{" "}
          </button>
          <p>Оплатить</p>
        </div>
      </div>
    </div>
  );
};

export default WalletBalanceInfo;
