import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class RmNgRangeSliderComponent implements AfterViewInit {
    min: number;
    max: number;
    leftColor: string;
    rightColor: string;
    leftTooltipColor: string;
    rightTooltipColor: string;
    lowSlider: ElementRef;
    rangeChanged: EventEmitter<{
        low: number;
        high: number;
    }>;
    lowValue: number;
    highValue: number;
    private rangeChangedSubject;
    ngAfterViewInit(): void;
    onLowThumbChange(event: Event): void;
    onHighThumbChange(event: Event): void;
    emitRange(): void;
    updateSliderColors(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RmNgRangeSliderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RmNgRangeSliderComponent, "rm-ng-range-slider", never, { "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "leftColor": { "alias": "leftColor"; "required": false; }; "rightColor": { "alias": "rightColor"; "required": false; }; "leftTooltipColor": { "alias": "leftTooltipColor"; "required": false; }; "rightTooltipColor": { "alias": "rightTooltipColor"; "required": false; }; }, { "rangeChanged": "rangeChanged"; }, never, never, true, never>;
}
