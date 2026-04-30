# Installation

## Prerequisites

Before installing, ensure your project meets the following requirements:

* **Angular:** 14 or higher
* **Node.js:** LTS version recommended
* **Package Manager:** npm or yarn

---

## Install the Package

Using **npm**:

```bash
npm install rm-ng-range-slider
```

Using **yarn**:

```bash
yarn add rm-ng-range-slider
```

---

## Import the Component

The component is provided as a **standalone Angular component**.

### Standalone Application (Recommended)

```ts
import { RmNgRangeSliderComponent } from 'rm-ng-range-slider';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [RmNgRangeSliderComponent],
  template: `
    <rm-ng-range-slider
      [min]="0"
      [max]="100"
      (rangeChanged)="onRangeChange($event)">
    </rm-ng-range-slider>
  `
})
export class ExampleComponent {
  onRangeChange(event: { low: number; high: number }) {
    console.log(event);
  }
}
```

---

### NgModule-based Application

```ts
import { RmNgRangeSliderComponent } from 'rm-ng-range-slider';

@NgModule({
  declarations: [],
  imports: [RmNgRangeSliderComponent],
})
export class AppModule {}
```

---

## Verify Installation

After installation, run your application:

```bash
ng serve
```

If the slider renders correctly, the installation was successful.

---

## Common Installation Issues

### Package not found

Ensure the package name is correct:

```bash
rm-ng-range-slider
```

---

### Angular version mismatch

If you are using Angular below v14, upgrade Angular before installing.

---

## Uninstallation

```bash
npm uninstall rm-ng-range-slider
```

or

```bash
yarn remove rm-ng-range-slider
```

---

## Next Steps

* Read the **Usage Guide**
* Review the **API Reference**
* Explore **Customization Options**