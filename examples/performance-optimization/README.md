# Performance Optimization Example

This example demonstrates how to build professional-grade, high-performance interfaces when dealing with expensive background operations like database queries or API calls.

## Key Techniques Shown

### 1. `ChangeDetectionStrategy.OnPush`
By default, Angular checks all components for changes regularly. By using `OnPush`, we tell Angular to ONLY check this component when:
- An `@Input()` property changes.
- An event occurs within the component (like the slider's `rangeChanged`).
- We manually trigger it using `ChangeDetectorRef.markForCheck()`.

This significantly reduces the CPU overhead in complex applications.

### 2. RxJS `debounceTime`
Users often drag slider thumbs quickly, which can trigger hundreds of events per second. If each event starts an API call, it can overwhelm your server.

```typescript
this.rangeSubject.pipe(
  debounceTime(400) 
).subscribe(range => {
  this.performSearch(range);
});
```

Using `debounceTime(400)` ensures that we only trigger the "expensive" logic *after* the user has stopped moving the slider for 400ms.

## Performance Metrics

The example includes a live counter showing the difference between:
- **Raw Events**: Every movement captured by the browser.
- **Processed Events**: Only those that resulted in a final state change/API call.

In a typical interaction, you might see 50-100 raw events but only 1 or 2 processed events.
