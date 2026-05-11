'use client';

import { motion, useReducedMotion } from 'framer-motion';

const BREATHE_DURATION = 7.5;

export default function HeroSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-headline-shell">
            <motion.h1
              className="hero-headline"
              initial={
                reducedMotion
                  ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                  : { opacity: 0, y: 12, filter: 'blur(6px)' }
              }
              animate={
                reducedMotion
                  ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                  : {
                      opacity: [0, 1, 1, 0, 0],
                      y: [12, 0, 0, 8, 12],
                      filter: ['blur(6px)', 'blur(0px)', 'blur(0px)', 'blur(5px)', 'blur(6px)']
                    }
              }
              transition={
                reducedMotion
                  ? { duration: 0.45, ease: 'easeOut' }
                  : {
                      duration: BREATHE_DURATION,
                      repeat: Infinity,
                      repeatDelay: 0,
                      ease: ['easeInOut', 'easeInOut', 'easeInOut', 'easeInOut'],
                      /*
                       * Segment durations (7.5s total):
                       * 0→0.2  ≈1.5s fade in | 0.2→0.44 hold visible ~1.8s
                       * 0.44→0.68 fade out ~1.8s | 0.68→1 pause invisible ~2.4s
                       */
                      times: [0, 0.2, 0.44, 0.68, 1]
                    }
              }
            >
              Imagination is infinite.
              <br />
              <span
                style={{
                  whiteSpace: 'nowrap',
                  color: '#8888E7'
                }}
              >
                Realization has its own timing.
              </span>
            </motion.h1>
          </div>
        </div>
      </div>
    </section>
  );
}
