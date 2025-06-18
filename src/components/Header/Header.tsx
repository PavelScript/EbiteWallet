import styles from "./Header.module.scss";


function Header() {
  return (
    <div className={styles.headerContainer}>
      <button>Вход</button>
      <button>Регистрация</button>
    </div>
  );
}

export default Header;
