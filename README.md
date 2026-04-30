# rm-ng-range-slider

<p align="left">
  <img src="https://img.shields.io/npm/v/rm-ng-range-slider.svg" alt="npm version">
  <img src="https://img.shields.io/badge/Stability-production--ready-success" alt="Production ready">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license">
    <img src="https://img.shields.io/badge/Ivy-compatible-success" alt="Ivy compatible">
  <img src="https://img.shields.io/badge/Angular-14%20to%2021-blue" alt="Angular support range">
  <img src="https://img.shields.io/badge/Standalone-supported-success" alt="Standalone API">
  <img src="https://img.shields.io/badge/AOT-compatible-blue" alt="AOT compatible">
  <img src="https://img.shields.io/badge/SSR-compatible-success" alt="SSR compatible">
  <img src="https://img.shields.io/badge/TypeScript-strict-blue" alt="Strict TS">
  <img src="https://img.shields.io/badge/tree--shaking-supported-success" alt="Tree-shakable">
  <img src="https://img.shields.io/badge/Side%20Effects-none-blue" alt="No side effects">
  <img src="https://img.shields.io/badge/Linting-enabled-success" alt="Linting">
  <img src="https://img.shields.io/badge/Tests-covered-blue" alt="Tests">
  <img src="https://img.shields.io/badge/Coverage-90%25-success" alt="Coverage">
  <img src="https://img.shields.io/badge/A11y-WCAG%202.1-blue" alt="Accessibility compliant">
  <img src="https://img.shields.io/badge/API-documented-success" alt="API docs">
  <img src="https://img.shields.io/badge/Examples-available-blue" alt="Examples">
  <img src="https://img.shields.io/badge/Maintained-yes-success" alt="Maintained">
  <img src="https://img.shields.io/bundlephobia/minzip/rm-ng-range-slider" alt="minzipped size">
  <img src="https://img.shields.io/badge/Dependencies-none-success" alt="No dependencies">
  <img src="https://img.shields.io/npm/dw/rm-ng-range-slider" alt="weekly downloads">
  <img src="https://img.shields.io/badge/SemVer-compliant-blue" alt="SemVer">
  <img src="https://img.shields.io/npm/dt/rm-ng-range-slider" alt="total downloads">
  <img src="https://img.shields.io/npm/last-update/rm-ng-range-slider" alt="Last update">
  <img src="https://img.shields.io/github/issues/malikrajat/rm-ng-range-slider" alt="Open issues">
  <img src="https://img.shields.io/github/stars/malikrajat/rm-ng-range-slider" alt="GitHub stars">
</p>

## See It In Action

<div align="center">

  <img src="https://github.com/malikrajat/rm-ng-range-slider/blob/main/assets/range-slider.jpg" alt="rm-ng-range-slider Demo" width="800"/>

</div>

---

<p align="left">
Advanced, customizable, optimized, minimal, lightweight and fully customizable pure Angular component for dual value range selection. Built with performance in mind for modern Angular applications with zero dependencies.
</p>


## Table of Contents

- [Why This Library](./docs/WHY_THIS_LIBRARY.md)
- [Installation](./docs/INSTALLATION.md)
- [Quick Start / Usage](./docs/USAGE.md)
- [API Reference](./docs/API.md)
- [Advanced Configuration](./docs/ADVANCED_CONFIGURATION.md)
- [Peer Dependencies](./docs/PEER_DEPENDENCIES.md)
- [Best Practices](./docs/BEST_PRACTICES.md)
- [Performance Optimization](./docs/OPTIMIZATION.md)
- [Browser Support](./docs/BROWSER_SUPPORT.md)
- [Versioning & Angular Compatibility](./docs/VERSION_COMPATIBILITY.md)
- [Breaking Changes](./docs/BREAKING_CHANGES.md)
- [FAQ](./docs/FAQ.md)
- [Troubleshooting](./docs/TROUBLESHOOTING.md)
- [Project Structure](./docs/PROJECT_STRUCTURE.md)
- [Roadmap](./docs/ROADMAP.md)
- [Changelog](./CHANGELOG.md)
- [License](./LICENSE)
- [Examples](./examples/README.md)
- [Usage Examples](./docs/USAGE.md)


## Dependency Overview

`rm-ng-range-slider` is designed to be lightweight with zero production dependencies. It only has peer dependencies on core Angular libraries that are already part of your application.

- **@angular/core**: `(>=16.0.0 <24.0.0)`
- **@angular/common**: `(>=16.0.0 <24.0.0)`

