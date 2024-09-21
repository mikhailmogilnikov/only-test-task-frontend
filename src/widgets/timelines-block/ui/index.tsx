import styles from './styles.module.scss';

import { EventsGallery } from '@/entities/event';
import { ITimeline, TimelineSelector, TimelinesProvider } from '@/entities/timeline';

type Props = {
  timelines: ITimeline[];
};

export const TimelinesBlock = ({ timelines }: Props) => {
  const timelinesCount = timelines.length;

  if (timelinesCount < 2 || timelinesCount > 6) {
    return <p>От 2 до 6 временных линий</p>;
  }

  return (
    <TimelinesProvider>
      <section className={styles.wrapper}>
        <TimelineSelector />
        <EventsGallery />
        <div className={styles['middle-separator']} />
      </section>
    </TimelinesProvider>
  );
};
