import type { FC, SVGProps } from "react";
import styles from './Tab.module.scss';

interface IProps {
  icon: FC<SVGProps<SVGSVGElement>>;
  text: string;
  active?: boolean;
}

const Tab: FC<IProps> = ({ icon, text, active }) => {
  const Icon = icon;

  return (
    <div className={`${styles.tab} ${active && styles.active}`}>
      <Icon className={styles.icon} />
      <span>{text}</span>
    </div>
  )
}

export default Tab;