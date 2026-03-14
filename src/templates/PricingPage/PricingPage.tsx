import { forwardRef } from 'react';
import { Text } from '../../atoms/Text';
import { PricingTable } from '../../organisms/PricingTable';
import type { PricingPageProps } from './PricingPage.types';

const PricingPage = forwardRef<HTMLDivElement, PricingPageProps>(
  ({ title = 'Pricing', subtitle, tiers, features, billingToggle, faq, footer, className = '', ...rest }, ref) => (
    <div
      ref={ref}
      className={[
        'font-[family-name:var(--laurel-font-sans)] py-[var(--laurel-space-16)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      <div className="text-center max-w-2xl mx-auto mb-[var(--laurel-space-12)] px-[var(--laurel-space-6)]">
        <Text as="h1" size="2xl" weight="bold" className="mb-[var(--laurel-space-3)]">
          {title}
        </Text>
        {subtitle && (
          <Text as="p" size="md" className="text-[var(--laurel-text-muted)]">
            {subtitle}
          </Text>
        )}
        {billingToggle && <div className="mt-[var(--laurel-space-6)]">{billingToggle}</div>}
      </div>

      <div className="max-w-5xl mx-auto px-[var(--laurel-space-6)]">
        <PricingTable tiers={tiers} features={features ?? []} />
      </div>

      {faq && (
        <div className="max-w-3xl mx-auto mt-[var(--laurel-space-16)] px-[var(--laurel-space-6)]">
          <Text as="h2" size="xl" weight="semibold" className="text-center mb-[var(--laurel-space-8)]">
            Frequently asked questions
          </Text>
          {faq}
        </div>
      )}

      {footer && <div className="mt-[var(--laurel-space-16)]">{footer}</div>}
    </div>
  ),
);

PricingPage.displayName = 'PricingPage';

export { PricingPage };
