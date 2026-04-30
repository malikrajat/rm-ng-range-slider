# Error Handling Example

This example demonstrates how to build a robust UI around the `rm-ng-range-slider` by handling edge cases and validating dynamic boundary changes.

## Features Shown

- **Boundary Validation**: Preventing users from setting a `min` value that is greater than or equal to the `max` value.
- **Visual Feedback**: Using CSS animations (shake) and conditional error banners to notify users of invalid configurations.
- **Dynamic State Protection**: Implementing "Safe Defaults" when boundaries are changed dynamically.
- **Real-Time Validation Checks**: Providing a checklist of valid states to guide the developer/user.

## Defensive Implementation

When working with dynamic boundaries, it's important to ensure that the `min` input is always strictly less than the `max` input. 

```typescript
validateBoundaries(): void {
  if (this.minLimit >= this.maxLimit) {
    this.errorMessage = 'Invalid boundary configuration detected.';
    // Enforce a minimum spread
    this.maxLimit = this.minLimit + 1; 
  }
}
```

The component also handles value normalization internally, ensuring that the low thumb never crosses the high thumb, but this example shows how you can reinforce those rules at the application layer.

## Layout & UX

- **Shaking Animation**: Draws attention to the input area when an error occurs.
- **Color Coding**: The validation list updates visual cues as the values change within the slider.
