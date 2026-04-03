## Troubleshooting

This section lists common issues you may encounter while using **rm-ng-range-slider** and how to resolve them.

---

### 1. Slider Does Not Render

**Symptoms**

* Component tag appears in HTML but nothing is visible
* No runtime errors in console

**Possible Causes & Fixes**

* **Component not imported**

  ```ts
  import { RmNgRangeSliderComponent } from 'rm-ng-range-slider';
  ```

  Ensure it is added to the `imports` array (standalone or NgModule).

* **CSS overridden**
  Check that parent containers are not setting:

  ```css
  display: none;
  overflow: hidden;
  height: 0;
  ```

---

### 2. `rangeChanged` Event Is Not Triggered

**Symptoms**

* Slider moves but no event is received

**Fix**
Ensure the output is bound correctly:

```html
<rm-ng-range-slider
  (rangeChanged)="onRangeChange($event)">
</rm-ng-range-slider>
```

```ts
onRangeChange(event: { low: number; high: number }) {
  console.log(event);
}
```

---

### 3. Thumbs Overlap or Jump Unexpectedly

**Cause**

* Edge values near `min` or `max`

**Resolution**

* This is handled internally via value clamping
* Ensure `min < max`
* Avoid dynamic changes to `min` / `max` during drag

---

### 4. Styles or Colors Not Applied

**Symptoms**

* Default colors appear instead of custom ones

**Checklist**

* Use valid CSS color values:

  * Hex (`#ff0000`)
  * RGB / RGBA
  * CSS variables

```html
<rm-ng-range-slider
  leftColor="var(--primary-color)"
  rightColor="#ff9800">
</rm-ng-range-slider>
```

---

### 5. Slider Not Updating in OnPush Parent Component

**Cause**

* Parent component also uses `OnPush`

**Fix**

* Handle logic inside the event handler
* Avoid mutating objects
* Use immutable patterns

```ts
this.range = { ...event };
```

---

### 6. Keyboard Navigation Not Working

**Status**

* Keyboard support is **not yet implemented**

**Roadmap**

* Planned as a **non-breaking enhancement in v7.x**

---

### 7. Not Working with Reactive Forms

**Reason**

* The component does **not implement `ControlValueAccessor`**

**Workaround**
Use event-driven integration:

```html
<rm-ng-range-slider
  (rangeChanged)="form.patchValue({ range: $event })">
</rm-ng-range-slider>
```

**Note**

* Native forms support is planned for a future major release

---

### 8. Server-Side Rendering (SSR) Issues

**Status**

* The component is SSR-safe

**If issues occur**

* Verify your app does not access `window` or `document` in parent components
* Ensure no browser-only logic runs during server render

---

### 9. Build or Peer Dependency Warnings

**Cause**

* Angular version mismatch

**Fix**
Ensure your project uses:

* Angular **18 or higher**
* Compatible package manager versions

Avoid forcing installs with `--legacy-peer-deps`.

---

### 10. Performance Issues During Drag

**Best Practices**

* Avoid heavy logic inside `rangeChanged`
* Debounce API calls if needed
* Use `OnPush` in parent components

---

### 11. Unexpected Behavior After Upgrade

**Checklist**

* Verify package version
* Review CHANGELOG
* Confirm no breaking changes were introduced (v7.x is backward compatible)

---

### 12. Still Having Issues?

If the issue persists:

Please open a GitHub issue with:

* Library version
* Angular version
* Reproduction steps
* Stack trace or screenshots (if applicable)

---

## Summary

* ✔ SSR safe
* ✔ OnPush optimized
* ✔ No global side effects
* ✔ Stable public API
