import ScrollReveal from './ScrollReveal';
import { cn } from '@/lib/utils';

export default function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  className = '',
}) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center',
        align === 'left' && 'text-left',
        className
      )}
    >
      {label && (
        <ScrollReveal variant="fade-up" delay={0}>
          <span className="inline-block rounded-full bg-brand-light px-4 py-1.5 font-body text-xs font-medium tracking-widest text-brand uppercase mb-4">
            {label}
          </span>
        </ScrollReveal>
      )}
      <ScrollReveal variant="fade-up" delay={0.1}>
        <h2 className="font-heading font-semibold text-text-primary mb-4 leading-tight">
          {title}
        </h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal variant="fade-up" delay={0.2}>
          <p className={cn(
            'text-text-secondary max-w-2xl leading-relaxed',
            align === 'center' && 'mx-auto'
          )}>
            {description}
          </p>
        </ScrollReveal>
      )}
      <ScrollReveal variant="fade-up" delay={0.25}>
        <div className={cn(
          'accent-line mt-4',
          align === 'center' && 'mx-auto'
        )} />
      </ScrollReveal>
    </div>
  );
}
