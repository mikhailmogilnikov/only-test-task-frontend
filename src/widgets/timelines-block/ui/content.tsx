import { useEffect } from 'react';

import styles from './styles.module.scss';

import { TimelinesProps } from '.';

import { EventsGallery } from '@/entities/event';
import { TimelineSelector, useTimelines } from '@/entities/timeline';

export const TimelineContent = ({ timelines }: TimelinesProps) => {
  const {
    setTimelines,
    setActiveTimelineIndex,
    timelines: storeTimelines,
    activeTimelineIndex,
  } = useTimelines();

  useEffect(() => {
    setTimelines(timelines);
    setActiveTimelineIndex(0);
  }, []);

  if (!storeTimelines || activeTimelineIndex === null) {
    return null;
  }

  return (
    <section className={styles.wrapper}>
      <TimelineSelector />
      <EventsGallery />
      <div className={styles['middle-separator']} />
    </section>
  );
};
