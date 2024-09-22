import { DesktopEventsGallery } from './desktop';
import styles from './styles.module.scss';

import { useTimelines } from '@/entities/timeline';
import { useIsMobile } from '@/shared/lib/hooks/use-is-mobile';

export const EventsGallery = () => {
  const isMobile = useIsMobile();
  const { timelines, activeTimelineIndex } = useTimelines();

  const { events } = timelines[activeTimelineIndex];

  return (
    <div className={styles.wrapper}>
      {isMobile ? 'd' : <DesktopEventsGallery events={events} />}
    </div>
  );
};
