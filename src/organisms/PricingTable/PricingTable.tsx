import { forwardRef } from 'react';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import { Badge } from '../../atoms/Badge';
import type { PricingTableProps } from './PricingTable.types';

const checkIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-[var(--laurel-text-success)]" aria-hidden="true">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
  </svg>
);

const crossIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-[var(--laurel-text-placeholder)]" aria-hidden="true">
    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
  </svg>
);

const PricingTable = forwardRef<HTMLDivElement, PricingTableProps>(
  ({ tiers, features, onTierSelect, highlightBadge, className = '', ...rest }, ref) => (
    <div
      ref={ref}
      className={['font-[family-name:var(--laurel-font-sans)] overflow-x-auto', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left p-[var(--laurel-space-4)]" />
            {tiers.map((tier) => (
              <th
                key={tier.id}
                className={[
                  'p-[var(--laurel-space-4)] text-center',
                  tier.highlighted ? 'bg-[var(--laurel-bg-brand-muted)] rounded-t-[var(--laurel-radius-xl)]' : '',
                ].join(' ')}
              >
                <div className="flex flex-col items-center gap-[var(--laurel-space-2)]">
                  {tier.highlighted && highlightBadge && <div>{highlightBadge}</div>}
                  <Text as="span" size="lg" weight="semibold">
                    {tier.name}
                  </Text>
                  <Text as="span" size="2xl" weight="bold">
                    {tier.price}
                  </Text>
                  {tier.description && (
                    <Text as="span" size="xs" className="text-[var(--laurel-text-muted)]">
                      {tier.description}
                    </Text>
                  )}
                  <Button
                    variant={tier.highlighted ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => onTierSelect?.(tier.id)}
                    className="mt-[var(--laurel-space-2)]"
                  >
                    {tier.ctaLabel ?? 'Get Started'}
                  </Button>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature) => (
            <tr key={feature.name} className="border-t border-[var(--laurel-border-subtle)]">
              <td className="p-[var(--laurel-space-4)]">
                <Text as="span" size="sm">
                  {feature.name}
                </Text>
              </td>
              {tiers.map((tier) => {
                const val = feature.tiers[tier.id];
                return (
                  <td
                    key={tier.id}
                    className={[
                      'p-[var(--laurel-space-4)] text-center',
                      tier.highlighted ? 'bg-[var(--laurel-bg-brand-muted)]' : '',
                    ].join(' ')}
                  >
                    {typeof val === 'boolean' ? (
                      val ? checkIcon : crossIcon
                    ) : (
                      <Text as="span" size="sm">
                        {val}
                      </Text>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
);

PricingTable.displayName = 'PricingTable';

export { PricingTable };
