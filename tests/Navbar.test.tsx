import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Navbar } from '@/components/layout/Navbar';
import { LanguageProvider } from '@/context/LanguageProvider';
import { ThemeProvider } from '@/context/ThemeProvider';

const renderNavbar = () =>
  render(
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
      </LanguageProvider>
    </ThemeProvider>,
  );

describe('Navbar', () => {
  it('opens and closes the navigation menu from the hamburger', async () => {
    const user = userEvent.setup();
    renderNavbar();

    const hamburger = screen.getByRole('button', { name: 'Open navigation menu' });
    expect(hamburger).toHaveAttribute('aria-expanded', 'false');

    await user.click(hamburger);

    const closeButton = screen.getByRole('button', { name: 'Close navigation menu' });
    expect(closeButton).toHaveAttribute('aria-expanded', 'true');

    await user.click(closeButton);
    expect(hamburger).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes the menu and returns focus to the hamburger when switching language', async () => {
    const user = userEvent.setup();
    renderNavbar();

    const hamburger = screen.getByRole('button', { name: 'Open navigation menu' });
    await user.click(hamburger);
    await user.click(screen.getByRole('button', { name: 'ES' }));

    expect(hamburger).toHaveAttribute('aria-expanded', 'false');
    expect(hamburger).toHaveFocus();
    expect(localStorage.getItem('lang')).toBe('es');
  });

  it('closes the menu, switches the theme and returns focus to the hamburger', async () => {
    const user = userEvent.setup();
    renderNavbar();

    await user.click(screen.getByRole('button', { name: 'Open navigation menu' }));
    await user.click(screen.getByRole('button', { name: 'Switch to light theme' }));

    const hamburger = screen.getByRole('button', { name: 'Open navigation menu' });
    expect(hamburger).toHaveAttribute('aria-expanded', 'false');
    expect(hamburger).toHaveFocus();
    expect(document.documentElement).toHaveAttribute('data-theme', 'light');
  });

  it('closes the menu with Escape and returns focus to the hamburger', async () => {
    const user = userEvent.setup();
    renderNavbar();

    await user.click(screen.getByRole('button', { name: 'Open navigation menu' }));
    await user.keyboard('{Escape}');

    const hamburger = screen.getByRole('button', { name: 'Open navigation menu' });
    expect(hamburger).toHaveAttribute('aria-expanded', 'false');
    expect(hamburger).toHaveFocus();
  });

  it('navigates to an anchor link and closes the menu', async () => {
    const user = userEvent.setup();
    renderNavbar();

    await user.click(screen.getByRole('button', { name: 'Open navigation menu' }));
    await user.click(screen.getByRole('link', { name: 'About' }));

    expect(screen.getByRole('button', { name: 'Open navigation menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  });
});
