<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Code style: write for the human reader

- Optimize for a human who has never seen this file and has no AI to explain it.
- Don't compress for the sake of compression: no chained ternaries, nested comprehensions, clever one-liners, or long method chains unless it measurably improves performance. Prefer named intermediate variables and early returns over expressions that need parsing twice.
- Don't inflate either: no defensive checks, redundant guards, or try/catch around code that cannot fail; don't re-validate values already validated upstream.
- Comments default to none. Add one only for a non-obvious business rule, an external-bug workaround, a deliberate deviation, or a tricky invariant — explain why, not what, in one or two lines.
- Naming is the floor, not the goal. Keep functions doing one thing and nesting shallow.
- Test: could a mid-level engineer read this cold and confidently change it? If not, rewrite it plainly.
