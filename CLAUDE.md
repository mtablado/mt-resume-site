@AGENTS.md

## Claude Code notes

- Content rules for `content/` are in `content/CLAUDE.md` (it imports `content/AGENTS.md`). They load automatically when you work in that folder.
- After visual changes, check `/cv` with `npm run dev`. If the change touches the CV or the PDF export, generate the PDF and look at it. A clean build does not prove the PDF looks right.
- Commit messages: imperative, one change per commit. Example: "Add Codemotion 2024 panel".
