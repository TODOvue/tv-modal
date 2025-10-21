# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-10-20

### Added
- Initial release of TvModal component
- Multiple modal variants: success, error, warning, and info icons
- Configurable modal with `configModal` prop accepting title, description, and button texts
- Theme support with automatic detection of dark-mode and light-mode
- Manual theme override via `theme` prop
- Built-in animations: scale-up on open, scale-down on close, and rotate shake on overlay click
- Vue Teleport integration for proper modal rendering at body level
- Keyboard navigation support (ESC key to close/cancel)
- Focus management: automatically focuses modal on open and restores focus on close
- Custom events: `accepted` and `canceled` for user actions
- Accessibility features: ARIA attributes (role="dialog", aria-modal, aria-labelledby, aria-describedby)
- Integration with @todovue/tv-button for action buttons
- SSR compatibility (Nuxt 3 ready)
- Composable `useModal` for modal state and behavior management
- Dynamic theme detection with MutationObserver for real-time updates
- Customizable confirm and cancel buttons with conditional rendering
- Flexible modal configuration with validation

[1.0.0]: https://github.com/TODOvue/tv-modal/pull/1/files
