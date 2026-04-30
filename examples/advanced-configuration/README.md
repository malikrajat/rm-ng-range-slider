# Advanced Configuration Example

This example explores the more powerful customization options available in the `rm-ng-range-slider`.

## Features Shown

- **Dynamic Theme Switching**: Using a theme object to update all slider colors at once.
- **Tooltip Customization**: Individually styling the left and right tooltip backgrounds.
- **Two-Way Binding Simulation**: Updating external stats and styles based on the slider's values.
- **Custom CSS Integration**: Using the slider within complex layouts and gradients.

## Key Implementation Details

The core of this example is the dynamic binding of color properties:

```html
<rm-ng-range-slider
  [leftColor]="currentTheme.leftColor"
  [rightColor]="currentTheme.rightColor"
  [leftTooltipColor]="currentTheme.leftTooltipColor"
  [rightTooltipColor]="currentTheme.rightTooltipColor"
  (rangeChanged)="onRangeChanged($event)"
></rm-ng-range-slider>
```

By binding these to a `currentTheme` object, you can change the entire look of the slider with a single action (like clicking a theme button or picking a color from a `type="color"` input).

## Advanced Styling Tips

- **Gradient Tracks**: The slider leverages the track colors to create a visual representation of the range.
- **Visual Feedback**: The component uses the emitted values to update textual labels and background colors, providing an immersive user experience.
