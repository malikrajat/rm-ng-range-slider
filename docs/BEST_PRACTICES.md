# Best Practices for Library Public API (Angular)

## 1. Treat the Public API as a Contract

Your **`public-api.ts` is a legal contract**, not an implementation detail.

**Rules**

* Export **only what consumers must use**
* Never export:

  * Internal helpers
  * Utility functions
  * Private types
* Any exported symbol must be:

  * Stable
  * Documented
  * Versioned

**Checklist**

* ✔ Every export has a purpose
* ✔ Every export is documented
* ✔ No accidental re-exports

---

## 2. Keep the API.entities Minimal but Complete

A good API is **small**, but not **restrictive**.

### Bad

```ts
@Input() min = 0;
@Input() max = 100;
```

### Better

```ts
@Input() min = 0;
@Input() max = 100;
@Input() low?: number;
@Input() high?: number;
```

**Why**

* Consumers need **initial state control**
* Avoid forcing event-only state management

---

## 3. Prefer Explicit Inputs Over Implicit Behavior

Never rely on undocumented defaults.

### Best Practice

* Every behavior must be controllable via an `@Input`
* Defaults must be explicitly stated

```ts
@Input() step = 1;
@Input() disabled = false;
@Input() showTooltip = true;
```

**Benefit**

* Predictable usage
* Fewer support issues
* Easier upgrades

---

## 4. Strongly Type All Outputs

Avoid loosely shaped events.

### Bad

```ts
@Output() change = new EventEmitter<any>();
```

### Best

```ts
export interface RangeChange {
  low: number;
  high: number;
}

@Output() rangeChanged = new EventEmitter<RangeChange>();
```

**Why**

* Compile-time safety
* Self-documenting API
* IDE autocomplete support

---

## 5. Naming Must Reflect Domain, Not UI Position

Avoid UI-coupled names leaking into the API.

### Prefer

```ts
low / high
```

### Avoid

```ts
leftThumb / rightThumb
```

**Reason**

* Domain semantics survive UI redesigns
* Easier to reason about data

---

## 6. Avoid Breaking Changes by Design

Design the API so that **future features are additive**.

### Example

```ts
@Input() config?: RangeSliderConfig;
```

Allows future extension without breaking consumers.

---

## 7. Expose Configuration, Hide Mechanics

**Expose what users want to control**, not how it is implemented.

### Expose

* min / max
* low / high
* step
* disabled
* tooltip visibility
* colors

### Hide

* DOM structure
* CSS classes
* Event listeners
* Calculation logic

---

## 8. Support Controlled and Uncontrolled Usage

Your component should work in both modes.

### Uncontrolled

```html
<rm-ng-range-slider (rangeChanged)="onChange($event)"></rm-ng-range-slider>
```

### Controlled

```html
<rm-ng-range-slider
  [low]="low"
  [high]="high"
  (rangeChanged)="update($event)"
></rm-ng-range-slider>
```

**Best Practice**

* Inputs always win over internal state
* Emit only when user interaction changes state

---

## 9. Provide Clear Defaults and Edge-Case Handling

Your API must define behavior for:

* `low > high`
* `low < min`
* `high > max`
* `step` not dividing evenly

**Rule**

* Clamp values internally
* Never throw runtime errors for user mistakes
* Document clamping behavior

---

## 10. Versioning Discipline (Critical)

Follow **Semantic Versioning** strictly.

| Change                  | Version |
| ----------------------- | ------- |
| Add optional input      | MINOR   |
| Add optional output     | MINOR   |
| Change default behavior | MAJOR   |
| Rename input/output     | MAJOR   |
| Remove export           | MAJOR   |

---

## 11. Document the API Where Consumers Look

Best locations:

* `README.md` → Quick usage
* `API.md` → Complete reference
* JSDoc on every `@Input` / `@Output`

Example:

```ts
/**
 * Minimum allowed value (inclusive)
 */
@Input() min = 0;
```

---

## 12. Never Leak Styling Through the API

### Avoid

```ts
@Input() tooltipClass: string;
```

### Prefer

* CSS variables
* Host bindings
* Theme tokens

```css
--rm-slider-active-color
--rm-slider-tooltip-bg
```

**Why**

* Styling remains flexible
* API remains stable

---

## 13. Validate Inputs Internally, Not Publicly

Consumers should not be required to pre-validate.

### Example

```ts
ngOnChanges() {
  this.low = clamp(this.low, this.min, this.high);
}
```

**Rule**

* Defensive API design
* Fail silently and safely

---

## 14. Public API Test Coverage Is Mandatory

Tests should validate:

* Inputs accept edge values
* Outputs emit correct payload
* Backward compatibility behavior

**Golden Rule**

> If it is exported, it must be tested.

---

## Final Summary

**A high-quality library API is:**

* Small but expressive
* Explicit, not magical
* Typed and documented
* Backward-compatible by default
* Easy to extend, hard to misuse