import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EventCard } from '../../card';

import { IEvent } from '@/entities/event/model/event.type';

type Props = {
  events: IEvent[];
};

export const DesktopEventsGallery = ({ events }: Props) => {
  return (
    <Swiper
      navigation
      modules={[Navigation, A11y]}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      slidesPerView={3}
      spaceBetween={50}
    >
      {events.map((event) => (
        <SwiperSlide key={event.id}>
          <EventCard event={event} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
