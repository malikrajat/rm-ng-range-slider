import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RmNgRangeSliderComponent } from 'rm-ng-range-slider';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-basic-usage',
  standalone: true,
  imports: [CommonModule, RmNgRangeSliderComponent],
  template: `
    <div class="example-container">
      <h2>Price Range Filter</h2>
      <p class="description">
        This basic example shows how to use the <code>rm-ng-range-slider</code> to filter a list of products by price.
      </p>

      <div class="slider-wrapper">
        <label>Select Price Range (\${{minPrice}} - \${{maxPrice}})</label>
        <rm-ng-range-slider
          [min]="0"
          [max]="1000"
          [leftColor]="'#3498db'"
          [rightColor]="'#2ecc71'"
          (rangeChanged)="onPriceChanged($event)"
        ></rm-ng-range-slider>
      </div>

      <div class="product-list">
        <h3>Available Products</h3>
        <ul>
          <li *ngFor="let product of filteredProducts">
            <span class="name">{{ product.name }}</span>
            <span class="price">\${{ product.price }}</span>
          </li>
        </ul>
        <p *ngIf="filteredProducts.length === 0" class="no-results">
          No products found in this price range.
        </p>
      </div>
    </div>
  `,
  styles: [`
    .example-container {
      padding: 2rem;
      max-width: 600px;
      margin: 0 auto;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #f9f9f9;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    }
    h2 { color: #2c3e50; margin-bottom: 0.5rem; }
    .description { color: #7f8c8d; margin-bottom: 2rem; }
    .slider-wrapper { margin-bottom: 2.5rem; }
    label { display: block; font-weight: 600; margin-bottom: 1rem; color: #34495e; }
    .product-list h3 { border-bottom: 2px solid #eee; padding-bottom: 0.5rem; margin-bottom: 1rem; color: #2c3e50; }
    ul { list-style: none; padding: 0; }
    li {
      background: white;
      padding: 0.75rem 1rem;
      margin-bottom: 0.5rem;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      box-shadow: 0 2px 5px rgba(0,0,0,0.02);
      transition: transform 0.2s;
    }
    li:hover { transform: translateX(5px); }
    .name { font-weight: 500; }
    .price { color: #27ae60; font-weight: bold; }
    .no-results { text-align: center; color: #e74c3c; font-style: italic; margin-top: 1rem; }
  `]
})
export class BasicUsageComponent {
  minPrice = 0;
  maxPrice = 1000;

  products: Product[] = [
    { id: 1, name: 'Smartphone', price: 699 },
    { id: 2, name: 'Laptop', price: 999 },
    { id: 3, name: 'Headphones', price: 199 },
    { id: 4, name: 'Smartwatch', price: 299 },
    { id: 5, name: 'Bluetooth Speaker', price: 99 },
    { id: 6, name: 'Tablet', price: 499 },
  ];

  get filteredProducts(): Product[] {
    return this.products.filter(p => p.price >= this.minPrice && p.price <= this.maxPrice);
  }

  onPriceChanged(event: { low: number, high: number }): void {
    this.minPrice = event.low;
    this.maxPrice = event.high;
  }
}
