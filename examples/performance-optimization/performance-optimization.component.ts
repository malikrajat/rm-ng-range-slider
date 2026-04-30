import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RmNgRangeSliderComponent } from 'rm-ng-range-slider';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-performance-optimization',
    standalone: true,
    imports: [CommonModule, RmNgRangeSliderComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <div class="example-container">
      <h2>High Performance Filtering</h2>
      <p class="description">
        Optimized for applications with large datasets or expensive API calls. Uses <code>OnPush</code> strategy and event debouncing.
      </p>

      <div class="metrics">
        <div class="metric-card">
          <span class="label">Raw Events</span>
          <span class="value">{{ rawEventCount }}</span>
        </div>
        <div class="metric-card highlight">
          <span class="label">Processed (Debounced)</span>
          <span class="value">{{ processedEventCount }}</span>
        </div>
      </div>

      <div class="slider-wrapper">
        <rm-ng-range-slider
          [min]="0"
          [max]="500"
          [leftColor]="'#667eea'"
          [rightColor]="'#764ba2'"
          (rangeChanged)="onRangeChanged($event)"
        ></rm-ng-range-slider>
      </div>

      <div class="status-panel">
        <div *ngIf="isSimulating" class="loading-spinner">
          <div class="spinner"></div>
          <span>Simulating Expensive API Call...</span>
        </div>
        <div *ngIf="!isSimulating" class="results-preview">
          <p>Filtered Results for Range: <strong>{{ lastRange.low }} - {{ lastRange.high }}</strong></p>
          <div class="data-pulse">Processing Complete</div>
        </div>
      </div>

      <div class="tips">
        <h4>Optimization Tips:</h4>
        <ul>
          <li><strong>OnPush:</strong> Reduces change detection cycles by only checking when inputs change or events are fired.</li>
          <li><strong>Debouncing:</strong> Waits for a pause in interaction before triggering heavy logic (e.g., 300ms).</li>
        </ul>
      </div>
    </div>
  `,
    styles: [`
    .example-container {
      padding: 2.5rem;
      max-width: 650px;
      margin: 0 auto;
      background: #fdfdfd;
      border-radius: 16px;
      box-shadow: 0 15px 35px rgba(0,0,0,0.05);
      font-family: 'Outfit', sans-serif;
    }
    h2 { color: #1a1a2e; font-weight: 800; margin-bottom: 0.5rem; }
    .description { color: #555; margin-bottom: 2.5rem; font-size: 0.9rem; line-height: 1.6; }

    .metrics {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
    }
    .metric-card {
      flex: 1;
      padding: 1.2rem;
      background: white;
      border-radius: 12px;
      border: 1px solid #eee;
      text-align: center;
    }
    .metric-card.highlight { border-color: #667eea; background: #f8faff; }
    .metric-card .label { display: block; font-size: 0.75rem; color: #888; text-transform: uppercase; margin-bottom: 0.5rem; }
    .metric-card .value { font-size: 1.8rem; font-weight: 800; color: #1a1a2e; }

    .slider-wrapper { margin-bottom: 3rem; }

    .status-panel {
      min-height: 120px;
      background: #f8f9fa;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 2rem;
    }

    .loading-spinner { display: flex; flex-direction: column; align-items: center; gap: 1rem; color: #667eea; font-weight: 600; }
    .spinner {
      width: 30px;
      height: 30px;
      border: 3px solid #eee;
      border-top-color: #667eea;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    .results-preview { text-align: center; }
    .data-pulse {
      display: inline-block;
      padding: 0.4rem 1rem;
      background: #e6fffa;
      color: #2c7a7b;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 700;
      margin-top: 0.5rem;
    }

    .tips h4 { font-size: 0.9rem; margin-bottom: 0.8rem; }
    ul { padding-left: 1.2rem; }
    li { font-size: 0.85rem; color: #666; margin-bottom: 0.5rem; }
  `]
})
export class PerformanceOptimizationComponent {
    rawEventCount = 0;
    processedEventCount = 0;
    isSimulating = false;
    lastRange = { low: 0, high: 500 };

    private rangeSubject = new Subject<{ low: number, high: number }>();

    constructor(private cdr: ChangeDetectorRef) {
        this.rangeSubject.pipe(
            debounceTime(400) // Wait for 400ms after the last activity
        ).subscribe(range => {
            this.simulateAPI(range);
        });
    }

    onRangeChanged(event: { low: number, high: number }): void {
        this.rawEventCount++;
        this.rangeSubject.next(event);
        this.cdr.markForCheck(); // Required because of OnPush
    }

    simulateAPI(range: { low: number, high: number }): void {
        this.isSimulating = true;
        this.processedEventCount++;
        this.cdr.markForCheck();

        // Simulate 800ms API latency
        setTimeout(() => {
            this.isSimulating = false;
            this.lastRange = range;
            this.cdr.markForCheck();
        }, 800);
    }
}
