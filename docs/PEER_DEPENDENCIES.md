# Peer Dependencies

This library keeps **peer dependencies intentionally minimal** to avoid version conflicts and reduce installation friction.

---

## Required Peer Dependencies

### Angular

The library depends on Angular core packages provided by the host application.

```json
"peerDependencies": {
  "@angular/core": ">=14.0.0",
  "@angular/common": ">=14.0.0"
}
```

**Why Angular is a peer dependency**

* Ensures a **single Angular instance** in the application
* Prevents duplicate framework bundles
* Maintains compatibility across Angular minor and patch versions

---

## Optional Peer Dependencies

None.

The library:

* Does **not** depend on RxJS APIs directly
* Does **not** require Angular Forms
* Does **not** depend on Angular CDK or Material

---

## Why RxJS Is Not Declared

Although Angular applications typically include RxJS, this library:

* Uses no RxJS operators
* Emits events via `EventEmitter` only
* Does not create streams or subscriptions

Therefore, RxJS is **not declared as a peer dependency**.

---

## Version Compatibility Policy

| Dependency      | Supported Range |
| --------------- | --------------- |
| @angular/core   | >=14.0.0        |
| @angular/common | >=14.0.0        |

* Minor and patch Angular upgrades are supported
* Major Angular upgrades may require a new library version

---

## Dependency Philosophy

* **Peer dependencies** → Frameworks owned by the host app
* **Dependencies** → None
* **Dev dependencies** → Build, test, and lint tooling only

This ensures:

* Smaller consumer bundles
* Fewer install warnings
* Predictable runtime behavior

---

## Installation Warnings

If you see peer dependency warnings:

* Verify your Angular version meets the minimum requirement
* Avoid forcing incompatible versions

---

## Summary

* ✔ Minimal peer dependencies
* ✔ No runtime dependencies
* ✔ Angular-version agnostic within supported range
* ✔ Safe for enterprise applications

---
