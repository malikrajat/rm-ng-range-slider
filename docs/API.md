
## Public API – What the Library Exports

### 1. Exported Component

```ts
export class RmNgRangeSliderComponent
```

**Selector**

```html
<rm-ng-range-slider></rm-ng-range-slider>
```

**Usage model**

* Standalone Angular component
* Event-driven (not form-based)
* Stateless from consumer perspective (values emitted, not bound)

---

## Input Properties (Current API)

These are the **only configuration knobs exposed to consumers**.

### Range Configuration

| Input | Type     | Default | Description                          |
| ----- | -------- | ------- | ------------------------------------ |
| `min` | `number` | `0`     | Absolute minimum value of the slider |
| `max` | `number` | `100`   | Absolute maximum value of the slider |

> These define the **allowed domain**, not the selected values.

---

### Visual Customization

| Input               | Type     | Default   | Description                                        |
| ------------------- | -------- | --------- | -------------------------------------------------- |
| `leftColor`         | `string` | `#3498db` | Color of the selected range from min → left thumb  |
| `rightColor`        | `string` | `#e74c3c` | Color of the selected range from right thumb → max |
| `leftTooltipColor`  | `string` | `#333`    | Background color of left thumb tooltip             |
| `rightTooltipColor` | `string` | `#e74c3c` | Background color of right thumb tooltip            |

✔ All colors accept **any valid CSS color value**
(hex, rgb, rgba, hsl, css variables, named colors)

---

## Output Events (Current API)

### `rangeChanged`

```ts
@Output() rangeChanged: EventEmitter<{ low: number; high: number }>;
```

**Emitted when**

* Either thumb is moved
* User interaction completes or updates in real time (implementation-dependent)

**Payload**

```ts
{
  low: number;   // left thumb value
  high: number;  // right thumb value
}
```

This is the **only way** for consumers to read slider state.

---

## What Is NOT Exposed (Important)

These capabilities are **not currently part of the public API**, even though consumers may expect them:

### Missing Value Control

| Feature                                 | Status        |
| --------------------------------------- | ------------- |
| Initial selected values (`low`, `high`) | Not supported |
| Programmatic update of values           | Not supported |
| Two-way binding                         | Not supported |
| FormControl / CVA                       | Not supported |

**Implication:**
The slider always initializes internally and only communicates outward via events.

---

### Missing Behavioral Inputs

| Input         | Expected              | 
| ------------- | --------------------- |
| `step`        | Number increment      | 
| `disabled`    | Disable interaction   |
| `minGap`      | Prevent overlap       |
| `orientation` | Horizontal / Vertical |
| `showTooltip` | Toggle tooltips       |

---

## API Consistency Review

### Naming (Good)

* `min / max` → clear domain boundaries
* `low / high` → intuitive emitted values
* `left / right` → consistent with UI semantics

### Simplicity (Very Good)

* Small surface area
* Easy mental model
* No over-configuration

### Extensibility (Currently Limited)

* No way to:

  * Set initial values
  * Reset slider
  * Control from parent

This is acceptable **only if explicitly documented**.

---

## Recommended API Enhancements (Non-Breaking)

If you want to evolve the library **without breaking users**, these should be your next exports:

### 1. Controlled Values (Most Important)

```ts
@Input() low!: number;
@Input() high!: number;
```

Optional, but transforms the library from:

> “visual-only slider” → “state-driven UI component”

---

### 2. Step Support

```ts
@Input() step = 1;
```

Essential for:

* Prices
* Ratings
* Percentages

---

### 3. Disabled State

```ts
@Input() disabled = false;
```

Mandatory for enterprise usage.

---

### 4. Forms Compatibility (Optional but Powerful)

```ts
implements ControlValueAccessor
```

This unlocks:

* Reactive Forms
* Template-driven Forms
* Validation
* Reset / patchValue

---

## Final Assessment (API Only)

### Current API

✔ Clean
✔ Minimal
✔ Easy to adopt

### Best Use Case Today

* Filters
* Dashboards
* Event-driven UIs
* Read-only-ish interaction models

