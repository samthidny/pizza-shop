import { Component, OnInit } from '@angular/core';
import { MenuService } from './../menu.service';
import { Pizza } from './../pizza';
import { CartService } from './../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  pizzas: Pizza[];
  cartService: CartService;
  items: Pizza[];

  constructor(public menuService: MenuService, cartService: CartService) {
    this.pizzas = menuService.pizzas;
    this.pizzas.forEach((pizza: Pizza) => {
      pizza.toppingsChanged.subscribe((pizza: Pizza) => {
        // Recalculate the price if the menu item has been customised
        pizza.price = menuService.getPrice(pizza);
      });
    });
    this.cartService = cartService;
    this.cartService.cartUpdated$.subscribe({
      next: (value) => {
        this.items = this.cartService.items;
      }
    });
  }

  ngOnInit(): void {
  }

  addItem(pizza: Pizza): void {
    this.cartService.addItem(pizza);
  }

  customiseItem(pizza: Pizza): void {
    console.log('customise menu item, before adding to cart ' + pizza.name);
  }

}
