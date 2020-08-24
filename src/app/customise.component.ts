import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from './pizza';
import { CartService } from './cart.service';
import { ToppingsService } from './toppings.service';
import { Topping } from './topping';
import { PizzaSize } from './pizza-size';

@Component({
  selector: 'app-customise',
  templateUrl: './customise.component.html',
  styleUrls: ['./customise.component.less']
})
export class CustomiseComponent implements OnInit {

  id: number;
  pizza: Pizza;
  toppings: Topping[];

  constructor(private activatedRoute: ActivatedRoute, public cartService: CartService, private toppingsService: ToppingsService) {
    this.toppings = toppingsService.toppings;
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.pizza = this.cartService.items[this.id];
  }

  toppingChanged(event: Event): void {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    const topping = this.toppings.find((item: Topping) => {
      return item.name === input.name;
    });
    if (input.checked) {
      this.pizza.addTopping(topping);
    } else {
      this.pizza.removeTopping(topping);
    }
  }

  sizeChanged(size: PizzaSize): void {
    this.pizza.size = size;
  }

}
