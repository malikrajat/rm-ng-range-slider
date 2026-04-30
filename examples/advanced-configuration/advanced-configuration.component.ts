import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RmNgRangeSliderComponent } from 'rm-ng-range-slider';

interface Theme {
    name: string;
    leftColor: string;
    rightColor: string;
    leftTooltipColor: string;
    rightTooltipColor: string;
    bg: string;
}

@Component({
    selector: 'app-advanced-configuration',
    standalone: true,
    imports: [CommonModule, RmNgRangeSliderComponent],
    template: `
    <div class="example-container" [style.background]="currentTheme.bg">
      <h2 [style.color]="currentTheme.leftColor">Advanced Theme Configuration</h2>
      <p class="description">
        Switch between predefined themes or create your own custom look and feel using dynamic input bindings.
      </p>

      <div class="theme-selector">
        <button 
          *ngFor="let theme of themes" 
          (click)="setTheme(theme)"
          [class.active]="currentTheme.name === theme.name"
        >
          {{ theme.name }}
        </button>
      </div>

      <div class="slider-wrapper">
        <div class="theme-stats">
          <span [style.color]="currentTheme.leftColor">Low: {{ low }}%</span>
          <span [style.color]="currentTheme.rightColor">High: {{ high }}%</span>
        </div>
        
        <rm-ng-range-slider
          [min]="0"
          [max]="100"
          [leftColor]="currentTheme.leftColor"
          [rightColor]="currentTheme.rightColor"
          [leftTooltipColor]="currentTheme.leftTooltipColor"
          [rightTooltipColor]="currentTheme.rightTooltipColor"
          (rangeChanged)="onRangeChanged($event)"
        ></rm-ng-range-slider>
      </div>

      <div class="customization-panel">
        <h3>Live Customization</h3>
        <div class="control">
          <label>Left Track Color:</label>
          <input type="color" [(ngModel)]="currentTheme.leftColor" name="leftTrack">
        </div>
        <div class="control">
          <label>Right Track Color:</label>
          <input type="color" [(ngModel)]="currentTheme.rightColor" name="rightTrack">
        </div>
        <div class="control">
          <label>Left Tooltip Color:</label>
          <input type="color" [(ngModel)]="currentTheme.leftTooltipColor" name="leftTooltip">
        </div>
        <div class="control">
          <label>Right Tooltip Color:</label>
          <input type="color" [(ngModel)]="currentTheme.rightTooltipColor" name="rightTooltip">
        </div>
      </div>
    </div>
  `,
    styles: [`
    .example-container {
      padding: 3rem;
      max-width: 800px;
      margin: 2rem auto;
      border-radius: 20px;
      transition: background 0.5s ease;
      font-family: 'Inter', sans-serif;
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
      color: #333;
    }
    h2 { font-size: 2rem; margin-bottom: 1rem; letter-spacing: -0.5px; }
    .description { margin-bottom: 2rem; line-height: 1.6; opacity: 0.8; }
    
    .theme-selector {
      display: flex;
      gap: 1rem;
      margin-bottom: 3rem;
      flex-wrap: wrap;
    }
    .theme-selector button {
      padding: 0.6rem 1.2rem;
      border: 1px solid rgba(0,0,0,0.1);
      background: rgba(255,255,255,0.8);
      border-radius: 30px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.3s;
    }
    .theme-selector button.active {
      background: #333;
      color: white;
      transform: scale(1.05);
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    .slider-wrapper {
      background: rgba(255,255,255,0.9);
      padding: 2.5rem;
      border-radius: 15px;
      margin-bottom: 2rem;
    }
    .theme-stats {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
      font-size: 1.2rem;
      font-weight: 700;
    }

    .customization-panel {
      background: rgba(255,255,255,0.7);
      padding: 2rem;
      border-radius: 15px;
    }
    .customization-panel h3 { margin-bottom: 1.5rem; font-size: 1.1rem; }
    .control {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
    .control label { font-size: 0.9rem; font-weight: 600; }
    input[type="color"] {
      border: none;
      width: 40px;
      height: 40px;
      cursor: pointer;
      background: none;
    }
  `]
})
export class AdvancedConfigurationComponent {
    low = 25;
    high = 75;

    themes: Theme[] = [
        {
            name: 'Deep Sea',
            leftColor: '#00d2ff',
            rightColor: '#3a7bd5',
            leftTooltipColor: '#00d2ff',
            rightTooltipColor: '#3a7bd5',
            bg: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)'
        },
        {
            name: 'Forest',
            leftColor: '#56ab2f',
            rightColor: '#a8e063',
            leftTooltipColor: '#56ab2f',
            rightTooltipColor: '#a8e063',
            bg: 'linear-gradient(135deg, #f1f8e9 0%, #dcedc8 100%)'
        },
        {
            name: 'Royal',
            leftColor: '#8E2DE2',
            rightColor: '#4A00E0',
            leftTooltipColor: '#8E2DE2',
            rightTooltipColor: '#4A00E0',
            bg: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)'
        },
        {
            name: 'Sunset',
            leftColor: '#f12711',
            rightColor: '#f5af19',
            leftTooltipColor: '#f12711',
            rightTooltipColor: '#f5af19',
            bg: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)'
        }
    ];

    currentTheme: Theme = this.themes[0];

    setTheme(theme: Theme): void {
        this.currentTheme = { ...theme };
    }

    onRangeChanged(event: { low: number, high: number }): void {
        this.low = event.low;
        this.high = event.high;
    }
}
