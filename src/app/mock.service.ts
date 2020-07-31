import { Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { MenuService } from './menu.service';

@Injectable({
  providedIn: 'root'
})

// Temporary service for pre poulating the cart
export class MockService {

  constructor(public cartService: CartService, public menuService: MenuService) {
    this.cartService.addItem(this.menuService.pizzas[0]);
    this.cartService.addItem(this.menuService.pizzas[1]);
    this.cartService.addItem(this.menuService.pizzas[2]);
  }
}
