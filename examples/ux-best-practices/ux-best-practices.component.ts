import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RmNgRangeSliderComponent } from 'rm-ng-range-slider';

@Component({
    selector: 'app-ux-best-practices',
    standalone: true,
    imports: [CommonModule, RmNgRangeSliderComponent],
    template: `
    <div class="example-container">
      <h2>Inclusive Design & Accessibility</h2>
      <p class="description">
        Focusing on accessibility, touch target sizes, and real-time visual clarity to ensure a superior user experience for everyone.
      </p>

      <section class="section">
        <h3>1. ARIA & Screen Readers</h3>
        <p class="label-info" id="price-range-label">
          Explore products within the price range: <strong>\${{ low }}</strong> to <strong>\${{ high }}</strong>
        </p>
        <div class="slider-wrapper" aria-labelledby="price-range-label" role="region">
          <rm-ng-range-slider
            [min]="0"
            [max]="2000"
            [leftColor]="'#38a169'"
            [rightColor]="'#2c7a7b'"
            [leftTooltipColor]="'#2c7a7b'"
            [rightTooltipColor]="'#2c7a7b'"
            (rangeChanged)="onRangeChanged($event)"
          ></rm-ng-range-slider>
        </div>
      </section>

      <section class="section touch-targets">
        <h3>2. Touch-Friendly Interaction</h3>
        <div class="features-grid">
          <div class="feature">
            <span class="icon">👆</span>
            <h4>Generous Targets</h4>
            <p>Thumbs are optimized for finger interactions on mobile devices.</p>
          </div>
          <div class="feature">
            <span class="icon">👁️</span>
            <h4>High Contrast</h4>
            <p>Colors are chosen to meet WCAG AA contrast standards for visibility.</p>
          </div>
          <div class="feature">
            <span class="icon">💬</span>
            <h4>Real-time Tips</h4>
            <p>Tooltips provide instant feedback directly above the interaction point.</p>
          </div>
        </div>
      </section>

      <div class="summary-box" [style.border-color]="low > 1000 ? '#e53e3e' : '#38a169'">
        <h4>Current Selection Summary</h4>
        <p>You are viewing premium items above $1000: <strong>{{ low > 1000 ? 'YES' : 'NO' }}</strong></p>
        <div class="progress-bar">
          <div class="fill" [style.width.%]="(high / 2000) * 100" [style.background]="'#38a169'"></div>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .example-container {
      padding: 3rem;
      max-width: 700px;
      margin: 2rem auto;
      background: #ffffff;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.04);
      font-family: 'Outfit', sans-serif;
    }
    h2 { font-weight: 800; color: #1a202c; margin-bottom: 0.5rem; }
    .description { color: #718096; margin-bottom: 2.5rem; }

    .section { margin-bottom: 3rem; }
    .section h3 { font-size: 1.1rem; color: #2d3748; margin-bottom: 1.5rem; font-weight: 700; border-left: 4px solid #38a169; padding-left: 1rem; }
    
    .label-info { background: #f7fafc; padding: 1rem; border-radius: 10px; margin-bottom: 2rem; font-size: 0.95rem; line-height: 1.5; color: #4a5568; }
    .label-info strong { color: #2d3748; }

    .slider-wrapper { padding: 1rem 0; }

    .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
    .feature { text-align: center; padding: 1rem; background: #fff; border: 1px solid #edf2f7; border-radius: 12px; transition: transform 0.2s; }
    .feature:hover { transform: translateY(-5px); }
    .feature .icon { font-size: 1.5rem; display: block; margin-bottom: 0.5rem; }
    .feature h4 { font-size: 0.85rem; margin-bottom: 0.4rem; color: #2d3748; }
    .feature p { font-size: 0.75rem; color: #718096; line-height: 1.4; }

    .summary-box {
      background: #fdfdfd;
      border: 2px solid #38a169;
      padding: 1.5rem;
      border-radius: 15px;
      margin-top: 1rem;
    }
    .summary-box h4 { margin-bottom: 1rem; color: #2d3748; }
    .summary-box p { font-size: 0.9rem; margin-bottom: 1rem; color: #4a5568; }
    
    .progress-bar { width: 100%; height: 8px; background: #edf2f7; border-radius: 4px; overflow: hidden; }
    .fill { height: 100%; transition: width 0.3s ease; }

    @media (max-width: 600px) {
      .features-grid { grid-template-columns: 1fr; }
      .example-container { padding: 1.5rem; }
    }
  `]
})
export class UxBestPracticesComponent {
    low = 400;
    high = 1600;

    onRangeChanged(event: { low: number, high: number }): void {
        this.low = event.low;
        this.high = event.high;
    }
}
