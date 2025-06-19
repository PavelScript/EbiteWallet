import styles from "./Header.module.scss";


function Header() {
  return (
    <div className={styles.headerContainer}>
      <img src="/logo.jpg" className={styles.logo} alt="EbiteWallet" />
    </div>
  );
}

export default Header;
