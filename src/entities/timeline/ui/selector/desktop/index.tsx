import styles from '../styles.module.scss';
import { TimelineSelectorYears } from '../years';
import { useTimelines } from '../../../lib/timelines-provider';
import { TimelineSelectorControls } from '../controls';

import { TimelineCircle } from './circle';

export const TimelineSelectorDesktop = () => {
  const { timelines, activeTimelineIndex } = useTimelines();

  const { startYear, endYear } = timelines[activeTimelineIndex];

  return (
    <div className={styles.wrapper}>
      <div className={`${styles['middle-separator']}`} />
      <TimelineCircle />
      <TimelineSelectorYears endYear={endYear} startYear={startYear} />
      <TimelineSelectorControls />
    </div>
  );
};