This ensures that the library integrates smoothly without adding unnecessary bloat to your project. For more details, see the [Peer Dependencies](./docs/PEER_DEPENDENCIES.md) documentation.

## Compatibility

### Angular Version Support

This library is built to support a wide range of Angular versions. The required peer dependency versions are:

| Angular Version | `rm-ng-range-slider` Support |
|-----------------|------------------------------|
| 16              | Supported                    |
| 17              | Supported                    |
| 18              | Supported                    |
| 19              | Supported                    |
| 20              | Supported                    |
| 21              | Supported                    |

For more detailed information, please refer to our [Versioning & Angular Compatibility](./docs/VERSION_COMPATIBILITY.md) guide.

### Browser Support

The library supports all modern evergreen browsers.

| Browser | Minimum Version |
|---|---|
| Chrome | 80+ |
| Firefox | 75+ |
| Edge | 80+ |
| Safari | 13+ |
| Opera | 67+ |

Internet Explorer is **not** supported. For a detailed list of supported browsers and platforms, see the [Browser Support](./docs/BROWSER_SUPPORT.md) documentation.

### Platform Support

`rm-ng-range-slider` is platform-agnostic and runs on any operating system that supports a modern web browser and Angular, including:

- Windows
- macOS
- Linux
- iOS
- Android


## Quick Start

Here's a minimal example to get you started:

```typescript
import { Component } from '@angular/core';
import { RmNgRangeSliderComponent } from 'rm-ng-range-slider';

@Component({
  selector: 'app-range-example',
  standalone: true,
  imports: [RmNgRangeSliderComponent],
  template: `
    <div class="container">
      <h2>Select a Range</h2>
      <rm-ng-range-slider
        [min]="0"
        [max]="100"
        [leftColor]="'#3498db'"
        [rightColor]="'#e74c3c'"
        [leftTooltipColor]="'#333'"
        [rightTooltipColor]="'#e74c3c'"
        (rangeChanged)="handleRangeChanged($event)"
      ></rm-ng-range-slider>
      
      <div class="range-display">
        <p>Selected Range: {{currentLow}} - {{currentHigh}}</p>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 40px;
      max-width: 600px;
      margin: 0 auto;
    }
    .range-display {
      margin-top: 20px;
      font-size: 18px;
      text-align: center;
    }
  `]
})
export class RangeExampleComponent {
  currentLow = 25;
  currentHigh = 75;

  handleRangeChanged(event: { low: number, high: number }) {
    this.currentLow = event.low;
    this.currentHigh = event.high;
    console.log('Range changed:', event);
  }
}
```

## Features

- **Dual Thumb Range Selection** - Select both minimum and maximum values with two independent thumbs
- **Highly Optimized Performance** - Component doesn't re-render while dragging, only labels update
- **Fully Customizable Colors** - Customize thumb colors, track colors, and tooltip colors
- **Real-Time Tooltips** - Display current values in customizable tooltips above each thumb
- **Smooth Animations** - Fluid thumb movements and value transitions
- **Type-Safe** - Full TypeScript support with comprehensive type definitions
- **Zero Dependencies** - Pure Angular implementation with no external dependencies
- **Tree-Shakable** - Optimized for modern build tools to minimize bundle size
- **Angular 18+ Support** - Compatible with modern Angular versions including standalone components
- **Lightweight** - Minimal footprint with maximum performance
- **Production Ready** - Battle-tested in real-world applications


## Live Examples


Explore our comprehensive set of functional examples:

- [Basic Usage](./examples/basic-usage) - Simple implementation of a price range filter.
- [Advanced Configuration](./examples/advanced-configuration) - Dynamic theming and deep color customization.
- [Error Handling](./examples/error-handling) - Boundary validation and visual error feedback.
- [Performance Optimization](./examples/performance-optimization) - High-performance filtering with `OnPush` and debouncing.
- [UX Best Practices](./examples/ux-best-practices) - Accessibility (ARIA) and touch-friendly design.
- [Conditional Rendering](./examples/conditional-rendering) - Working with dynamic layouts and lifecycles.


## Live Demo & Playground

### Try it yourself! Interactive demos available now:

<div align="center">

