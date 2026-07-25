# Changelog

All notable changes to **rm-ng-range-slider** will be documented in this file.

This project follows [Semantic Versioning](https://semver.org/).

---

## [5.0.0] – 2026-07-26
### Angular Upgrade Release

### Added
- Official support for **Angular 22**.
- Updated Angular CLI to version 22 for enhanced build performance.
- Updated ng-packagr to version 22 for improved library packaging.

### Changed
- Upgraded all Angular dependencies from v21 to v22 (`@angular/core`, `@angular/common`, `@angular/forms`, `@angular/platform-browser`, etc.).
- Upgraded TypeScript to `~6.0.3` for compatibility with Angular 22.
- Updated zone.js to `~0.15.0` for optimal performance with Angular 22.

### Fixed
- Build compatibility with Angular 22 strict mode requirements.

---

## [4.0.0] – 2025-XX-XX
### Major Update
**Angular upgrade, performance improvements, and bug fixes**

### Added
- Official support for **Angular 21**.
- Improved compatibility with **Angular Signals**.
- Enhanced TypeScript typings for better developer experience.

### Changed
- Internal refactoring to improve runtime performance.
- Optimized change detection to reduce unnecessary re-renders.
- Improved ControlValueAccessor implementation for reactive forms.

### Fixed
- Edge cases when updating `min` and `max` values dynamically.
- Minor UI glitches during fast slider movement.
- Stability issues reported in large-scale applications.

---

## [3.0.0] – 2025-XX-XX
### Performance & Accessibility Release

### Added
- Improved keyboard navigation support.
- Enhanced ARIA attributes for better accessibility (A11y).

### Changed
- Optimized slider thumb rendering for smoother interactions.
- Improved tooltip positioning and animation handling.
- Updated documentation with clearer usage examples.

### Fixed
- Tooltip flickering during rapid thumb movement.
- Styling inconsistencies on smaller screen sizes.

---

## [2.0.0] – 2025-XX-XX
### Performance-Focused Release

### Added
- Extended customization options for slider colors and tooltips.
- Improved animation smoothness during range updates.

### Changed
- Major performance optimization: **only tooltip updates on value change**, slider thumbs remain stable.
- Refactored internal logic for better maintainability.

### Fixed
- Minor calculation issues with overlapping thumbs.
- Improved handling of extreme min/max values.

---

## [1.0.0] – 2025-01-10
### Angular Compatibility Update

### Changed
- Updated library to support **Angular 19**.
- Refined public API for better long-term stability.
- Minor performance improvements and internal cleanup.

### Fixed
- Build warnings with newer Angular versions.
- TypeScript strict mode compatibility issues.

---

## [0.0.1] – 2024-XX-XX
### Initial Release

### Added
- Dual-thumb range slider component for Angular.
- Support for `min`, `max`, and range selection.
- Tooltip display for both slider thumbs.
- Basic styling customization options.
- Compatibility with reactive and template-driven forms.

---

