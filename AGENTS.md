# UI scalability rule

This is a strict project requirement: every interface must be scalable and responsive across mobile, tablet, and desktop viewports.

For every new or modified UI component:

- Support a minimum viewport width of 320px without horizontal page scrolling.
- Use fluid or responsive sizing (`min()`, `max()`, `clamp()`, flexible grid/flex layouts) instead of fixed viewport-dependent widths.
- Allow navigation, action groups, and metadata to wrap, stack, or scroll intentionally when space is limited.
- Keep interactive controls touch-friendly and preserve visible keyboard focus.
- Constrain images, figures, tables, and long text so they cannot overflow their containers.
- Treat breakpoints as layout changes, not device-specific assumptions.
- Verify the component at mobile, tablet, and desktop widths before completion.

Do not ship a UI change that only works at one screen size.