<table>
  <tr>
    <td align="center" width="50%">
      <a href="https://stackblitz.com/edit/stackblitz-starters-82qcpd" target="_blank">
        <img src="https://img.shields.io/badge/⚡_StackBlitz_Demo-1976D2?style=for-the-badge&logo=stackblitz&logoColor=white" alt="StackBlitz Demo"/>
      </a>
      <br/>
      <sub><b>Interactive Playground</b></sub><br/>
      <sub>Try all features live in your browser</sub>
    </td>
    <td align="center" width="50%">
      <a href="https://github.com/malikrajat/rm-ng-range-slider" target="_blank">
        <img src="https://img.shields.io/badge/📚_Code_Examples-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Examples"/>
      </a>
      <br/>
      <sub><b>Complete Examples</b></sub><br/>
      <sub>Copy-paste ready code samples</sub>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <br/>
      <a href="https://www.npmjs.com/package/rm-ng-range-slider" target="_blank">
        <img src="https://img.shields.io/badge/📦_npm_Package-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm Package"/>
      </a>
      <br/>
      <sub><b>npm Registry</b></sub><br/>
      <sub>Install and view package details</sub>
    </td>
    <td align="center" width="50%">
      <br/>
      <a href="https://github.com/malikrajat/rm-ng-range-slider" target="_blank">
        <img src="https://img.shields.io/badge/⭐_GitHub_Repo-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository"/>
      </a>
      <br/>
      <sub><b>Source Code</b></sub><br/>
      <sub>Star, fork, and contribute</sub>
    </td>
  </tr>
</table>

</div>



## Installation & Setup

For detailed installation instructions, see our [Installation Guide](./docs/INSTALLATION.md).

## Usage

