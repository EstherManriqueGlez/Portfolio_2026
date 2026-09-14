import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { ProjectCard } from '@/components/ui/ProjectCard/ProjectCard';
import { LanguageProvider } from '@/context/LanguageProvider';
import type { Project } from '@/types/content';

const project: Project = {
  title: 'Teslo Shop',
  tech: ['React 19', 'TypeScript'],
  desc: 'E-commerce build.',
  challenge: 'Scale the catalog.',
  solution: 'Typed data layer.',
  result: 'Faster pages.',
  image: 'https://example.com/teslo.webp',
  link: 'https://example.com/teslo-live',
  github: 'https://github.com/example/teslo',
  variants: [
    {
      id: 'react',
      label: 'React',
      tech: ['React 19'],
      link: 'https://example.com/react-live',
      github: 'https://github.com/example/teslo-react',
      desc: 'React version',
      challenge: 'React challenge',
      solution: 'React solution',
      result: 'React result',
    },
    {
      id: 'angular',
      label: 'Angular',
      tech: ['Angular 19'],
      link: 'https://example.com/angular-live',
      github: 'https://github.com/example/teslo-angular',
      desc: 'Angular version',
      challenge: 'Angular challenge',
      solution: 'Angular solution',
      result: 'Angular result',
    },
  ],
};

const renderCard = () =>
  render(
    <LanguageProvider>
      <ProjectCard project={project} />
    </LanguageProvider>,
  );

const getLinks = () => screen.getAllByRole('link');

describe('ProjectCard', () => {
  it('renders the project title, initial variant content and meta', () => {
    renderCard();

    expect(screen.getByRole('heading', { name: 'Teslo Shop' })).toBeInTheDocument();
    expect(screen.getByText('React version')).toBeInTheDocument();
    expect(screen.getByText(/React challenge/)).toBeInTheDocument();
    expect(screen.getByText(/React solution/)).toBeInTheDocument();
    expect(screen.getByText(/React result/)).toBeInTheDocument();
    expect(screen.getByText('React 19')).toBeInTheDocument();
  });

  it('switches the active variant and updates content, tech and links', async () => {
    const user = userEvent.setup();
    renderCard();

    await user.click(screen.getByRole('button', { name: 'Angular' }));

    expect(await screen.findByText('Angular version')).toBeInTheDocument();
    expect(screen.getByText('Angular 19')).toBeInTheDocument();
    expect(screen.getByText(/Angular challenge/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Angular' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: 'React' })).toHaveAttribute('aria-pressed', 'false');

    const links = getLinks();
    expect(links[0]).toHaveAttribute('href', 'https://github.com/example/teslo-angular');
    expect(links[1]).toHaveAttribute('href', 'https://example.com/angular-live');
  });

  it('renders GitHub and live links that open in a new tab safely', () => {
    renderCard();

    const links = getLinks();
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute('href', 'https://github.com/example/teslo-react');
    expect(links[1]).toHaveAttribute('href', 'https://example.com/react-live');

    for (const link of links) {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link.getAttribute('rel')).toContain('noopener');
      expect(link.getAttribute('rel')).toContain('noreferrer');
    }
  });

  it('labels the external links with accessible names per variant', () => {
    renderCard();

    const links = getLinks();
    expect(within(links[0]).getByText('GitHub')).toBeInTheDocument();
    expect(within(links[1]).getByText('Live Demo')).toBeInTheDocument();
    expect(links[0]).toHaveAccessibleName('View React source code on GitHub');
    expect(links[1]).toHaveAccessibleName('View React live project');
  });
});
