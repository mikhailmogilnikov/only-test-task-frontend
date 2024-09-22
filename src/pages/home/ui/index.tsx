import { MockTimelines } from '../config/mock-timeline';

import styles from './styles.module.scss';

import { TimelinesBlock } from '@/widgets/timelines-block';

export const HomePage = () => {
  return (
    <main className={styles.wrapper}>
      <TimelinesBlock timelines={MockTimelines} />
      <TimelinesBlock timelines={MockTimelines} />
    </main>
  );
};
