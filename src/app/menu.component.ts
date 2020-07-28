import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { Pizza } from './pizza';
import { CartService } from './cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  pizzas: [Pizza];
  cartService: CartService;
  items: [Pizza];

  constructor(menuService: MenuService, cartService: CartService) {
    this.pizzas = menuService.pizzas;
    this.cartService = cartService;
    this.cartService.cartUpdated$.subscribe({
      next: (value) => {
        this.items = this.cartService.items;
      }
    })
  }

  ngOnInit(): void {
  }

  addItem(pizza: Pizza): void {
    console.log('Menu adding Pizza to Cart');
    this.cartService.addItem(pizza);
  }

}