For comprehensive usage examples and API documentation, see our [Usage Guide](./docs/USAGE.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## Support This Project

If **rm-ng-range-slider** has helped you build better Angular applications, please consider:

### Star This Repository

A star helps other developers discover this library!

[![GitHub stars](https://img.shields.io/github/stars/malikrajat/rm-ng-range-slider?style=social)](https://github.com/malikrajat/rm-ng-range-slider/stargazers)

### Why Your Star Matters

- Increases visibility in the Angular community
- Supports ongoing development and maintenance
- Encourages more open-source contributions
- Helps other developers find quality tools

---

## Statistics

[![npm downloads](https://img.shields.io/npm/dt/rm-ng-range-slider.svg)](https://www.npmjs.com/package/rm-ng-range-slider)
[![npm version](https://img.shields.io/npm/v/rm-ng-range-slider.svg)](https://www.npmjs.com/package/rm-ng-range-slider)
[![GitHub issues](https://img.shields.io/github/issues/malikrajat/rm-ng-range-slider.svg)](https://github.com/malikrajat/rm-ng-range-slider/issues)
[![GitHub stars](https://img.shields.io/github/stars/malikrajat/rm-ng-range-slider.svg?style=social)](https://github.com/malikrajat/rm-ng-range-slider/stargazers)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/malikrajat/rm-ng-range-slider/blob/main/LICENSE)


## Acknowledgments

This library was created to provide a simple, performant, and customizable solution for range selection in Angular applications. Special thanks to the Angular community for their feedback and contributions.

---


## Support and Community

### Getting Help

Need assistance? We're here to help!

| Support Channel | Link | Best For |
|----------------|------|----------|
| Bug Reports | [Report Bug](https://github.com/malikrajat/rm-ng-range-slider/issues/new?template=bug_report.md) | Technical issues |
| Feature Requests | [Request Feature](https://github.com/malikrajat/rm-ng-range-slider/issues/new?template=feature_request.md) | New features |
| Discussions | [Join Discussion](https://github.com/malikrajat/rm-ng-range-slider/discussions) | General questions |
| Email | [mr.rajatmalik@gmail.com](mailto:mr.rajatmalik@gmail.com?subject=rm-ng-range-slider%20Support) | Direct support |

### Documentation

- [GitHub Repository](https://github.com/malikrajat/rm-ng-range-slider)
- [npm Package](https://www.npmjs.com/package/rm-ng-range-slider)
- [Live Demo](https://stackblitz.com/edit/stackblitz-starters-82qcpd)
- [Changelog](https://github.com/malikrajat/rm-ng-range-slider/blob/main/CHANGELOG.md)

### Community

- Star the repository to show support
- Watch for updates and new releases
- Share your use cases and feedback
- Contribute code or documentation

### Stay Updated

- Follow the project on [GitHub](https://github.com/malikrajat/rm-ng-range-slider)
- Star the repository for updates
- Watch for new releases


## Other Libraries

### UI Components

| Library                | Description                                                              | npm Link                                                                                                        |
| ---------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| **rm-range-slider**    | Lightweight two-thumb range slider with tooltips and color customization | [![npm](https://img.shields.io/npm/v/rm-range-slider.svg)](https://www.npmjs.com/package/rm-range-slider)       |
| **rm-ng-range-slider** | Angular-specific version of the dual range slider                        | [![npm](https://img.shields.io/npm/v/rm-ng-range-slider.svg)](https://www.npmjs.com/package/rm-ng-range-slider) |
| **rm-carousel**        | Simple, responsive carousel component                                    | [![npm](https://img.shields.io/npm/v/rm-carousel.svg)](https://www.npmjs.com/package/rm-carousel)               |
| **rm-image-slider**    | Minimal image slider with smooth transitions                             | [![npm](https://img.shields.io/npm/v/rm-image-slider.svg)](https://www.npmjs.com/package/rm-image-slider)       |
| **rm-ng-star-rating**  | Configurable Angular star rating component with readonly mode            | [![npm](https://img.shields.io/npm/v/rm-ng-star-rating.svg)](https://www.npmjs.com/package/rm-ng-star-rating)   |


### PDF & Export Libraries

| Library                                | Description                                                  | npm Link                                                                                                                                        |
| -------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **rm-ng-export-to-csv**                | Export JSON data to CSV with zero dependencies               | [![npm](https://img.shields.io/npm/v/rm-ng-export-to-csv.svg)](https://www.npmjs.com/package/rm-ng-export-to-csv)                               |
| **@codewithrajat/rm-ng-pdf-export**    | Image-based PDF export tool for Angular applications         | [![npm](https://img.shields.io/npm/v/@codewithrajat/rm-ng-pdf-export.svg)](https://www.npmjs.com/package/@codewithrajat/rm-ng-pdf-export)       |
| **@codewithrajat/rm-ng-structure-pdf** | Generate structured PDFs for reports, invoices, or documents | [![npm](https://img.shields.io/npm/v/@codewithrajat/rm-ng-structure-pdf.svg)](https://www.npmjs.com/package/@codewithrajat/rm-ng-structure-pdf) |


### Utility Libraries

| Library                        | Description                                             | npm Link                                                                                                                        |
| ------------------------------ | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **rm-ng-device-detection**     | Detect device type, OS, and browser in Angular          | [![npm](https://img.shields.io/npm/v/rm-ng-device-detection.svg)](https://www.npmjs.com/package/rm-ng-device-detection)         |
| **rm-colorful-console-logger** | Stylish multi-color console logger for better debugging | [![npm](https://img.shields.io/npm/v/rm-colorful-console-logger.svg)](https://www.npmjs.com/package/rm-colorful-console-logger) |


### Notifications

| Library           | Description                                       | npm Link                                                                                              |
| ----------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **rm-pushnotify** | Lightweight push-style toast notification utility | [![npm](https://img.shields.io/npm/v/rm-pushnotify.svg)](https://www.npmjs.com/package/rm-pushnotify) |



### Meta & Personal Branding

| Library         | Description                                                      | npm Link                                                                                          |
| --------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **about-rajat** | Developer portfolio package for branding and quick personal info | [![npm](https://img.shields.io/npm/v/about-rajat.svg)](https://www.npmjs.com/package/about-rajat) |


### All Packages

Browse all my packages:
- [npm: rajatmalik](https://www.npmjs.com/~rajatmalik)
- [GitHub: @malikrajat](https://github.com/malikrajat?tab=repositories)


## Author

**Rajat Malik**

Full-stack developer passionate about creating developer-friendly tools and libraries.

- Website: [rajatmalik.dev](https://rajatmalik.dev)
- Email: [mr.rajatmalik@gmail.com](mailto:mr.rajatmalik@gmail.com)
- LinkedIn: [errajatmalik](https://linkedin.com/in/errajatmalik)
- GitHub: [@malikrajat](https://github.com/malikrajat)
- npm: [rajatmalik](https://www.npmjs.com/~rajatmalik)

---


<p align="center">
  <b>Built with care for the Angular community</b>
</p>

<p align="center">
  <a href="https://github.com/malikrajat/rm-ng-range-slider/stargazers">Star on GitHub</a> •
  <a href="https://www.npmjs.com/package/rm-ng-range-slider">View on npm</a> •
  <a href="https://github.com/malikrajat/rm-ng-range-slider/issues">Report Issue</a> •
  <a href="https://stackblitz.com/edit/stackblitz-starters-82qcpd">Try Demo</a>
</p>

<p align="center">
  Made with dedication by <a href="https://rajatmalik.dev">Rajat Malik</a>
</p>
