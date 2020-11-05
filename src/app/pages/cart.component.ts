import { Component, OnInit } from '@angular/core';
import { CartService } from './../cart.service';
import { Pizza } from './../pizza';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {

  items: Pizza[];
  cartService: CartService;
  totalPrice: number;

  constructor(cartService: CartService) {
    this.cartService = cartService;
    this.items = [];
  }

  ngOnInit(): void {
    this.cartService.cartUpdated$.subscribe({
      next: () => {
        this.items = this.cartService.items;
        this.totalPrice = this.cartService.getTotalPrice();
      }
    });
  }

  removeItem(item: Pizza): void {
    this.cartService.removeItem(item);
  }

}
