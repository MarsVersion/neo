'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './FloatingBubbles.module.css';

type Bubble = {
  label: string;
  href: string;
  color: string;
  className: string;
  sizeClass: string;
  xPath: number[];
  yPath: number[];
  scalePath: number[];
  rotatePath: number[];
  duration: number;
  delay: number;
};

function hexToSpaceSeparatedRgb(hex: string): string {
  const cleaned = hex.replace('#', '').trim();
  const isShort = cleaned.length === 3;
  const full = isShort
    ? cleaned
        .split('')
        .map((c) => c + c)
        .join('')
    : cleaned;

  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);

  return `${r} ${g} ${b}`;
}

const BUBBLES: Bubble[] = [
  {
    label: 'Unrealized Ideas',
    href: '/ideas/',
    color: '#0F3D2E',
    className: styles.bubblePosition1,
    sizeClass: styles.bubbleSize280,
    xPath: [0, 22, -14, 10, 0],
    yPath: [0, -16, 10, -8, 0],
    scalePath: [1, 1.008, 0.994, 1.006, 1],
    rotatePath: [0, 0.65, -0.5, 0.42, 0],
    duration: 26,
    delay: 0
  },
  {
    label: 'Contributors',
    href: '/contributors/',
    color: '#3F6B3A',
    className: styles.bubblePosition2,
    sizeClass: styles.bubbleSize320,
    xPath: [0, -18, 14, -10, 0],
    yPath: [0, 12, -14, 8, 0],
    scalePath: [1, 0.994, 1.01, 1.005, 1],
    rotatePath: [0, -0.58, 0.48, -0.4, 0],
    duration: 23,
    delay: 1.6
  },
  {
    label: 'Journal',
    href: '/journal/',
    color: '#2E8B57',
    className: styles.bubblePosition3,
    sizeClass: styles.bubbleSize280,
    xPath: [0, 16, -22, 12, 0],
    yPath: [0, -10, 16, -12, 0],
    scalePath: [1, 1.006, 0.992, 1.009, 1],
    rotatePath: [0, 0.52, -0.62, 0.45, 0],
    duration: 29,
    delay: 0.85
  }
];

export default function FloatingBubbles() {
  const reducedMotion = useReducedMotion();
  const pxMultiplier = reducedMotion ? 0.55 : 1;
  const rotateMultiplier = reducedMotion ? 0.6 : 1;

  return (
    <div className={`${styles.wrap} flex justify-center`}>
      <div className={`${styles.bubbles}`} aria-label="Neo-Slow navigation bubbles">
        {BUBBLES.map((bubble) => (
          <Link
            key={bubble.href}
            href={bubble.href}
            className={`home-bubble-link ${styles.bubbleLink} inline-flex`}
          >
            <motion.div
              className={`${styles.bubble} ${bubble.sizeClass} ${bubble.className}`}
              style={
                {
                  ['--bubble-rgb' as string]: hexToSpaceSeparatedRgb(bubble.color),
                  willChange: 'transform'
                } as React.CSSProperties
              }
              initial={{ x: 0, y: 0, scale: 1, rotate: 0 }}
              animate={{
                x: bubble.xPath.map((v) => v * pxMultiplier),
                y: bubble.yPath.map((v) => v * pxMultiplier),
                scale: bubble.scalePath,
                rotate: bubble.rotatePath.map((v) => v * rotateMultiplier)
              }}
              transition={{
                duration: reducedMotion ? bubble.duration + 6 : bubble.duration,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
                delay: bubble.delay
              }}
              whileHover={{ scale: 1.115 }}
            >
              <span className={styles.bubbleFill} aria-hidden />
              <span className={styles.bubbleInner} aria-hidden />
              <span className={styles.bubbleLabel}>{bubble.label}</span>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
