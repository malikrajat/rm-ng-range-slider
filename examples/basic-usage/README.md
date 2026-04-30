# Basic Usage Example

This example demonstrates the simplest way to integrate the `rm-ng-range-slider` into an Angular application.

## Features Shown

- **Standalone Component Integration**: Using the slider in a modern Angular standalone component.
- **Input Binding**: Setting `min`, `max`, and custom track colors (`leftColor`, `rightColor`).
- **Event Handling**: Capturing the `rangeChanged` event to update local state and filter data.
- **Dynamic Filtering**: A real-time product list that updates as you drag the slider thumbs.

## How it Works

1.  **Import**: The `RmNgRangeSliderComponent` is imported directly into the component's `imports` array.
2.  **Template**: The slider is placed within a container, receiving bounds and color configurations.
3.  **State**: The component maintains `minPrice` and `maxPrice` state variables.
4.  **Reaction**: The `onPriceChanged` method updates these variables, triggering Angular's change detection and updating the filtered product list.

## Code Snippet

```typescript
@Component({
  // ...
  template: `
    <rm-ng-range-slider
      [min]="0"
      [max]="1000"
      [leftColor]="'#3498db'"
      [rightColor]="'#2ecc71'"
      (rangeChanged)="onPriceChanged($event)"
    ></rm-ng-range-slider>
  `
})
export class BasicUsageComponent {
  onPriceChanged(event: { low: number, high: number }) {
    console.log('Low:', event.low, 'High:', event.high);
  }
}
```