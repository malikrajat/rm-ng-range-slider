# Changelog

All notable changes to **rm-ng-range-slider** will be documented in this file.

This project follows [Semantic Versioning](https://semver.org/).

---

## [5.0.0] – 2025-XX-XX
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

## [4.0.0] – 2025-XX-XX
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

## [3.0.0] – 2025-XX-XX
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

## [2.0.0] – 2025-01-10
### Angular Compatibility Update

### Changed
- Updated library to support **Angular 19**.
- Refined public API for better long-term stability.
- Minor performance improvements and internal cleanup.

### Fixed
- Build warnings with newer Angular versions.
- TypeScript strict mode compatibility issues.

---

## [1.0.0] – 2024-XX-XX
### Initial Release

### Added
- Dual-thumb range slider component for Angular.
- Support for `min`, `max`, and range selection.
- Tooltip display for both slider thumbs.
- Basic styling customization options.
- Compatibility with reactive and template-driven forms.

---

