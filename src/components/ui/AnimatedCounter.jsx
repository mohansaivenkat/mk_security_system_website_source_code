import { useRef, useEffect, useState } from 'react';
import { useInView } from 'motion/react';
import { animate } from 'animejs';

export default function AnimatedCounter({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  className = '',
}) {
  const ref = useRef(null);
  const countRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated && countRef.current) {
      setHasAnimated(true);
      const obj = { value: 0 };
      animate(obj, {
        value: end,
        duration: duration / 1000, // animejs v4 uses seconds
        ease: 'outExpo',
        onUpdate: () => {
          if (countRef.current) {
            countRef.current.textContent = `${prefix}${Math.round(obj.value).toLocaleString()}${suffix}`;
          }
        },
      });
    }
  }, [isInView, hasAnimated, end, duration, suffix, prefix]);

  return (
    <span ref={ref} className={className}>
      <span ref={countRef}>{prefix}0{suffix}</span>
    </span>
  );
}
