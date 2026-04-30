# Project Structure

```text
rm-ng-range-slider/
├── src/
│   ├── lib/
│   │   ├── rm-ng-range-slider.component.ts
│   │   ├── rm-ng-range-slider.component.html
│   │   ├── rm-ng-range-slider.component.scss
│   │   ├── rm-ng-range-slider.types.ts
│   │   └── rm-ng-range-slider.utils.ts
│   ├── public-api.ts
│   └── index.ts
├── package.json
├── README.md
├── API.md
├── FAQ.md
├── CHANGELOG.md
├── LICENSE
└── ng-package.json
```

---

## Directory Breakdown

### `src/lib/`

Contains all **library implementation code**.

| File                                | Responsibility                           |
| ----------------------------------- | ---------------------------------------- |
| `rm-ng-range-slider.component.ts`   | Standalone component logic               |
| `rm-ng-range-slider.component.html` | Component template                       |
| `rm-ng-range-slider.component.scss` | Scoped component styles                  |
| `rm-ng-range-slider.types.ts`       | Public & internal TypeScript interfaces  |
| `rm-ng-range-slider.utils.ts`       | Internal helper functions (not exported) |

**Best Practices**

* Keep files small and single-purpose
* Do not export utilities or helpers
* Avoid barrel files inside `lib/`

---

### `public-api.ts`

```ts
export * from './lib/rm-ng-range-slider.component';
export * from './lib/rm-ng-range-slider.types';
```

**Rules**

* Export only **public contracts**
* Never export:

  * Utilities
  * Private helpers
  * Internal constants

---

### `index.ts`

Entry point used by Angular packaging.

```ts
export * from './public-api';
```

---

## Configuration Files

### `ng-package.json`

Defines how the library is built and packaged.

Key responsibilities:

* Entry file
* Assets
* Packaging format
* Excluded files

---

### `package.json`

* `peerDependencies` → Angular
* `dependencies` → none
* `sideEffects` → false

This enables aggressive tree-shaking.

---

## Documentation Files

| File           | Purpose                            |
| -------------- | ---------------------------------- |
| `README.md`    | Overview & quick start             |
| `API.md`       | Complete public API reference      |
| `FAQ.md`       | Common questions & clarifications  |
| `CHANGELOG.md` | Version history & breaking changes |
| `LICENSE`      | Legal information                  |

---

## What Is *Not* Included (By Design)

* No `core/` or `shared/` folders
* No services unless strictly necessary
* No global styles
* No third-party dependencies

This keeps the library:

* Easy to audit
* Easy to maintain
* Easy to tree-shake

---

## Scalability Guidelines

If the library grows:

```text
lib/
├── components/
│   └── range-slider/
├── tokens/
├── themes/
└── types/
```

**Rule**

> Never change `public-api.ts` without documentation and versioning.

---

## Final Notes

* ✔ Clear separation of concerns
* ✔ Stable public API boundary
* ✔ Optimized for Angular packaging
* ✔ Enterprise-ready structure

