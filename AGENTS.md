# HÀ NỘI JOURNAL — Agent Guide

This file is the shared operating guide for all agents working in this repository. Read it before making changes. It defines the current architecture, project conventions, and completion requirements.

## Project purpose

HÀ NỘI JOURNAL is a multi-page editorial website about the historical evolution of Hanoi's urban planning and infrastructure, from the imperial era to the present.

The product should feel like a professional digital journal: architectural, historical, modern, restrained, and highly readable. It is not a corporate landing page, SaaS product, blog template, or playful experience.

The visual direction is informed by editorial publications such as Bloomberg, Reuters Graphics, Architectural Digest, National Geographic, and Apple News:

- Deep greens on a white or warm-paper background.
- Elegant serif headings and modern sans-serif body copy.
- Spacious layouts, clear hierarchy, sharp edges, and subtle rules.
- No neon, glassmorphism, bright gradients, oversized rounded corners, excessive shadows, or decorative animation.

Do not invent final article content, historical claims, references, or image assets unless the task explicitly asks for them.

## Technology and commands

The project uses React 19, TypeScript, Vite, Tailwind CSS v4, React Router, ESLint, Prettier, and Git. Keep the dependency footprint small; do not add UI frameworks or utility libraries without a clear need and explicit task scope.

```text
npm run dev           Start the Vite development server.
npm run build         Type-check and create a production build.
npm run lint          Run ESLint.
npm run format        Format files with Prettier.
npm run format:check  Check formatting without editing files.
```

Run `npm run lint` after code changes. Run `npm run build` when changes affect TypeScript, routes, app structure, styling tooling, or production behavior. Run `npm run format` or `npm run format:check` before handoff as appropriate.

## Repository map

```text
src/
  App.tsx                         Site shell: header, routed main content, footer
  main.tsx                        React entry point and BrowserRouter provider
  index.css                       Tailwind import, global tokens, resets, shared layout CSS
  router/AppRoutes.tsx            All route declarations
  pages/                          Route-level views; keep them composition-focused
    Home/
    Episode/
    About/
    References/
    NotFoundPage.tsx
  components/
    layout/                       PageContainer, SiteFooter, app-level layout primitives
    navigation/                   SiteHeader and navigation-only UI
    journal/                      Reusable article primitives and editorial structure
    episode/                      Episode-specific reusable controls
    common/                       Cross-cutting generic UI when it is genuinely needed
    hero/                         Future reusable hero components
  data/episodes/episodes.ts      Episode registry and lightweight placeholder data
  types/episode.ts               Shared episode data contracts
  hooks/                          Reusable React hooks only
  utils/                          Pure framework-independent helpers only
  assets/
    images/                       Editorial images
    maps/                         Map assets
    icons/                        Local icon assets
```

Respect these boundaries. Do not place page-specific presentation logic in generic components, duplicate data across pages, or put reusable types in component files.

## Application structure and routing

`main.tsx` owns the `BrowserRouter`; do not add nested router providers. `App.tsx` owns global site chrome. Route pages render inside its `<main>` element.

Supported routes are:

| Route                               | Page               |
| ----------------------------------- | ------------------ |
| `/`                                 | Home               |
| `/episodes/1` through `/episodes/4` | Episode pages      |
| `/about`                            | Project context    |
| `/references`                       | General references |
| `*`                                 | Not found          |

Episode URLs are handled by the single parameterized `/episodes/:episodeId` route. The `episodes` array is the source of truth for episode order, navigation, and labels. Add a new episode there and retain its stable string `id`; do not hard-code duplicate episode navigation lists elsewhere.

## Episode architecture

Episodes are independent editorial pages but share a common layout. Reuse and extend these primitives instead of starting each episode from scratch:

- `ArticleLayout` — article shell and optional sidebar slot.
- `ArticleHeader` — episode label, title, and optional summary.
- `SidebarTableOfContents` — section-link navigation based on `EpisodeSection[]`.
- `Section` — semantic article section with a stable anchor id.
- `Figure` and `Caption` — image/figure framing and caption treatment.
- `EpisodeNavigation` — previous/next episode links.

When expanding the content model, update `src/types/episode.ts` first, then `src/data/episodes/episodes.ts`, then the rendering components. Section IDs must be unique within an episode, URL-safe, and stable because table-of-contents links depend on them.

## Component and TypeScript conventions

