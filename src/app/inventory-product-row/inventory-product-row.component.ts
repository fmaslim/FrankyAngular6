import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export class Product {
  constructor(public sku: string,
              public name: string,
              public imageUrl: string,
              public department: string[],
              public price: number) {

              }
}

@Component({
  selector: 'app-inventory-product-row',
  templateUrl: './inventory-product-row.component.html',
  styleUrls: ['./inventory-product-row.component.css']
})
export class InventoryProductRowComponent implements OnInit {

  @Input() product: Product;
  // @Output() productSelected: EventEmitter<Product>;

  constructor() {
    // if (this.product === undefined) {
    //   this.product = new Product('NICEHAT',
    //   'A nice black hat',
    //   '',
    //   ['Men', 'Accessories', 'Hats'],
    //   29.99);

    //   console.log('product is undefined');
    // }

    // console.log('product now has a value');

    // this.productSelected = new EventEmitter<Product>();
  }

  ngOnInit() {
  }
}
