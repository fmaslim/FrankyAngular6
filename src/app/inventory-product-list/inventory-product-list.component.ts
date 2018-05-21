import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../inventory-product-row/inventory-product-row.component';

@Component({
  selector: 'app-inventory-product-list',
  templateUrl: './inventory-product-list.component.html',
  styleUrls: ['./inventory-product-list.component.css']
})
export class InventoryProductListComponent implements OnInit {

  products: Product[];

  @Output() productSelected: EventEmitter<Product>;

  constructor() {
    this.products = [
      new Product('NICEHAT',
      'A nice black hat',
      '',
      ['Men', 'Accessories', 'Hats'],
      29.99),
      new Product('NICESHIRT',
      'A nice white shirt',
      '',
      ['Men', 'Accessories', 'Shirts'],
      19.99),
      new Product('NICEPANTS',
      'A nice red pants',
      '',
      ['Men', 'Accessories', 'Pants'],
      34.99)
    ];

    this.productSelected = new EventEmitter<Product>();
  }

  ngOnInit() {
  }

  clicked(product: Product) {
    // console.log('Item is clicked', product);
    this.productSelected.emit(product);
    console.log(product);
  }
}