- Use functional components and named exports for components.
- Use strict, explicit interfaces for component props and shared data. Prefer `type` imports for type-only references.
- Keep page files thin: compose components and source data there rather than building a second component system in a route file.
- Use semantic HTML (`header`, `nav`, `main`, `article`, `section`, `aside`, `figure`, `figcaption`, `footer`) before introducing ARIA. Add ARIA only where semantics do not communicate the needed behavior.
- Use `Link` or `NavLink` for internal navigation. Do not use anchor elements for client-side routes.
- Avoid inline styles. Use existing global classes, Tailwind utilities, or a small scoped CSS addition when it has a clear reusable purpose.
- Do not suppress TypeScript or ESLint errors with broad casts, `any`, or disable comments unless the task documents a compelling reason.
- Keep imports relative; no path alias is currently configured.

## Styling system

`src/index.css` is the design foundation. Reuse its CSS custom properties and Tailwind theme tokens; do not scatter new hexadecimal colors, one-off font stacks, or arbitrary page widths through components.

Core tokens currently include:

| Purpose                 | Token                 |
| ----------------------- | --------------------- |
| Main text               | `--color-ink`         |
| Primary deep green      | `--color-forest`      |
| Secondary / muted green | `--color-moss`        |
| Background              | `--color-paper`       |
| Quiet background        | `--color-muted-paper` |
| Dividers                | `--color-rule`        |
| Editorial heading font  | `--font-serif`        |
| Body font               | `--font-sans`         |
| Page gutter             | `--space-page`        |
| Site max width          | `--content-width`     |
| Article column width    | `--article-width`     |

Use the existing typography scale (`--text-xs` through `--text-2xl`) and fluid values such as `--space-page` and `--text-2xl` before adding new tokens. If a new token is needed by more than one component, define it in `index.css` and document its purpose in the relevant code. Keep shadow use minimal and borders subtle.

## Strict UI scalability rule

Every interface must be scalable and responsive across mobile, tablet, and desktop viewports. This is a non-negotiable completion criterion.

For every new or modified UI component:

- Support a minimum 320px viewport with no horizontal page scrolling.
- Use fluid and content-aware sizing (`min()`, `max()`, `clamp()`, responsive Tailwind utilities, flexible grid/flex layouts) rather than fixed viewport-dependent widths.
- Let navigation, metadata, action groups, and cards wrap, stack, collapse, or scroll intentionally when horizontal space is insufficient.
- Set `min-width: 0` on flex or grid children that contain potentially long content where needed.
- Constrain images, figures, tables, embeds, code, and long text to their containers. Preserve aspect ratios and avoid fixed image heights unless the crop is intentional.
- Keep controls comfortably touchable, keyboard accessible, and visibly focusable.
- Treat breakpoints as layout changes driven by available space, not device labels or assumptions.
- Preserve readable text size and line length; do not solve mobile layout by shrinking important content excessively.
- Verify each affected screen at approximately 320px, 768px, and 1280px widths before handoff.

Do not ship a UI change that only works at one screen size.

## Accessibility expectations

- Maintain a logical heading hierarchy, with one page-level `h1`.
- Give meaningful images useful `alt` text. Decorative images should use empty `alt` text.
- Ensure interactive elements have discernible labels and can be used with keyboard navigation.
- Never remove focus indicators without a clear accessible replacement.
- Preserve adequate color contrast and do not communicate meaning by color alone.
- Make in-page navigation targets meaningful and keyboard reachable.

## Change workflow

1. Inspect the affected route, component, data source, and shared styles before editing.
2. Reuse an existing primitive or token when it fits; extend the system only when a reusable gap exists.
3. Keep the change scoped to the request. Do not combine unrelated refactors, dependency upgrades, or content invention.
4. Verify responsive behavior and accessibility for the affected UI.
5. Run the required checks and report any known limitations clearly.

## Git and file safety

- This repository may contain user work. Preserve unrelated modifications.
- Do not use destructive Git commands (`reset --hard`, forced checkout, or cleaning untracked files) unless explicitly asked.
- Do not delete or replace editorial assets, data, or copy outside the requested scope.
- Prefer small, focused commits when asked to commit. Do not commit generated output such as `dist/`.

## Definition of done

A change is complete only when it:

- Follows the project architecture and visual direction.
- Keeps TypeScript strictness and ESLint compliance intact.
- Uses the shared data, components, and design tokens appropriately.
- Meets the strict UI scalability and accessibility requirements above.
- Passes the relevant verification commands, normally `npm run lint` and, when applicable, `npm run build`.
