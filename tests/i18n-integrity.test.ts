import { describe, expect, it } from 'vitest';

import { en } from '@/i18n/en';
import { es } from '@/i18n/es';

const shapeMismatches = (a: unknown, b: unknown, path: string): string[] => {
  const issues: string[] = [];
  const isArray = (value: unknown): value is unknown[] => Array.isArray(value);
  const isObject = (value: unknown): value is Record<string, unknown> =>
    typeof value === 'object' && value !== null && !Array.isArray(value);

  if (isArray(a) && isArray(b)) {
    if (a.length !== b.length) {
      issues.push(`${path}: array length ${a.length} vs ${b.length}`);
    }
    const length = Math.min(a.length, b.length);
    for (let i = 0; i < length; i += 1) {
      issues.push(...shapeMismatches(a[i], b[i], `${path}[${i}]`));
    }
    return issues;
  }

  if (isObject(a) && isObject(b)) {
    for (const key of Object.keys(a)) {
      if (!(key in b)) {
        issues.push(`${path}.${key}: present only in en`);
        continue;
      }
      issues.push(...shapeMismatches(a[key], b[key], `${path}.${key}`));
    }
    for (const key of Object.keys(b)) {
      if (!(key in a)) {
        issues.push(`${path}.${key}: present only in es`);
      }
    }
    return issues;
  }

  if ((isArray(a) && !isArray(b)) || (isObject(a) && !isObject(b))) {
    issues.push(`${path}: type mismatch`);
  }

  return issues;
};

describe('i18n integrity', () => {
  it('exposes identical content structures for en and es', () => {
    expect(shapeMismatches(en, es, 'content')).toEqual([]);
  });

  it('keeps skill cards, ids and order in sync between languages', () => {
    expect(es.skills.cards.map((card) => card.id)).toEqual(en.skills.cards.map((card) => card.id));
    expect(Object.keys(es.skills.categoryLabels).sort()).toEqual(
      Object.keys(en.skills.categoryLabels).sort(),
    );
  });

  it('keeps navigation anchor targets in sync between languages', () => {
    expect(es.navLinks).toHaveLength(en.navLinks.length);
    expect(es.navLinks.map((link) => link.href)).toEqual(en.navLinks.map((link) => link.href));
  });

  it('keeps projects in the same order and with the same source/target links', () => {
    expect(es.projects.items).toHaveLength(en.projects.items.length);
    expect(es.projects.items.map((item) => item.link)).toEqual(
      en.projects.items.map((item) => item.link),
    );
    expect(es.projects.items.map((item) => item.github)).toEqual(
      en.projects.items.map((item) => item.github),
    );
  });

  it('keeps contact list length and targets in sync between languages', () => {
    expect(es.contacts).toHaveLength(en.contacts.length);
    expect(es.contacts.map((contact) => contact.href)).toEqual(
      en.contacts.map((contact) => contact.href),
    );
  });
});
