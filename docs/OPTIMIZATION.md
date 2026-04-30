# Optimization

This library is designed to be **lightweight, performant, and tree-shakable** by default. The following practices ensure optimal runtime and build performance.

---

## 1. Tree-Shakable by Design

* Only the public component is exported via `public-api.ts`
* No side-effect imports
* No global services or singletons

**Result**

* Unused code is eliminated during production builds
* Minimal bundle footprint

---

## 2. Standalone Component Architecture

The component is shipped as a **standalone Angular component**.

**Benefits**

* No NgModule overhead
* Faster compilation
* Reduced bundle size

---

## 3. OnPush Change Detection

The component uses:

```ts
changeDetection: ChangeDetectionStrategy.OnPush
```

**Why this matters**

* Change detection runs only on:

  * `@Input()` changes
  * User interaction events
* Prevents unnecessary re-render cycles

---

## 4. Event-Driven State Updates

* Internal state updates occur **only during user interaction**
* No timers, intervals, or background listeners
* Emits a single, strongly typed `rangeChanged` event

**Outcome**

* Predictable performance
* No unnecessary Angular zone churn

---

## 5. No Global Styles or Layout Thrashing

* All styles are component-scoped
* No forced reflows or layout reads during drag
* Inline styles are applied only where necessary

**Result**

* Smooth dragging even on low-end devices

---

## 6. Minimal DOM Structure

* Two native range inputs
* No nested wrappers
* No dynamically created DOM nodes

**Impact**

* Faster rendering
* Reduced memory usage

---

## 7. Zero Runtime Dependencies

* No third-party UI libraries
* No RxJS streams for drag handling
* No utility libraries

**Advantage**

* Smaller bundle size
* Fewer compatibility risks

---

## 8. Defensive Value Clamping

Values are clamped internally instead of throwing errors.

```ts
low = clamp(low, min, high);
high = clamp(high, low, max);
```

**Performance benefit**

* No exception handling overhead
* Stable runtime behavior

---

## 9. SSR-Safe Execution

* No direct access to `window` or `document`
* Safe for Angular Universal and pre-rendering

**Result**

* Faster server render
* No hydration mismatches

---

## 10. Recommended Consumer Practices

For best performance in host applications:

* Use `OnPush` in parent components
* Avoid heavy logic inside `rangeChanged` handlers
* Debounce downstream API calls if needed
* Prefer CSS variables for theming

---

## Performance Summary

| Area                 | Status    |
| -------------------- | --------- |
| Bundle size          | Minimal   |
| Change detection     | Optimized |
| DOM complexity       | Low       |
| Runtime dependencies | None      |
| SSR compatibility    | Yes       |

---

## Final Notes

This library prioritizes:

* **Predictable performance**
* **Low memory usage**
* **Zero configuration overhead**

No additional optimization steps are required for typical usage.

---