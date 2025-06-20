import styles from './NavigationBar.module.scss';
import HomeIcon from '@/assets/home.svg?react';
import ClockIcon from '@/assets/clock.svg?react';
import GlobeIcon from '@/assets/globe.svg?react';
import ProfileIcon from '@/assets/profile.svg?react';
import Tab from './Tab/Tab';

const NavigationBar: React.FC = () => {
  return (
    <div className={styles.bar}>
      <Tab icon={HomeIcon} text='Главная' active />
      <Tab icon={ClockIcon} text='История' />
      <Tab icon={GlobeIcon} text='Браузер' />
      <Tab icon={ProfileIcon} text='Профиль' />
    </div>
  )
}

export default NavigationBar;