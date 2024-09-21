import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import { useTimelines } from '../../../lib/timelines-provider';

import desktopStyles from './styles.module.scss';

import { ExpandDot } from '@/shared/ui/expand-dot';

const radToDeg = (radians: number) => (radians * 180) / Math.PI;

export const TimelineCircle = () => {
  const { active, setActive } = useTimelines();

  const radius = 265;
  const startAngle = -Math.PI / 6;
  const totalDots = 6;

  const [dots] = useState(Array.from({ length: totalDots }, (_, index) => index));

  const circleRef = useRef<HTMLDivElement>(null);

  // Функция для расчета координат каждой точки на окружности
  const calculateDotPosition = (index: number, total: number, angleOffset = 0) => {
    const angle = ((2 * Math.PI) / total) * index + angleOffset;
    const x = radius + radius * Math.cos(angle);
    const y = radius + radius * Math.sin(angle);

    return { x, y };
  };

  useEffect(() => {
    dots.forEach((_, index) => {
      const { x, y } = calculateDotPosition(index, dots.length, startAngle);

      gsap.set(`.dot-${index}`, { x, y }); // Инициализируем позиции точек
    });
  }, [dots]);

  const handleDotClick = (index: number) => {
    const clickedAngle = ((2 * Math.PI) / totalDots) * index;
    const rotateBy = startAngle - clickedAngle;

    // Поворачиваем контейнер
    gsap.to(circleRef.current, {
      duration: 1,
      rotation: radToDeg(rotateBy),
      transformOrigin: `${radius}px ${radius}px`,
      ease: 'power2.inOut',
    });

    setActive(index);
  };

  return (
    <div className={desktopStyles['circle-wrapper']}>
      <div
        ref={circleRef}
        className={desktopStyles.circle}
        style={{ width: radius * 2, height: radius * 2 }}
      >
        {dots.map((_, index) => (
          <div key={index} className={`${desktopStyles['dot-wrapper']} dot-${index}`}>
            <ExpandDot className={desktopStyles.dot} onClick={() => handleDotClick(index)}>
              {index + 1}
            </ExpandDot>
          </div>
        ))}
      </div>
    </div>
  );
};
