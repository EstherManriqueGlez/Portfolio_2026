import '@testing-library/jest-dom/vitest';

import { cleanup } from '@testing-library/react';
import { MotionGlobalConfig } from 'framer-motion';
import { afterEach, beforeEach, vi } from 'vitest';

MotionGlobalConfig.skipAnimations = true;

const mockIntersectionObserver = vi.fn(function () {
  return {
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
    takeRecords: vi.fn(),
  };
});

const mockResizeObserver = vi.fn(function () {
  return {
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  };
});

const mockMatchMedia = vi.fn(function (query: string) {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  };
});

const mockMutationObserver = vi.fn(function () {
  return {
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
    takeRecords: vi.fn(),
  };
});

Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  value: mockIntersectionObserver,
});

Object.defineProperty(globalThis, 'ResizeObserver', {
  writable: true,
  value: mockResizeObserver,
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: mockMatchMedia,
});

Object.defineProperty(globalThis, 'MutationObserver', {
  writable: true,
  value: mockMutationObserver,
});

beforeEach(() => {
  document.documentElement.removeAttribute('data-theme');
  document.documentElement.lang = '';
  localStorage.clear();
  vi.clearAllMocks();
});

afterEach(() => {
  cleanup();
});
