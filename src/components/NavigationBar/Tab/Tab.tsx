import type { FC, SVGProps } from "react";
import styles from './Tab.module.scss';

interface IProps {
  icon: FC<SVGProps<SVGSVGElement>>;
  text: string;
}

const Tab: FC<IProps> = ({ icon, text }) => {
  const Icon = icon;

  return (
    <div className={styles.tab}>
      <Icon className={styles.icon} />
      <span>{text}</span>
    </div>
  )
}

export default Tab;