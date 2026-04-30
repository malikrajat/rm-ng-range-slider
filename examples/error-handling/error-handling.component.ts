import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RmNgRangeSliderComponent } from 'rm-ng-range-slider';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-error-handling',
    standalone: true,
    imports: [CommonModule, RmNgRangeSliderComponent, FormsModule],
    template: `
    <div class="example-container">
      <h2>Robust Error Handling</h2>
      <p class="description">
        Demonstrates how to handle dynamic range boundaries and validate user-provided values to prevent "flat" or inverted ranges.
      </p>

      <div class="boundary-controls">
        <div class="input-group">
          <label>Lower Boundary (Min):</label>
          <input type="number" [(ngModel)]="minLimit" (change)="validateBoundaries()">
        </div>
        <div class="input-group">
          <label>Upper Boundary (Max):</label>
          <input type="number" [(ngModel)]="maxLimit" (change)="validateBoundaries()">
        </div>
      </div>

      <div *ngIf="errorMessage" class="error-banner">
        <span>⚠️</span> {{ errorMessage }}
      </div>

      <div class="slider-wrapper" [class.shake]="errorMessage">
        <rm-ng-range-slider
          [min]="minLimit"
          [max]="maxLimit"
          [leftColor]="'#e74c3c'"
          [rightColor]="'#f39c12'"
          (rangeChanged)="onRangeChanged($event)"
        ></rm-ng-range-slider>
      </div>

      <div class="range-display">
        <div class="box">
          <small>Current Low</small>
          <strong>{{ low }}</strong>
        </div>
        <div class="box">
          <small>Current High</small>
          <strong>{{ high }}</strong>
        </div>
      </div>

      <div class="validation-notes">
        <h4>Anti-Pattern Prevention:</h4>
        <ul>
          <li [class.met]="low < high">Low value must be less than high value</li>
          <li [class.met]="low >= minLimit">Low value must be within bounds</li>
          <li [class.met]="high <= maxLimit">High value must be within bounds</li>
        </ul>
      </div>
    </div>
  `,
    styles: [`
    .example-container {
      padding: 2.5rem;
      max-width: 600px;
      margin: 0 auto;
      background: white;
      border-radius: 15px;
      box-shadow: 0 5px 25px rgba(0,0,0,0.08);
      font-family: 'Segoe UI', system-ui, sans-serif;
    }
    h2 { color: #2c3e50; margin-bottom: 0.5rem; }
    .description { color: #666; margin-bottom: 2rem; font-size: 0.95rem; }

    .boundary-controls {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
    .input-group label { display: block; font-size: 0.8rem; font-weight: 700; margin-bottom: 0.5rem; color: #34495e; }
    .input-group input {
      width: 100%;
      padding: 0.8rem;
      border: 2px solid #edf2f7;
      border-radius: 8px;
      outline: none;
      transition: border-color 0.2s;
    }
    .input-group input:focus { border-color: #3182ce; }

    .error-banner {
      background: #fff5f5;
      color: #c53030;
      padding: 1rem;
      border-radius: 8px;
      margin-bottom: 1.5rem;
      border-left: 4px solid #f56565;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .slider-wrapper { margin: 3rem 0; padding: 0 10px; }
    .shake { animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both; }

    @keyframes shake {
      10%, 90% { transform: translate3d(-1px, 0, 0); }
      20%, 80% { transform: translate3d(2px, 0, 0); }
      30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
      40%, 60% { transform: translate3d(4px, 0, 0); }
    }

    .range-display {
      display: flex;
      gap: 1rem;
      margin-bottom: 2.5rem;
    }
    .box {
      flex: 1;
      text-align: center;
      background: #f7fafc;
      padding: 1rem;
      border-radius: 10px;
    }
    .box small { display: block; color: #718096; text-transform: uppercase; font-size: 0.7rem; letter-spacing: 1px; }
    .box strong { font-size: 1.5rem; color: #2d3748; }

    .validation-notes h4 { font-size: 0.9rem; margin-bottom: 1rem; color: #4a5568; }
    .validation-notes ul { list-style: none; padding: 0; }
    .validation-notes li {
      font-size: 0.85rem;
      color: #a0aec0;
      margin-bottom: 0.5rem;
      padding-left: 1.5rem;
      position: relative;
    }
    .validation-notes li::before { content: '○'; position: absolute; left: 0; }
    .validation-notes li.met { color: #38a169; }
    .validation-notes li.met::before { content: '●'; }
  `]
})
export class ErrorHandlingComponent {
    minLimit = 0;
    maxLimit = 1000;
    low = 250;
    high = 750;
    errorMessage = '';

    onRangeChanged(event: { low: number, high: number }): void {
        this.low = event.low;
        this.high = event.high;
        this.clearError();
    }

    validateBoundaries(): void {
        if (this.minLimit >= this.maxLimit) {
            this.errorMessage = 'Minimum boundary cannot be greater than or equal to maximum boundary.';
            this.maxLimit = this.minLimit + 100; // Reset to safe default
        } else {
            this.clearError();
        }
    }

    clearError(): void {
        this.errorMessage = '';
    }
}
