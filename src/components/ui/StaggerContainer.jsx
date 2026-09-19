import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { cn } from '@/lib/utils';

const containerVariants = {
  hidden: {},
  visible: (stagger) => ({
    transition: {
      staggerChildren: stagger,
      delayChildren: 0.1,
    },
  }),
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.55,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

/**
 * StaggerContainer — orchestrates staggered entrance animations on its children.
 * Wrap each direct child in <motion.div variants={staggerItemVariants}> for the effect.
 *
 * @param {number} stagger — delay between each child animation (default: 0.08s)
 */
export default function StaggerContainer({
  children,
  stagger = 0.08,
  className = '',
  once = true,
  threshold = 0.1,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      custom={stagger}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
