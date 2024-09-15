import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, ViewChild, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

class RmNgRangeSliderComponent {
    min = 0;
    max = 100;
    leftColor = '#3498db'; // Default left color
    rightColor = '#e74c3c'; // Default right color
    leftTooltipColor = '#333'; // Default tooltip color for the left
    rightTooltipColor = '#e74c3c'; // Default tooltip color for the right
    lowSlider;
    rangeChanged = new EventEmitter();
    lowValue = 25; // Default value for the left thumb
    highValue = 75; // Default value for the right thumb
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
        if (value > this.highValue) {
            value = this.highValue;
        }
        this.lowValue = value;
        this.emitRange();
        this.updateSliderColors();
    }
    onHighThumbChange(event) {
        let value = event.target.valueAsNumber;
        // Ensure the new high value does not go below the low value
        if (value < this.lowValue) {
            value = this.lowValue;
        }
        this.highValue = value;
        this.emitRange();
        this.updateSliderColors();
    }
    emitRange() {
        this.rangeChangedSubject.next({ low: this.lowValue, high: this.highValue });
    }
    updateSliderColors() {
        const lowSlider = this.lowSlider.nativeElement;
        const percentLow = ((this.lowValue - this.min) / (this.max - this.min)) * 100;
        const percentHigh = ((this.highValue - this.min) / (this.max - this.min)) * 100;
        lowSlider.style.background = `linear-gradient(to right, ${this.leftColor} ${percentLow}%, ${this.rightColor} ${percentHigh}%)`;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.4", ngImport: i0, type: RmNgRangeSliderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.4", type: RmNgRangeSliderComponent, isStandalone: true, selector: "rm-ng-range-slider", inputs: { min: "min", max: "max", leftColor: "leftColor", rightColor: "rightColor", leftTooltipColor: "leftTooltipColor", rightTooltipColor: "rightTooltipColor" }, outputs: { rangeChanged: "rangeChanged" }, viewQueries: [{ propertyName: "lowSlider", first: true, predicate: ["lowSlider"], descendants: true }], ngImport: i0, template: "<div class=\"slider-container\">\r\n  <input\r\n    #lowSlider\r\n    id=\"lowSlider\"\r\n    type=\"range\"\r\n    [min]=\"min\"\r\n    [max]=\"max\"\r\n    [value]=\"lowValue\"\r\n    (input)=\"onLowThumbChange($event)\"\r\n    class=\"thumb low low-thumb\"\r\n  />\r\n  <input\r\n    id=\"highSlider\"\r\n    type=\"range\"\r\n    [min]=\"min\"\r\n    [max]=\"max\"\r\n    [value]=\"highValue\"\r\n    (input)=\"onHighThumbChange($event)\"\r\n    class=\"thumb high high-thumb\"\r\n  />\r\n\r\n  <!-- Tooltip for the left thumb -->\r\n  <div\r\n    class=\"tooltip low-tooltip\"\r\n    [style.left.%]=\"(lowValue - min) / (max - min) * 100\"\r\n    [style.background]=\"leftTooltipColor\">\r\n    {{ lowValue }}\r\n  </div>\r\n\r\n  <!-- Tooltip for the right thumb -->\r\n  <div\r\n    class=\"tooltip high-tooltip\"\r\n    [style.left.%]=\"(highValue - min) / (max - min) * 100\"\r\n    [style.background]=\"rightTooltipColor\">\r\n    {{ highValue }}\r\n  </div>\r\n</div>\r\n", styles: [".slider-container{position:relative;width:100%}input[type=range]{-webkit-appearance:none;width:100%;height:6px;background:transparent;position:absolute;top:0;pointer-events:none}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;background-color:#fff;border:2px solid #000;border-radius:50%;cursor:pointer;position:relative;z-index:2;pointer-events:auto}input[type=range]::-moz-range-thumb{width:20px;height:20px;background-color:#fff;border:2px solid #000;border-radius:50%;cursor:pointer;position:relative;z-index:2;pointer-events:auto}input[type=range]::-ms-thumb{width:20px;height:20px;background-color:#fff;border:2px solid #000;border-radius:50%;cursor:pointer;position:relative;z-index:2;pointer-events:auto}.tooltip{position:absolute;top:-40px;padding:5px;color:#fff;border-radius:3px;font-size:12px;white-space:nowrap;transform:translate(-50%)}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.4", ngImport: i0, type: RmNgRangeSliderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'rm-ng-range-slider', imports: [], standalone: true, template: "<div class=\"slider-container\">\r\n  <input\r\n    #lowSlider\r\n    id=\"lowSlider\"\r\n    type=\"range\"\r\n    [min]=\"min\"\r\n    [max]=\"max\"\r\n    [value]=\"lowValue\"\r\n    (input)=\"onLowThumbChange($event)\"\r\n    class=\"thumb low low-thumb\"\r\n  />\r\n  <input\r\n    id=\"highSlider\"\r\n    type=\"range\"\r\n    [min]=\"min\"\r\n    [max]=\"max\"\r\n    [value]=\"highValue\"\r\n    (input)=\"onHighThumbChange($event)\"\r\n    class=\"thumb high high-thumb\"\r\n  />\r\n\r\n  <!-- Tooltip for the left thumb -->\r\n  <div\r\n    class=\"tooltip low-tooltip\"\r\n    [style.left.%]=\"(lowValue - min) / (max - min) * 100\"\r\n    [style.background]=\"leftTooltipColor\">\r\n    {{ lowValue }}\r\n  </div>\r\n\r\n  <!-- Tooltip for the right thumb -->\r\n  <div\r\n    class=\"tooltip high-tooltip\"\r\n    [style.left.%]=\"(highValue - min) / (max - min) * 100\"\r\n    [style.background]=\"rightTooltipColor\">\r\n    {{ highValue }}\r\n  </div>\r\n</div>\r\n", styles: [".slider-container{position:relative;width:100%}input[type=range]{-webkit-appearance:none;width:100%;height:6px;background:transparent;position:absolute;top:0;pointer-events:none}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;background-color:#fff;border:2px solid #000;border-radius:50%;cursor:pointer;position:relative;z-index:2;pointer-events:auto}input[type=range]::-moz-range-thumb{width:20px;height:20px;background-color:#fff;border:2px solid #000;border-radius:50%;cursor:pointer;position:relative;z-index:2;pointer-events:auto}input[type=range]::-ms-thumb{width:20px;height:20px;background-color:#fff;border:2px solid #000;border-radius:50%;cursor:pointer;position:relative;z-index:2;pointer-events:auto}.tooltip{position:absolute;top:-40px;padding:5px;color:#fff;border-radius:3px;font-size:12px;white-space:nowrap;transform:translate(-50%)}\n"] }]
        }], propDecorators: { min: [{
                type: Input
            }], max: [{
                type: Input
            }], leftColor: [{
                type: Input
            }], rightColor: [{
                type: Input
            }], leftTooltipColor: [{
                type: Input
            }], rightTooltipColor: [{
                type: Input
            }], lowSlider: [{
                type: ViewChild,
                args: ['lowSlider']
            }], rangeChanged: [{
                type: Output
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { RmNgRangeSliderComponent };
//# sourceMappingURL=rm-ng-range-slider.mjs.map
