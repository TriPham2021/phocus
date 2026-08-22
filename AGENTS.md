# Phốcus Agent Instructions

Read [DOCS.md](./DOCS.md) before making changes. It is the source of truth for project architecture, content storage, styling, accessibility, responsive behavior, shared development conventions, and verification requirements.

## Agent-specific operating rules

- Inspect the affected route, component, data source, and shared styles before editing.
- Keep work scoped to the user's request. Do not bundle unrelated refactors, dependency upgrades, or content changes into a task.
- Do not invent article copy, historical claims, citations, or image assets unless explicitly asked. Follow the verbatim editorial-copy rule in `DOCS.md`.
- Preserve unrelated user changes. The worktree may be dirty.
- Respect component boundaries described in `DOCS.md`; do not put page-specific behavior in generic components or duplicate data across pages.
- Prefer existing primitives and tokens. Extend the system only when a reusable gap exists.
- Do not use destructive Git commands, forceful resets, or broad cleanup operations unless the user explicitly requests them.
- Do not delete or replace editorial assets, data, or copy outside the requested scope.
- When documentation changes are requested, keep shared information in `DOCS.md`; keep this file limited to agent-specific workflow instructions.

## Handoff requirements

- Run the checks required by `DOCS.md` for the type of change made.
- Report validation results and any known limitations accurately.
- Do not claim a viewport, accessibility, or interaction check was performed unless it was actually verified.
