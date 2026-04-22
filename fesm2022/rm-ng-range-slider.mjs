import * as i0 from '@angular/core';
import { input, viewChild, output, signal, Component } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

class RmNgRangeSliderComponent {
    min = input(0, ...(ngDevMode ? [{ debugName: "min" }] : []));
    max = input(100, ...(ngDevMode ? [{ debugName: "max" }] : []));
    leftColor = input('#3498db', ...(ngDevMode ? [{ debugName: "leftColor" }] : [])); // Default left color
    rightColor = input('#e74c3c', ...(ngDevMode ? [{ debugName: "rightColor" }] : [])); // Default right color
    leftTooltipColor = input('#333', ...(ngDevMode ? [{ debugName: "leftTooltipColor" }] : [])); // Default tooltip color for the left
    rightTooltipColor = input('#e74c3c', ...(ngDevMode ? [{ debugName: "rightTooltipColor" }] : [])); // Default tooltip color for the right
    lowSlider = viewChild.required('lowSlider');
    rangeChanged = output();
    lowValue = signal(25, ...(ngDevMode ? [{ debugName: "lowValue" }] : [])); // Default value for the left thumb
    highValue = signal(75, ...(ngDevMode ? [{ debugName: "highValue" }] : [])); // Default value for the right thumb
    rangeChangedSubject = new Subject();
    ngAfterViewInit() {
        this.updateSliderColors();
        // Subscribe to the debounced range change subject
        this.rangeChangedSubject.pipe(debounceTime(300) // Adjust debounce time as needed
        ).subscribe((range) => {
            this.rangeChanged.emit(range);
        });
    }
    onLowThumbChange(event) {
        let value = event.target.valueAsNumber;
        // Ensure the new low value does not exceed the high value
        if (value > this.highValue()) {
            value = this.highValue();
        }
        this.lowValue.set(value);
        this.emitRange();
        this.updateSliderColors();
    }
    onHighThumbChange(event) {
        let value = event.target.valueAsNumber;
        // Ensure the new high value does not go below the low value
        if (value < this.lowValue()) {
            value = this.lowValue();
        }
        this.highValue.set(value);
        this.emitRange();
        this.updateSliderColors();
    }
    emitRange() {
        this.rangeChangedSubject.next({ low: this.lowValue(), high: this.highValue() });
    }
    updateSliderColors() {
        const lowSlider = this.lowSlider().nativeElement;
        const percentLow = ((this.lowValue() - this.min()) / (this.max() - this.min())) * 100;
        const percentHigh = ((this.highValue() - this.min()) / (this.max() - this.min())) * 100;
        lowSlider.style.background = `linear-gradient(to right, ${this.leftColor()} ${percentLow}%, ${this.rightColor()} ${percentHigh}%)`;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.0.6", ngImport: i0, type: RmNgRangeSliderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "21.0.6", type: RmNgRangeSliderComponent, isStandalone: true, selector: "rm-ng-range-slider", inputs: { min: { classPropertyName: "min", publicName: "min", isSignal: true, isRequired: false, transformFunction: null }, max: { classPropertyName: "max", publicName: "max", isSignal: true, isRequired: false, transformFunction: null }, leftColor: { classPropertyName: "leftColor", publicName: "leftColor", isSignal: true, isRequired: false, transformFunction: null }, rightColor: { classPropertyName: "rightColor", publicName: "rightColor", isSignal: true, isRequired: false, transformFunction: null }, leftTooltipColor: { classPropertyName: "leftTooltipColor", publicName: "leftTooltipColor", isSignal: true, isRequired: false, transformFunction: null }, rightTooltipColor: { classPropertyName: "rightTooltipColor", publicName: "rightTooltipColor", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { rangeChanged: "rangeChanged" }, viewQueries: [{ propertyName: "lowSlider", first: true, predicate: ["lowSlider"], descendants: true, isSignal: true }], ngImport: i0, template: "<div class=\"slider-container\">\r\n  <input\r\n    #lowSlider\r\n    id=\"lowSlider\"\r\n    type=\"range\"\r\n    [min]=\"min()\"\r\n    [max]=\"max()\"\r\n    [value]=\"lowValue()\"\r\n    (input)=\"onLowThumbChange($event)\"\r\n    class=\"thumb low low-thumb\"\r\n  />\r\n  <input\r\n    id=\"highSlider\"\r\n    type=\"range\"\r\n    [min]=\"min()\"\r\n    [max]=\"max()\"\r\n    [value]=\"highValue()\"\r\n    (input)=\"onHighThumbChange($event)\"\r\n    class=\"thumb high high-thumb\"\r\n  />\r\n\r\n  <!-- Tooltip for the left thumb -->\r\n  <div\r\n    class=\"tooltip low-tooltip\"\r\n    [style.left.%]=\"(lowValue() - min()) / (max() - min()) * 100\"\r\n    [style.background]=\"leftTooltipColor()\">\r\n    {{ lowValue() }}\r\n  </div>\r\n\r\n  <!-- Tooltip for the right thumb -->\r\n  <div\r\n    class=\"tooltip high-tooltip\"\r\n    [style.left.%]=\"(highValue() - min()) / (max() - min()) * 100\"\r\n    [style.background]=\"rightTooltipColor()\">\r\n    {{ highValue() }}\r\n  </div>\r\n</div>\r\n", styles: [".slider-container{position:relative;width:100%}input[type=range]{-webkit-appearance:none;width:100%;height:6px;background:transparent;position:absolute;top:0;pointer-events:none}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;background-color:#fff;border:2px solid #000;border-radius:50%;cursor:pointer;position:relative;z-index:2;pointer-events:auto}input[type=range]::-moz-range-thumb{width:20px;height:20px;background-color:#fff;border:2px solid #000;border-radius:50%;cursor:pointer;position:relative;z-index:2;pointer-events:auto}input[type=range]::-ms-thumb{width:20px;height:20px;background-color:#fff;border:2px solid #000;border-radius:50%;cursor:pointer;position:relative;z-index:2;pointer-events:auto}.tooltip{position:absolute;top:-40px;padding:5px;color:#fff;border-radius:3px;font-size:12px;white-space:nowrap;transform:translate(-50%)}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.0.6", ngImport: i0, type: RmNgRangeSliderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'rm-ng-range-slider', imports: [], template: "<div class=\"slider-container\">\r\n  <input\r\n    #lowSlider\r\n    id=\"lowSlider\"\r\n    type=\"range\"\r\n    [min]=\"min()\"\r\n    [max]=\"max()\"\r\n    [value]=\"lowValue()\"\r\n    (input)=\"onLowThumbChange($event)\"\r\n    class=\"thumb low low-thumb\"\r\n  />\r\n  <input\r\n    id=\"highSlider\"\r\n    type=\"range\"\r\n    [min]=\"min()\"\r\n    [max]=\"max()\"\r\n    [value]=\"highValue()\"\r\n    (input)=\"onHighThumbChange($event)\"\r\n    class=\"thumb high high-thumb\"\r\n  />\r\n\r\n  <!-- Tooltip for the left thumb -->\r\n  <div\r\n    class=\"tooltip low-tooltip\"\r\n    [style.left.%]=\"(lowValue() - min()) / (max() - min()) * 100\"\r\n    [style.background]=\"leftTooltipColor()\">\r\n    {{ lowValue() }}\r\n  </div>\r\n\r\n  <!-- Tooltip for the right thumb -->\r\n  <div\r\n    class=\"tooltip high-tooltip\"\r\n    [style.left.%]=\"(highValue() - min()) / (max() - min()) * 100\"\r\n    [style.background]=\"rightTooltipColor()\">\r\n    {{ highValue() }}\r\n  </div>\r\n</div>\r\n", styles: [".slider-container{position:relative;width:100%}input[type=range]{-webkit-appearance:none;width:100%;height:6px;background:transparent;position:absolute;top:0;pointer-events:none}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;background-color:#fff;border:2px solid #000;border-radius:50%;cursor:pointer;position:relative;z-index:2;pointer-events:auto}input[type=range]::-moz-range-thumb{width:20px;height:20px;background-color:#fff;border:2px solid #000;border-radius:50%;cursor:pointer;position:relative;z-index:2;pointer-events:auto}input[type=range]::-ms-thumb{width:20px;height:20px;background-color:#fff;border:2px solid #000;border-radius:50%;cursor:pointer;position:relative;z-index:2;pointer-events:auto}.tooltip{position:absolute;top:-40px;padding:5px;color:#fff;border-radius:3px;font-size:12px;white-space:nowrap;transform:translate(-50%)}\n"] }]
        }], propDecorators: { min: [{ type: i0.Input, args: [{ isSignal: true, alias: "min", required: false }] }], max: [{ type: i0.Input, args: [{ isSignal: true, alias: "max", required: false }] }], leftColor: [{ type: i0.Input, args: [{ isSignal: true, alias: "leftColor", required: false }] }], rightColor: [{ type: i0.Input, args: [{ isSignal: true, alias: "rightColor", required: false }] }], leftTooltipColor: [{ type: i0.Input, args: [{ isSignal: true, alias: "leftTooltipColor", required: false }] }], rightTooltipColor: [{ type: i0.Input, args: [{ isSignal: true, alias: "rightTooltipColor", required: false }] }], lowSlider: [{ type: i0.ViewChild, args: ['lowSlider', { isSignal: true }] }], rangeChanged: [{ type: i0.Output, args: ["rangeChanged"] }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { RmNgRangeSliderComponent };
//# sourceMappingURL=rm-ng-range-slider.mjs.map
