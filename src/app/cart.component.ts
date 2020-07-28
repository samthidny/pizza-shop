import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Pizza } from './pizza';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {

  items: Pizza[];
  cartService: CartService;

  constructor(cartService: CartService) {
    this.cartService = cartService;
    console.log('Cart constructor');
    this.items = [];
  }

  ngOnInit(): void {
    console.log('Cart init');
    this.cartService.cartUpdated$.subscribe({
      next: () => {
        console.log('Cart page heard update!!!! ' + this.cartService.items.length);
        this.items = this.cartService.items;
      }
    });
  }

  removeItem(item: Pizza): void {
    this.cartService.removeItem(item);
  }

}
