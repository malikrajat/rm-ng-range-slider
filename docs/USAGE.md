# Usage Guide

This guide demonstrates how to use **rm-ng-range-slider** across common real-world scenarios. Examples are grouped by **usage category** for clarity.

---

## 1. Basic Usage (Default Configuration)

**Use case:** Simple range selection without customization.

```html
<rm-ng-range-slider
  (rangeChanged)="onRangeChange($event)">
</rm-ng-range-slider>
```

```ts
onRangeChange(event: { low: number; high: number }) {
  console.log(event.low, event.high);
}
```

**Best for**

* Filters
* Dashboards
* Simple UI interactions

---

## 2. Configured Range (min / max)

**Use case:** Constrain selectable values.

```html
<rm-ng-range-slider
  [min]="10"
  [max]="500"
  (rangeChanged)="onRangeChange($event)">
</rm-ng-range-slider>
```

**Notes**

* `min` and `max` define the allowed domain
* Values are clamped automatically

---

## 3. Color Customization

**Use case:** Match brand or theme colors.

```html
<rm-ng-range-slider
  leftColor="#4caf50"
  rightColor="#f44336"
  leftTooltipColor="#333"
  rightTooltipColor="#000"
  (rangeChanged)="onRangeChange($event)">
</rm-ng-range-slider>
```

**Tips**

* All valid CSS color formats are supported
* CSS variables are recommended for theming

---

## 4. CSS Variable Based Theming

**Use case:** Global theming without API changes.

```css
:root {
  --slider-left: #3f51b5;
  --slider-right: #ff9800;
}
```

```html
<rm-ng-range-slider
  leftColor="var(--slider-left)"
  rightColor="var(--slider-right)">
</rm-ng-range-slider>
```

---

## 5. Event-Driven Integration

**Use case:** React to changes without storing state in the component.

```html
<rm-ng-range-slider
  (rangeChanged)="applyFilter($event)">
</rm-ng-range-slider>
```

```ts
applyFilter({ low, high }: { low: number; high: number }) {
  this.filteredData = this.data.filter(
    item => item.price >= low && item.price <= high
  );
}
```

---

## 6. Integration with Reactive Forms (Workaround)

**Use case:** Use slider output inside a form model.

```html
<form [formGroup]="form">
  <rm-ng-range-slider
    (rangeChanged)="form.patchValue({ range: $event })">
  </rm-ng-range-slider>
</form>
```

```ts
this.form = this.fb.group({
  range: []
});
```

**Note**

* Native `ControlValueAccessor` support is planned in a future major release

---

## 7. Performance-Optimized Usage

**Use case:** High-frequency drag interactions.

**Best Practices**

* Use `ChangeDetectionStrategy.OnPush`
* Keep `rangeChanged` handlers lightweight
* Debounce API calls if necessary

```ts
onRangeChange(event: { low: number; high: number }) {
  this.range = { ...event };
}
```

---

## 8. SSR-Friendly Usage

**Use case:** Angular Universal or pre-rendered apps.

```html
<rm-ng-range-slider
  [min]="0"
  [max]="100">
</rm-ng-range-slider>
```

**Notes**

* No browser-only APIs used
* Safe for server rendering

---

## 9. Accessibility Considerations

**Current Support**

* Mouse and touch interactions
* Visible tooltips

**Planned**

* Keyboard navigation
* ARIA improvements

---

## 10. Common Use Cases Summary

| Category   | Example                   |
| ---------- | ------------------------- |
| Filtering  | Price range, rating range |
| Dashboards | Data slicing              |
| Forms      | Event-driven integration  |
| Theming    | Brand-aligned UI          |
| SSR apps   | Universal rendering       |

---

## Usage Guidelines (Do’s & Don’ts)

### Do

* ✔ Use immutable patterns
* ✔ Keep event handlers simple
* ✔ Use CSS variables for theming

### Don’t

* ✘ Mutate state directly
* ✘ Rely on internal DOM structure
* ✘ Assume form support (yet)

---

## Final Notes

This component is designed for:

* **Event-driven UIs**
* **Predictable performance**
* **Minimal configuration**
