# Breaking Changes Policy (Minimal)

## Current Status

> **This release introduces no major breaking changes.**

All existing public APIs remain:

* Available
* Backward compatible
* Functionally consistent

Any changes made are **additive or internal** only.

---

## What We Explicitly Guarantee

### Guaranteed Stable

* Component selector remains unchanged
* Existing `@Input()` names and types remain unchanged
* Existing `@Output()` events and payload structure remain unchanged
* Default behavior remains functionally equivalent

---

## Changes That Are NOT Breaking (Allowed)

The following **do not** constitute breaking changes:

### 1. Adding New Optional Inputs

```ts
@Input() step?: number;
@Input() disabled?: boolean;
```

Reason:

* Existing consumers are not forced to change anything

---

### 2. Adding New Optional Outputs

```ts
@Output() dragStart = new EventEmitter<void>();
```

Reason:

* No existing subscription is affected

---

### 3. Internal Refactoring

* Performance improvements
* Code cleanup
* DOM restructuring
* CSS refactoring

As long as:

* Public API shape remains intact
* Visual output remains equivalent

---

### 4. Bug Fixes

* Incorrect range calculation
* Edge-case value clamping
* Tooltip positioning fixes

Bug fixes are **non-breaking**, even if behavior becomes stricter.

---

## What WOULD Be a Breaking Change (Explicitly Avoided)

These are **not part of the current release** and must trigger a **MAJOR version bump** if ever introduced:

| Change                         | Why                      |
| ------------------------------ | ------------------------ |
| Renaming an `@Input()`         | Consumer templates break |
| Renaming an `@Output()`        | Event bindings break     |
| Changing emitted payload shape | Runtime errors           |
| Removing default values        | Behavior regression      |
| Changing selector name         | Hard break               |
| Changing CSS variables names   | Theme break              |
| Enforcing required inputs      | Compile-time break       |

---

## How We Prevent Accidental Breaking Changes

### 1. Locked Public API File

* `public-api.ts` changes are reviewed manually
* No wildcard exports

---

### 2. Public API Tests

Tests validate:

* Inputs exist
* Outputs emit expected payload
* Defaults remain unchanged

---

### 3. Semantic Versioning Enforcement

| Change Type     | Version |
| --------------- | ------- |
| Internal / Docs | PATCH   |
| Additive API    | MINOR   |
| Breaking API    | MAJOR   |

---

## Recommended Wording for README / CHANGELOG

You can safely include this **verbatim**:

> **Breaking Changes:**
> This release does not introduce any breaking changes. All existing public APIs remain backward compatible. Any enhancements are additive and optional.

---

## Optional: Future-Proof Disclaimer

To set expectations without fear:

> Future major versions may introduce breaking changes only when strictly necessary and will be clearly documented with migration guidance.

---

## Final Assessment

* ✔ Safe release
* ✔ Backward compatible
* ✔ Consumer-friendly
* ✔ Semver-compliant

