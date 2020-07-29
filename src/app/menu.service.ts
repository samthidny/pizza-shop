import { Injectable } from '@angular/core';
import { Pizza } from './pizza';
import { Topping } from './topping';
import { ToppingsService } from './toppings.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  pizzas: Pizza[];

  constructor(public toppingService: ToppingsService) {

    // These would normally load from an API, hardcoding for test
    const getToppings = (toppings) => {
      return toppings.split(',').map((topping) => {
        console.log('get topping ' + topping.trim());
        return this.toppingService.getTopping(topping.trim());
      });
    };

    this.pizzas = [];
    this.pizzas.push(Pizza.create('Veggie Special', getToppings('onion, mushroom, tomato')));
    this.pizzas.push(Pizza.create('Meat Special', getToppings('onion, mushroom, meatballs, ham, chicken')));
    this.pizzas.push(Pizza.create('Spicy Nicey', getToppings('onion, mushroom, tomato, pepperoni, green chillis')));
  }

}
