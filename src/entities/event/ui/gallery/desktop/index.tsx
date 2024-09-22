import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EventCard } from '../../card';
import { IEvent } from '../../../model/event.type';

import styles from './styles.module.scss';

type Props = {
  events: IEvent[];
};

export const DesktopEventsGallery = ({ events }: Props) => {
  return (
    <Swiper
      navigation
      className={styles.wrapper}
      containerModifierClass={styles['swiper-wrapper']}
      modules={[Navigation, A11y]}
      slidesPerView={3}
      spaceBetween={60}
    >
      {events.map((event) => (
        <SwiperSlide key={event.id}>
          <EventCard event={event} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
