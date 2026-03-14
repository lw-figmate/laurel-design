import { forwardRef } from 'react';
import type { LandingPageProps } from './LandingPage.types';

const LandingPage = forwardRef<HTMLDivElement, LandingPageProps>(
  ({ hero, sections, navigation, footer, cta, className = '', ...rest }, ref) => (
    <div
      ref={ref}
      className={['flex min-h-screen flex-col font-[family-name:var(--laurel-font-sans)]', className]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {navigation && <header className="sticky top-0 z-40">{navigation}</header>}

      <main className="flex-1">
        {hero}

        {sections.map((section) => (
          <section key={section.id} id={section.id} className="py-[var(--laurel-space-16)]">
            {section.content}
          </section>
        ))}
      </main>

      {footer}

      {cta && (
        <div className="sticky bottom-0 z-30">{cta}</div>
      )}
    </div>
  ),
);

LandingPage.displayName = 'LandingPage';

export { LandingPage };
