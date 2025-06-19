import styles from "./WalletBalanceInfo.module.scss";

const WalletBalanceInfo = () => {
  return (
    <div className={styles.balanceInfoWrapper}>
      <div className={styles.userAvatar}>
        <img src="/avatar.png" alt="user avatar" />
        <p>GugenotHuylanini</p>
      </div>
      <div className={styles.totalMoney}>
        <p>Общий баланс</p>
        <p className={styles.moneyValue}>666.99 USDT</p>
      </div>
      <div className={styles.buttons}>
        <div><button className={styles.button}>+</button>
        <p>Пополнить</p></div>
        <div><button className={styles.button}> ⬈</button>
        <p>Отправить</p></div>
        <div><button className={styles.button}> 🛒</button>
        <p>Оплатить</p></div>
        
      </div>
    </div>
  );
};

export default WalletBalanceInfo;
