
# Frequently Asked Questions (FAQ)

## 1. Does this library introduce any breaking changes?

**No.**
The current release does not introduce any breaking changes. All existing public APIs remain backward compatible. Any enhancements are additive and optional.

---

## 2. Which Angular versions are supported?

The library supports **Angular 14 and above**.
It is compiled using the Angular Package Format and works with both standalone and module-based applications.

---

## 3. Is this component form-compatible?

At present, the component **does not implement `ControlValueAccessor`**, so it is not directly compatible with Angular Reactive Forms or Template-driven Forms.

However, it can be used in **event-driven** scenarios via the `rangeChanged` output. Form support may be added in a future minor or major release.

---

## 4. Can I set the initial range values?

Currently, the component **emits range values via events** but does not expose `low` and `high` as controlled inputs.

Initial value control is planned as a future enhancement and will be introduced without breaking existing usage.

---

## 5. How do I listen to range changes?

You can subscribe to the `rangeChanged` output:

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

---

## 6. Does the library support theming and custom colors?

Yes.
The component exposes color-related inputs such as:

* `leftColor`
* `rightColor`
* `leftTooltipColor`
* `rightTooltipColor`

All inputs accept **standard CSS color values**, including CSS variables.

---

## 7. Is the slider accessible (A11y compliant)?

Basic accessibility support is provided (keyboard navigation and ARIA roles where applicable).
Full WCAG compliance enhancements are planned for future releases.

---

## 8. Can I disable the slider?

Currently, a `disabled` input is **not available**.
Disabling interaction can be handled at the parent level. Native disabling support is planned as an enhancement.

---

## 9. How does the component handle invalid values?

The component **defensively clamps values internally**:

* `low` never goes below `min`
* `high` never exceeds `max`
* `low` never exceeds `high`

This ensures safe runtime behavior without throwing errors.

---

## 10. Is server-side rendering (SSR) supported?

Yes.
The library avoids direct access to browser-only APIs and is compatible with Angular Universal and other SSR setups.

---

## 11. Does this library add any global styles?

No.
All styles are scoped to the component. No global CSS or style side effects are introduced.

---

## 12. How do I report bugs or request features?

Please use the **GitHub Issues** section of the repository.
When reporting an issue, include:

* Angular version
* Library version
* Reproduction steps

---

## 13. Is the library tree-shakable?

Yes.
The library follows Angular Package Format best practices and exports only the public API, ensuring effective tree-shaking.

---

## 14. Is this library production-ready?

Yes.
The library is suitable for production use, especially in:

* Dashboards
* Filters
* Data exploration UIs

Form-heavy workflows may require additional integration until CVA support is added.

---

## 15. Will future versions introduce breaking changes?

Breaking changes, if ever introduced, will:

* Occur only in **major versions**
* Be clearly documented
* Include migration guidance

---


**Q: Does this work with Angular version below 18?**

A: The current version (2.x) requires Angular 18+. For Angular 18, use version 1.x of this library.

**Q: Can I customize the thumb appearance?**

A: Currently, you can customize colors via the input properties. Custom thumb icons are planned for a future release.

**Q: Does this support keyboard navigation?**

A: Keyboard navigation support is planned for an upcoming release. You can track progress in our roadmap.

**Q: Can I use this with Angular forms?**

A: Yes! You can integrate the slider with Angular forms by listening to the `rangeChanged` event and updating your form controls accordingly. See the "Integration with Forms" example in the documentation.

**Q: Does this work on mobile devices?**

A: Yes, the slider is fully responsive and works on touch devices including mobile phones and tablets.

**Q: Can I set initial values for the slider?**

A: Currently, the slider starts at the min and max values. Programmatic value setting is planned for a future release.

**Q: How do I make the slider vertical?**

A: Vertical orientation is on the roadmap and will be available in a future release.

**Q: Can I disable the slider?**

A: Disabled state functionality is planned for an upcoming release.

**Q: Does this work with SSR (Server-Side Rendering)?**

A: The slider requires browser APIs for drag functionality. Ensure it only renders on the client side in SSR applications.

**Q: How do I customize the step/increment value?**

A: Step configuration is planned for a future release. Currently, the slider allows smooth continuous values.
