import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from './pizza';
import { CartService } from './cart.service';
import { MenuService } from './menu.service';
import { ToppingsService } from './toppings.service';
import { Topping } from './topping';

@Component({
  selector: 'app-customise',
  templateUrl: './customise.component.html',
  styleUrls: ['./customise.component.less']
})
export class CustomiseComponent implements OnInit {

  id: number;
  pizza: Pizza;
  toppings: Topping[];

  constructor(private activatedRoute: ActivatedRoute, private cartService: CartService, private toppingsService: ToppingsService) {
    this.toppings = toppingsService.toppings;
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.pizza = this.cartService.items[this.id];
    console.log('ID ' + this.id);
  }

}
