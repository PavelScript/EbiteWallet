import styles from './NavigationBar.module.scss';
import HomeIcon from '@/assets/home.svg?react';
import Tab from './Tab/Tab';

const NavigationBar: React.FC = () => {
  return (
    <div className={styles.bar}>
      <Tab icon={HomeIcon} text='Главная' />
    </div>
  )
}

export default NavigationBar;