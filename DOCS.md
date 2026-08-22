# Phốcus Project Documentation

Phốcus is a client-rendered editorial website about the historical evolution of Hanoi's urban planning and infrastructure. It is intended to read as a modern journal: architectural, historical, restrained, and highly readable.

## Product direction

The visual direction is professional and editorial, with deep greens on a white or warm-paper background, elegant serif headings, modern sans-serif body copy, spacious layouts, subtle rules, and minimal decoration.

Avoid corporate-SaaS styling, neon, glassmorphism, bright gradients, oversized rounded corners, excessive shadows, and unnecessary animation.

## Technology and commands

The application uses React 19, TypeScript, Vite, Tailwind CSS v4, React Router, ESLint, Prettier, and Git.

```text
npm run dev           Start the local development server.
npm run build         Type-check and create a production build.
npm run lint          Run ESLint.
npm run format        Format files with Prettier.
npm run format:check  Check formatting without modifying files.
npm run preview       Serve the production build locally.
```

## Documentation structure

`DOCS.md` contains project information shared by human developers and agents. `AGENTS.md` contains only agent-specific operating instructions and links back to this document for all shared guidance.

## Architecture

```text
index.html
  -> src/main.tsx
       -> BrowserRouter
            -> App
                 -> SiteHeader
                 -> AppRoutes
                 -> SiteFooter

/episodes/:episodeId
  -> EpisodePage
       -> episode metadata + section Markdown
       -> ArticleLayout / ArticleHeader / ArticleBody
       -> SidebarTableOfContents / EpisodeNavigation
```

`main.tsx` is the only React entry point and owns the `BrowserRouter`. `App.tsx` owns persistent site chrome. Route pages render inside `App`'s `<main>` element.

| Route                  | Page                  |
| ---------------------- | --------------------- |
| `/`                    | Home                  |
| `/episodes/:episodeId` | Reusable chapter page |
| `/about`               | Project context       |
| `/references`          | General references    |
| `*`                    | Not found             |

The URL and internal data model retain the historical term “episode,” while visible navigation calls them “chapters.” Do not introduce a third term. A future terminology migration should be coordinated across routes, types, data, components, and documentation.

## Repository map

```text
src/
  App.tsx                         Site shell
  main.tsx                        React entry point and BrowserRouter provider
  index.css                       Tokens, resets, shared layout, responsive rules
  router/AppRoutes.tsx            Route declarations
  pages/                          Route-level composition
  components/
    layout/                       Shared page and site-layout primitives
    navigation/                   Header and primary navigation
    journal/                      Reusable editorial/article components
    episode/                      Chapter-specific navigation and table of contents
  data/episodes/
    episodes.ts                   Chapter metadata and Markdown imports
    chapter-*/                    Editorial Markdown sources
  types/episode.ts                Shared chapter data contracts
  utils/articleMarkdown.ts        Markdown-to-editorial-block parser
  assets/                         Images, maps, and icons
```

## Chapter data and editorial content

`src/data/episodes/episodes.ts` is the source of truth for chapter order, titles, descriptions, section IDs, and section numbers. It imports each section's Markdown source and converts it through `parseArticleMarkdown`.

Editorial paragraphs are stored as Markdown beside their chapter data, for example:

```text
src/data/episodes/
  episodes.ts
  chapter-1/
    introduction.md
```

Vite imports these files with `?raw` at build time. `src/utils/articleMarkdown.ts` converts the supported Markdown into the existing `ArticleTextBlock[]` model. `ArticleBody` receives that typed model exactly as it did before the Markdown migration, so page rendering remains independent of the content-file format.

Each chapter begins with Subchapter `0`. Adding a subsequent section automatically creates the existing image-insert placeholder between adjacent sections.

### Edit paragraphs manually

1. Open the Markdown file for the relevant chapter and subchapter. Chapter 1, Subchapter 0 is `src/data/episodes/chapter-1/introduction.md`.
2. Keep each paragraph as one Markdown block, with a blank line between paragraphs.
3. A quote begins with `>` on every quote line.
4. A quote citation is the final quote line and begins with `> — `.
5. Use `*italic text*` or `_italic text_` for inline emphasis.
6. Do not add headings, lists, links, HTML, nested emphasis, or other Markdown syntax until `src/utils/articleMarkdown.ts` supports it.
7. Preserve user-supplied long-form copy verbatim unless an explicit editorial edit is requested. Do not silently alter spelling, capitalization, punctuation, or historical wording.

## Components and state

The main reusable editorial components are `ArticleLayout`, `ArticleHeader`, `ArticleBody`, `Section`, `Figure`, `Caption`, `ImageInsertPlaceholder`, `SidebarTableOfContents`, and `EpisodeNavigation`. `PageContainer`, `PageIntro`, `SiteHeader`, and `SiteFooter` provide reusable page structure.

State is intentionally local:

- `SiteHeader` owns `isChaptersOpen`, the only interactive UI state. The menu opens on hover, focus, or click/tap; it closes shortly after pointer exit, immediately after a chapter selection or Escape, and remains usable with keyboard navigation.
- `EpisodePage` derives the selected chapter from React Router's `useParams` and the `episodes` array.
- There is no backend, database, global state store, API client, persistence layer, or server-side rendering.

Keep new state close to the interaction that owns it. Introduce shared state only when distant components truly need coordination.

## Styling, accessibility, and responsive behavior

`src/index.css` defines the visual foundation. Reuse its tokens and shared classes before adding component-specific values.

- Use semantic HTML before adding ARIA.
- Maintain one page-level `h1` and a logical heading hierarchy.
- Images need useful alternative text unless decorative; controls need accessible labels and visible focus.
- Use `Link` or `NavLink` for internal routes.
- Use fluid sizing, existing spacing tokens, and flexible layouts instead of fixed viewport-dependent dimensions.
- Every UI change must work from a 320px viewport through desktop widths, with no horizontal page scroll. Fix the overflowing element rather than relying solely on hidden overflow.
- Verify affected UI at approximately 320px, 768px, and 1280px. Controls must remain touch-friendly and keyboard accessible; media, tables, and long text must remain contained.

## Development conventions

- Use functional React components, strict TypeScript, named component exports, and type-only imports where applicable.
- Keep page files composition-focused; put shared presentation in reusable components and pure helpers in `utils/`.
- Keep imports relative; no path alias is configured.
- Avoid inline styles. Use existing global classes, Tailwind utilities, or a small reusable CSS rule.
- Do not use broad casts, `any`, or lint/TypeScript suppression without a documented reason.
- Do not add frameworks or utility libraries without a clear, scoped need.

For code, route, style, or structure changes, run `npm run lint` and, when applicable, `npm run build`.
