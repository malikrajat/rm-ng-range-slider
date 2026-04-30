import * as _angular_core from '@angular/core';
import { AfterViewInit, Signal, ElementRef, WritableSignal } from '@angular/core';

declare class RmNgRangeSliderComponent implements AfterViewInit {
    readonly min: _angular_core.InputSignal<number>;
    readonly max: _angular_core.InputSignal<number>;
    readonly leftColor: _angular_core.InputSignal<string>;
    readonly rightColor: _angular_core.InputSignal<string>;
    readonly leftTooltipColor: _angular_core.InputSignal<string>;
    readonly rightTooltipColor: _angular_core.InputSignal<string>;
    readonly lowSlider: Signal<ElementRef<HTMLDivElement>>;
    readonly rangeChanged: _angular_core.OutputEmitterRef<{
        low: number;
        high: number;
    }>;
    lowValue: WritableSignal<number>;
    highValue: WritableSignal<number>;
    private rangeChangedSubject;
    ngAfterViewInit(): void;
    onLowThumbChange(event: Event): void;
    onHighThumbChange(event: Event): void;
    emitRange(): void;
    updateSliderColors(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<RmNgRangeSliderComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<RmNgRangeSliderComponent, "rm-ng-range-slider", never, { "min": { "alias": "min"; "required": false; "isSignal": true; }; "max": { "alias": "max"; "required": false; "isSignal": true; }; "leftColor": { "alias": "leftColor"; "required": false; "isSignal": true; }; "rightColor": { "alias": "rightColor"; "required": false; "isSignal": true; }; "leftTooltipColor": { "alias": "leftTooltipColor"; "required": false; "isSignal": true; }; "rightTooltipColor": { "alias": "rightTooltipColor"; "required": false; "isSignal": true; }; }, { "rangeChanged": "rangeChanged"; }, never, never, true, never>;
}

export { RmNgRangeSliderComponent };
