'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MouseEventHandler, PropsWithChildren, useRef, useState } from 'react';

import styles from './styles.module.scss';

type Props = PropsWithChildren<{
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}>;

export const ExpandDot = ({ children, className, onClick }: Props) => {
  gsap.registerPlugin(useGSAP);

  const container = useRef();

  const [isHovered, setIsHovered] = useState(false);

  useGSAP(
    () => {
      if (isHovered) {
        gsap.to('.circle', {
          width: 60,
          height: 60,
          backgroundColor: '#fff',
        });

        gsap.to('.textp', {
          opacity: 1,
        });
      }

      if (!isHovered) {
        gsap.to('.circle', {
          width: 6,
          height: 6,
          backgroundColor: '#42567A',
        });

        gsap.to('.textp', {
          opacity: 0,
        });
      }
    },
    { dependencies: [isHovered], scope: container },
  );

  return (
    <button
      ref={container}
      className={styles.wrapper}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`${styles.circle} circle`} />
      <p className={`${styles.text} textp`}>{children}</p>
    </button>
  );
};
