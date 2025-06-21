import styles from "./WalletBalanceInfo.module.scss";

const WalletBalanceInfo = () => {
  return (
    <div className={styles.balanceInfoWrapper}>
      <div className={styles.userAvatar}>
        <img src="/avatar.png" alt="user avatar" />
        <p className={styles.userName}>Igor Pinkman</p>
      </div>
      <div className={styles.totalMoney}>
        <p>Общий баланс</p>
        <p className={styles.moneyValue}>666.99 USDT</p>
      </div>
      <div className={styles.buttons}>
        <div>
          <button className={styles.button}>
            <img src="/plusIcon.svg" alt="Add" width="16" height="16" />
          </button>
          <p>Пополнить</p>
        </div>
        <div>
          <button className={styles.button}>
            <p className={styles.arrowUp}>⬈</p>
          </button>
          <p>Отправить</p>
        </div>
        <div>
          <button className={styles.button}>
            <img src="/shoppingCart.svg" alt="Add" width="20" height="20" />{" "}
          </button>
          <p>Оплатить</p>
        </div>
      </div>
    </div>
  );
};

export default WalletBalanceInfo;
