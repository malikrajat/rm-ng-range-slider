# Conditional Rendering Example

This example explores how to use the `rm-ng-range-slider` within dynamic layouts where the component might be added or removed from the DOM based on user actions.

## Key Scenarios Covered

### 1. Toggleable Visibility
Using `@if` or `*ngIf` to dynamically show/hide the slider. This is common in "Filter Panels" or "Advanced Search" drawers.

### 2. State Persistence
When a component is destroyed (removed from the DOM via `*ngIf`), its internal state is lost. This example shows how to maintain values in the parent component so that when the slider is re-opened, it reflects the user's previous selection.

### 3. Smooth Transitions
Combining Angular animations with conditional rendering to create a polished, professional feel during layout shifts.

## Implementation Details

The parent component stores the `low` and `high` values. Even when `showSlider` is false, these values remain. When the slider is re-initialized, it receives these values if you were to pass them (currently the slider defaults to 25/75, but programmatic value setting is a planned feature).

```typescript
// Parent component state
low = 30;
high = 70;
showSlider = true;

onRangeChanged(event: { low: number, high: number }): void {
  this.low = event.low;
  this.high = event.high;
}
```

## Tips for Dynamic Views

- **Initial Measurements**: The slider calculates its track width on initialization. Ensuring the container has a defined width when the slider "appears" is crucial for accurate thumb positioning.
- **Destroy Logic**: If you are performing expensive operations on `rangeChanged`, remember to unsubscribe or handle logic appropriately when the slider component is destroyed.
