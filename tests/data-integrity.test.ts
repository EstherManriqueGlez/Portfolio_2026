import { describe, expect, it } from 'vitest';

import type { Project, ProjectVariant } from '@/constants/data';
import { en } from '@/i18n/en';

const VALID_HTTP = /^https?:\/\//i;
const VALID_TARGET = /^(https?:\/\/|mailto:|tel:)/i;

const projects: Project[] = en.projects.items;

const collectVariants = (project: Project): ProjectVariant[] => project.variants ?? [];

describe('portfolio data integrity', () => {
  it('has at least one project with complete content', () => {
    expect(projects.length).toBeGreaterThan(0);

    for (const project of projects) {
      expect(project.title.trim()).not.toBe('');
      expect(project.tech.length).toBeGreaterThan(0);
      expect(project.desc.trim()).not.toBe('');
      expect(project.challenge.trim()).not.toBe('');
      expect(project.solution.trim()).not.toBe('');
      expect(project.result.trim()).not.toBe('');
    }
  });

  it('points GitHub and live links to valid HTTP(S) URLs', () => {
    for (const project of projects) {
      expect(project.link, `${project.title} live link`).toMatch(VALID_HTTP);
      expect(project.github, `${project.title} source link`).toMatch(VALID_HTTP);
    }
  });

  it('keeps variant ids unique per project and variants complete', () => {
    for (const project of projects) {
      const variants = collectVariants(project);
      const ids = variants.map((variant) => variant.id);

      expect(new Set(ids).size).toBe(ids.length);

      for (const variant of variants) {
        expect(variant.label.trim()).not.toBe('');
        expect(variant.tech.length).toBeGreaterThan(0);
        expect(variant.desc.trim()).not.toBe('');
        expect(variant.link, `${project.title} / ${variant.id} live link`).toMatch(VALID_HTTP);
        expect(variant.github, `${project.title} / ${variant.id} source link`).toMatch(VALID_HTTP);
      }
    }
  });

  it('uses in-page anchors for all navigation links', () => {
    for (const link of en.navLinks) {
      expect(link.name.trim()).not.toBe('');
      expect(link.href).toMatch(/^#/);
    }
  });

  it('exposes contacts with valid target protocols', () => {
    for (const contact of en.contacts) {
      expect(contact.href ?? '', `${contact.label} href`).toMatch(VALID_TARGET);
    }
  });
});
