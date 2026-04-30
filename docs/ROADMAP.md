
## Roadmap

### Current Status (v7.x)

**Status: Stable & Production Ready**

* Dual-thumb range selection
* Real-time tooltips
* Full color customization (track & tooltips)
* Strongly typed public API (TypeScript)
* Angular 18+ compatibility
* Standalone component
* OnPush change detection
* Tree-shakable build
* Zero runtime dependencies
* No breaking changes within v7

---

### Planned Features

> All features listed under **Short-term** will be delivered as **non-breaking minor or patch releases** within v7.

---

### Short-term (v7.x – Non-breaking)

* [ ] Keyboard navigation support
* [ ] `step` / increment configuration
* [ ] `disabled` state support
* [ ] Improved ARIA roles and labels
* [ ] Better edge-case handling (`min === max`, overlap prevention)
* [ ] Optional tooltip visibility toggle
* [ ] Performance optimizations during drag

✅ **No API removals**
✅ **Backward compatible**

---

### Medium-term (v8.0 – Controlled Evolution)

> These features may introduce **intentional breaking changes** and will be released under a **major version** with migration guidance.

* [ ] Programmatic value control (`low` / `high` inputs)
* [ ] Controlled vs uncontrolled mode support
* [ ] Optional two-way binding
* [ ] Vertical orientation
* [ ] Touch gesture improvements (mobile-first)
* [ ] Accessibility baseline compliance (WCAG AA)
* [ ] Animation configuration hooks

---

### Long-term (v9.0+ – Vision)

> Exploratory features based on adoption and real-world feedback.

* [ ] Range presets
* [ ] Time-based / date-based range selection
* [ ] Advanced theming via design tokens
* [ ] Custom thumb templates (icons / content)
* [ ] Optional integration adapters (not hard dependencies)

---


### Versioning & Compatibility Policy

| Release Type  | Policy                                 |
| ------------- | -------------------------------------- |
| Patch (4.x.y) | Bug fixes, docs only                   |
| Minor (4.y.0) | Additive features, no breaking changes |
| Major (5.0+)  | Breaking changes with migration guide  |

---

### Notes on Changes from Your Original Roadmap

**Removed or Reclassified**

* “Histogram / data visualization” → Out of scope
* “Plugin architecture” → Out of scope
* “Real-time collaboration” → Out of scope

**Why**

* These features do not belong in a focused UI control library
* They would increase maintenance cost and API instability
* Mature libraries explicitly define what they *will not* do

---

## Final Assessment

* ✔ Roadmap now matches a **v4 mature library**
* ✔ No false promises
* ✔ Clear upgrade path (v2 → v3 → v4)
* ✔ Consumer-friendly and enterprise-safe
