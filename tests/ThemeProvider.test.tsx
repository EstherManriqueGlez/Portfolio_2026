import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { ThemeProvider } from '@/context/ThemeProvider';
import { useTheme } from '@/context/useTheme';

const ThemeProbe = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button type="button" onClick={toggleTheme}>
        toggle
      </button>
    </div>
  );
};

const renderThemeProbe = () =>
  render(
    <ThemeProvider>
      <ThemeProbe />
    </ThemeProvider>,
  );

afterEach(() => {
  vi.restoreAllMocks();
});

describe('ThemeProvider', () => {
  it('defaults to the dark theme and applies it to <html> and localStorage', () => {
    renderThemeProbe();

    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
    expect(localStorage.getItem('theme')).toBe('dark');
  });

  it('toggles the theme and persists the change', async () => {
    const user = userEvent.setup();
    renderThemeProbe();

    await user.click(screen.getByRole('button', { name: 'toggle' }));

    expect(screen.getByTestId('theme')).toHaveTextContent('light');
    expect(document.documentElement).toHaveAttribute('data-theme', 'light');
    expect(localStorage.getItem('theme')).toBe('light');
  });

  it('reads a previously saved theme from localStorage', () => {
    localStorage.setItem('theme', 'light');

    renderThemeProbe();

    expect(screen.getByTestId('theme')).toHaveTextContent('light');
    expect(document.documentElement).toHaveAttribute('data-theme', 'light');
  });

  it('falls back to dark when the saved theme is invalid', () => {
    localStorage.setItem('theme', 'sepia');

    renderThemeProbe();

    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
  });

  it('falls back to dark when localStorage cannot be read', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new DOMException('Storage blocked', 'SecurityError');
    });

    renderThemeProbe();

    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
  });

  it('continues updating the theme when localStorage cannot be written', async () => {
    const user = userEvent.setup();
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new DOMException('Storage blocked', 'SecurityError');
    });

    renderThemeProbe();
    await user.click(screen.getByRole('button', { name: 'toggle' }));

    expect(screen.getByTestId('theme')).toHaveTextContent('light');
    expect(document.documentElement).toHaveAttribute('data-theme', 'light');
  });
});
