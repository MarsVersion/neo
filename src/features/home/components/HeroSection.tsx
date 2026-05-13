'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const BREATHE_DURATION = 7.5;

export default function HeroSection() {
  const reducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const children = (
    <>
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
    </>
  );

  /* Plain <h1> for SSR + first client paint so the headline is never `opacity:0` if JS chunks fail on the host. */
  const usePlainHeading = reducedMotion === true || !mounted;

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-headline-shell">
            {usePlainHeading ? (
              <h1 className="hero-headline">{children}</h1>
            ) : (
              <motion.h1
                className="hero-headline"
                initial={false}
                animate={{
                  opacity: [0, 1, 1, 0, 0],
                  y: [12, 0, 0, 8, 12],
                  filter: ['blur(6px)', 'blur(0px)', 'blur(0px)', 'blur(5px)', 'blur(6px)']
                }}
                transition={{
                  duration: BREATHE_DURATION,
                  repeat: Infinity,
                  repeatDelay: 0,
                  ease: ['easeInOut', 'easeInOut', 'easeInOut', 'easeInOut'],
                  times: [0, 0.2, 0.44, 0.68, 1]
                }}
              >
                {children}
              </motion.h1>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
