import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RmNgRangeSliderComponent } from 'rm-ng-range-slider';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-conditional-rendering',
    standalone: true,
    imports: [CommonModule, RmNgRangeSliderComponent],
    animations: [
        trigger('slideInOut', [
            transition(':enter', [
                style({ transform: 'translateY(-20px)', opacity: 0 }),
                animate('300ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
            ]),
            transition(':leave', [
                animate('200ms ease-in', style({ transform: 'translateY(-20px)', opacity: 0 }))
            ])
        ])
    ],
    template: `
    <div class="example-container">
      <h2>Dynamic Layouts & Conditional Views</h2>
      <p class="description">
        Observe how the slider handles lifecycles when toggled between visible and hidden states using Angular's <code>&#64;if</code> or <code>*ngIf</code>.
      </p>

      <div class="controls-bar">
        <button (click)="toggleSlider()" [class.active]="showSlider">
          {{ showSlider ? 'Hide Filter' : 'Show Filter' }}
        </button>
        <button (click)="resetValues()" class="secondary">Reset Values</button>
      </div>

      <div class="canvas">
        <div *ngIf="showSlider" @slideInOut class="slider-panel">
          <div class="panel-header">
            <h4>Live Range Filter</h4>
            <span class="badge">Active</span>
          </div>
          <rm-ng-range-slider
            [min]="0"
            [max]="100"
            [leftColor]="'#4834d4'"
            [rightColor]="'#686de0'"
            (rangeChanged)="onRangeChanged($event)"
          ></rm-ng-range-slider>
          
          <div class="panel-footer">
            <span>Min: {{ low }}%</span>
            <span>Max: {{ high }}%</span>
          </div>
        </div>

        <div *ngIf="!showSlider" class="empty-state">
          <div class="placeholder-icon">🔍</div>
          <p>The filter is currently hidden. Click "Show Filter" to configure your range.</p>
        </div>
      </div>

      <div class="lifecycle-notes">
        <h4>Lifecycle Insights:</h4>
        <p>
          When the slider is re-rendered, it recalculates its layout and positions based on its initial inputs. 
          Current values are maintained in the parent component to ensure continuity.
        </p>
      </div>
    </div>
  `,
    styles: [`
    .example-container {
      padding: 3rem;
      max-width: 600px;
      margin: 2rem auto;
      background: #fdfdfd;
      border-radius: 24px;
      box-shadow: 0 20px 50px rgba(0,0,0,0.06);
      font-family: 'Inter', sans-serif;
    }
    h2 { font-weight: 800; letter-spacing: -1px; margin-bottom: 0.5rem; }
    .description { color: #888; font-size: 0.9rem; margin-bottom: 2.5rem; line-height: 1.6; }

    .controls-bar { display: flex; gap: 1rem; margin-bottom: 2rem; }
    button {
      padding: 0.8rem 1.5rem;
      border: none;
      border-radius: 12px;
      background: #4834d4;
      color: white;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    button.active { background: #686de0; opacity: 0.8; }
    button.secondary { background: #f1f2f6; color: #2f3542; }
    button:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0,0,0,0.1); }

    .canvas {
      min-height: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f8fafc;
      border: 2px dashed #e2e8f0;
      border-radius: 16px;
      padding: 2rem;
    }

    .slider-panel {
      width: 100%;
      background: white;
      padding: 2rem;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    }
    .panel-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
    .panel-header h4 { margin: 0; color: #2f3542; }
    .badge { font-size: 0.7rem; background: #ebfbee; color: #2f9e44; padding: 0.2rem 0.6rem; border-radius: 4px; font-weight: 700; }

    .panel-footer { display: flex; justify-content: space-between; margin-top: 2rem; color: #4834d4; font-weight: 700; font-size: 0.9rem; }

    .empty-state { text-align: center; color: #94a3b8; }
    .placeholder-icon { font-size: 3rem; margin-bottom: 1rem; }
    .empty-state p { font-size: 0.85rem; max-width: 250px; margin: 0 auto; line-height: 1.5; }

    .lifecycle-notes { margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #edf2f7; }
    .lifecycle-notes h4 { font-size: 0.9rem; margin-bottom: 0.5rem; color: #2f3542; }
    .lifecycle-notes p { font-size: 0.8rem; color: #64748b; line-height: 1.6; }
  `]
})
export class ConditionalRenderingComponent {
    showSlider = true;
    low = 30;
    high = 70;

    toggleSlider(): void {
        this.showSlider = !this.showSlider;
    }

    resetValues(): void {
        this.low = 0;
        this.high = 100;
    }

    onRangeChanged(event: { low: number, high: number }): void {
        this.low = event.low;
        this.high = event.high;
    }
}
