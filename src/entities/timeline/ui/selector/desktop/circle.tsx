import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { useTimelines } from '../../../lib/timelines-provider';
import { calculateDotPosition } from '../../../lib/calc-dot-position';

import desktopStyles from './styles.module.scss';

import { ExpandDot } from '@/shared/ui/expand-dot';
import { radToDeg } from '@/shared/lib/utils/rad-to-deg';

export const TimelineCircle = () => {
  const { setActive } = useTimelines();

  const container = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  const radius = 265;
  const startAngle = -Math.PI / 6;
  const totalDots = 6;

  const [dots] = useState(Array.from({ length: totalDots }, (_, index) => index));

  const { contextSafe } = useGSAP(
    () => {
      dots.forEach((_, index) => {
        const { x, y } = calculateDotPosition(radius, index, dots.length, startAngle);

        gsap.set(`.dot-${index}`, { x, y });
      });
    },
    { scope: container, dependencies: [dots] },
  );

  const handleDotClick = contextSafe((index: number) => {
    const clickedAngle = ((2 * Math.PI) / totalDots) * index;
    const rotateBy = startAngle - clickedAngle;
    const degrees = radToDeg(rotateBy);

    // Поворачиваем контейнер
    gsap.to(circleRef.current, {
      duration: 1,
      rotation: degrees,
      ease: 'power2.inOut',
    });

    // Поворачиваем каждую точку в противоположную сторону
    dots.forEach((_, dotIndex) => {
      const angleOffset = -degrees;

      gsap.to(`.dot-${dotIndex}`, {
        duration: 1,
        rotation: angleOffset,
        ease: 'power2.inOut',
      });
    });

    setActive(index);
  });

  return (
    <div ref={container} className={desktopStyles['circle-wrapper']}>
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
