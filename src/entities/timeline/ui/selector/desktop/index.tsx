import styles from '../styles.module.scss';

import { TimelineCircle } from './circle';

export const TimelineSelectorDesktop = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles['middle-separator']} />
      <TimelineCircle />
    </div>
  );
};
