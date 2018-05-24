import { Component, OnInit } from '@angular/core';

export class PriceService {
  constructor() {

  }

  calculateTotalPrice(basePrice: number, state: string) {
    const tax = Math.random();
    return basePrice + tax;
  }
}

export class Product {
  priceSvc: PriceService;
  basePrice: number;

  constructor(priceSvc: PriceService, basePrice: number) {
    this.priceSvc = priceSvc;
    this.basePrice = basePrice;
  }

  totalPrice(state: string) {
    return this.priceSvc.calculateTotalPrice(this.basePrice, state);
  }
}

@Component({
  selector: 'app-price-service-demo',
  templateUrl: './price-service-demo.component.html',
  styleUrls: ['./price-service-demo.component.css']
})
export class PriceServiceDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
