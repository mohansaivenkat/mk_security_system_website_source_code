import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { cn } from '@/lib/utils';

/**
 * ParallaxSection — wraps children with scroll-driven parallax motion.
 * @param {number} speed — 0.1 (subtle) to 0.5 (dramatic), controls vertical offset range
 * @param {string} direction — 'up' (default) or 'down'
 */
export default function ParallaxSection({
  children,
  speed = 0.15,
  direction = 'up',
  className = '',
  as = 'div',
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const range = 100 * speed;
  const yRange = direction === 'up' ? [range, -range] : [-range, range];
  const y = useTransform(scrollYProgress, [0, 1], yRange);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  const Component = motion.create(as);

  return (
    <Component
      ref={ref}
      style={{ y, opacity }}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
