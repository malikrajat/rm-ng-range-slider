## Advanced Configuration

`rm-ng-range-slider` provides flexible configuration options that allow developers to fine-tune its behavior, appearance, and interactivity beyond basic usage. These settings help integrate the slider seamlessly into complex applications or specific UI/UX requirements.

### Configuration Options

| Option            | Type                                              | Default                                    | Description                                            |
| ----------------- | ------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------ |
| `min`             | `number`                                          | `0`                                        | Minimum value of the slider.                           |
| `max`             | `number`                                          | `100`                                      | Maximum value of the slider.                           |
| `step`            | `number`                                          | `1`                                        | Increment/decrement step for the slider values.        |
| `orientation`     | `'horizontal' \| 'vertical'`                      | `'horizontal'`                             | Orientation of the slider track.                       |
| `disabled`        | `boolean`                                         | `false`                                    | Disables user interaction when true.                   |
| `showTooltip`     | `boolean`                                         | `true`                                     | Toggle visibility of tooltips.                         |
| `tooltipFormat`   | `(value: number) => string`                       | `value.toString()`                         | Custom function to format tooltip values.              |
| `thumbIcons`      | `{ low: string, high: string }`                   | `{}`                                       | Custom icons for low and high thumbs.                  |
| `colors`          | `{ track: string, range: string, thumb: string }` | Default theme                              | Customize track, range, and thumb colors.              |
| `keyboardSupport` | `boolean`                                         | `true`                                     | Enable keyboard navigation (arrow keys, page up/down). |
| `animation`       | `{ duration: number, easing: string }`            | `{ duration: 200, easing: 'ease-in-out' }` | Customize thumb movement animations.                   |

### Programmatic Control

The slider can be controlled programmatically via its API:

```ts
@ViewChild('rangeSlider') slider: RmNgRangeSliderComponent;

// Set values
this.slider.setValue({ low: 20, high: 80 });

// Get current values
const values = this.slider.getValue();
console.log(values.low, values.high);

// Enable/disable slider
this.slider.disable();
this.slider.enable();
```

### Event Hooks

Listen to slider events to handle dynamic interactions:

| Event            | Payload                         | Description                              |
| ---------------- | ------------------------------- | ---------------------------------------- |
| `valueChange`    | `{ low: number, high: number }` | Triggered whenever slider values change. |
| `thumbDragStart` | `'low' \| 'high'`               | Fired when dragging starts on a thumb.   |
| `thumbDragEnd`   | `'low' \| 'high'`               | Fired when dragging ends on a thumb.     |

### Theming and Styling

Advanced theming allows dynamic color changes or adapting to global application themes:

```ts
this.slider.setColors({
  track: '#e0e0e0',
  range: '#3f51b5',
  thumb: '#ff4081'
});
```

### Accessibility Features

* **ARIA labels** can be customized for each thumb.
* Supports **keyboard navigation** for low and high thumbs.
* Planned: support for screen readers with live value announcements.

---

This configuration system ensures that the slider is **flexible, maintainable, and adaptable** to a variety of application needs, from simple forms to advanced dashboards.
