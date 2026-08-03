# Typography

Three font families reinforce the Editorial Engineering identity. Consume via the `--font-*` tokens (see `design-tokens.md`).

## Roles

| Token            | Font           | Used for                                    |
| ---------------- | -------------- | ------------------------------------------- |
| `--font-display` | Bellota Text   | Hero name, section titles, brand statements |
| `--font-sans`    | Inter          | Body text, navigation, interface            |
| `--font-mono`    | JetBrains Mono | Technical content, tags, metadata           |

## Principles

- Readability first; avoid excessively small text.
- Keep the number of font families limited to these three.
- Use typography for hierarchy with consistent heading-to-content spacing.
- Headings use `clamp()` fluid sizes so they scale responsively.
