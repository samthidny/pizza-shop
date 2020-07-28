import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {

  // cartService: CartService;
  numItems: number;

  constructor(public cartService: CartService) {
    this.numItems = cartService.numItems;
    cartService.cartUpdated$.subscribe({
      next: () => {
        this.numItems = cartService.numItems;
      }
    });
  }

  ngOnInit(): void {
  }

}
