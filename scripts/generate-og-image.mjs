import { readFile } from 'node:fs/promises';
import { Buffer } from 'node:buffer';
import path from 'node:path';
import sharp from 'sharp';

// Bellota Text (SIL Open Font License) vendored from Google Fonts (subset: latin).
const FONT_400 = path.resolve('scripts', 'og', 'bellota-400.woff2');
const FONT_700 = path.resolve('scripts', 'og', 'bellota-700.woff2');
const LOGO = path.resolve('src', 'assets', 'images', 'logo_neg.png');

const toBase64 = (p) => readFile(p).then((b) => b.toString('base64'));

const buildSvg = (font400, font700, logoB64) => `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <style>
      @font-face{font-family:'Bellota Text';font-style:normal;font-weight:400;src:url(data:font/woff2;base64,${font400}) format('woff2');}
      @font-face{font-family:'Bellota Text';font-style:normal;font-weight:700;src:url(data:font/woff2;base64,${font700}) format('woff2');}
      .t{font-family:'Bellota Text',Georgia,serif;}
    </style>
    <radialGradient id="glow" cx="0.5" cy="0.35" r="0.75">
      <stop offset="0" stop-color="#9d4edd" stop-opacity="0.32"/>
      <stop offset="0.6" stop-color="#030014" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#030014" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="textGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#ff007f"/>
      <stop offset="0.5" stop-color="#9d4edd"/>
      <stop offset="1" stop-color="#00f5ff"/>
    </linearGradient>
    <linearGradient id="wave" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#9d4edd" stop-opacity="0.5"/>
      <stop offset="1" stop-color="#00f5ff" stop-opacity="0.12"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="#030014"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <path d="M0 430 C 260 360, 520 520, 1200 430 L 1200 630 L 0 630 Z" fill="url(#wave)" opacity="0.7"/>
  <path d="M0 500 C 300 430, 640 560, 1200 470 L 1200 630 L 0 630 Z" fill="#00f5ff" opacity="0.05"/>

  <image href="data:image/png;base64,${logoB64}" x="600" y="120" width="430" height="174" text-anchor="middle" preserveAspectRatio="xMidYMid meet" style="overflow:visible;transform:translateX(-215px)"/>

  <text class="t" x="600" y="390" text-anchor="middle" fill="#f8fafc" font-size="46" font-weight="700">
    Building
    <tspan fill="url(#textGrad)"> intelligent interfaces</tspan>
    with purpose.
  </text>

  <text x="600" y="470" text-anchor="middle" fill="#94a3b8" font-family="inter, 'Helvetica Neue', Arial, sans-serif" font-size="21" font-weight="600" letter-spacing="6">
    FRONTEND SOFTWARE ENGINEER
  </text>

  <text x="600" y="540" text-anchor="middle" fill="#5c5770" font-family="inter, 'Helvetica Neue', Arial, sans-serif" font-size="16" letter-spacing="2">
    esthermanriqueglez.github.io/Portfolio_2026
  </text>
</svg>
`;

const [font400, font700, logoB64] = await Promise.all([toBase64(FONT_400), toBase64(FONT_700), toBase64(LOGO)]);

const svg = buildSvg(font400, font700, logoB64);
const output = path.resolve('public', 'og-image.png');
const image = await sharp(Buffer.from(svg)).png().toFile(output);
console.log(`Generated ${path.basename(output)} ${image.width}x${image.height} (${image.size} bytes)`);