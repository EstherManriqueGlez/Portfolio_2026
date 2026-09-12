import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { LanguageProvider } from '@/context/LanguageProvider';
import { useLanguage } from '@/context/useLanguage';
import { en } from '@/i18n/en';
import { es } from '@/i18n/es';

const LanguageProbe = () => {
  const { lang, setLang, content } = useLanguage();

  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="meta-title">{content.meta.title}</span>
      <button type="button" onClick={() => setLang('es')}>
        switch-es
      </button>
      <button type="button" onClick={() => setLang('en')}>
        switch-en
      </button>
    </div>
  );
};

const renderLanguageProbe = () =>
  render(
    <LanguageProvider>
      <LanguageProbe />
    </LanguageProvider>,
  );

describe('LanguageProvider', () => {
  it('defaults to English and applies lang, title and localStorage', () => {
    renderLanguageProbe();

    expect(screen.getByTestId('lang')).toHaveTextContent('en');
    expect(screen.getByTestId('meta-title')).toHaveTextContent(en.meta.title);
    expect(document.documentElement).toHaveAttribute('lang', 'en');
    expect(document.title).toBe(en.meta.title);
    expect(localStorage.getItem('lang')).toBe('en');
  });

  it('switches to Spanish and updates lang, title and localStorage', async () => {
    const user = userEvent.setup();
    renderLanguageProbe();

    await user.click(screen.getByRole('button', { name: 'switch-es' }));

    expect(screen.getByTestId('lang')).toHaveTextContent('es');
    expect(screen.getByTestId('meta-title')).toHaveTextContent(es.meta.title);
    expect(document.documentElement).toHaveAttribute('lang', 'es');
    expect(document.title).toBe(es.meta.title);
    expect(localStorage.getItem('lang')).toBe('es');
  });

  it('switches back to English', async () => {
    const user = userEvent.setup();
    localStorage.setItem('lang', 'es');
    renderLanguageProbe();

    await user.click(screen.getByRole('button', { name: 'switch-en' }));

    expect(screen.getByTestId('lang')).toHaveTextContent('en');
    expect(document.documentElement).toHaveAttribute('lang', 'en');
    expect(localStorage.getItem('lang')).toBe('en');
  });

  it('reads a previously saved language from localStorage', () => {
    localStorage.setItem('lang', 'es');

    renderLanguageProbe();

    expect(screen.getByTestId('lang')).toHaveTextContent('es');
    expect(screen.getByTestId('meta-title')).toHaveTextContent(es.meta.title);
    expect(document.documentElement).toHaveAttribute('lang', 'es');
  });
});
