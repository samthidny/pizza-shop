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
        return this.toppingService.getTopping(topping.trim());
      });
    };

    this.pizzas = [];
    this.pizzas.push(Pizza.create('Veggie Delight', getToppings('onion, mushroom, tomato')));
    this.pizzas.push(Pizza.create('Meat Feast', getToppings('onion, mushroom, meatballs, ham, chicken')));
    this.pizzas.push(Pizza.create('Spicy Nicey', getToppings('onion, mushroom, tomato, pepperoni, green chillis')));
    this.pizzas.push(Pizza.create('Mexicano', getToppings('onion, mushroom, tomato')));
    this.pizzas.push(Pizza.create('Chicken Run', getToppings('onion, mushroom, meatballs, ham, chicken')));
    this.pizzas.push(Pizza.create('Spanish Special', getToppings('onion, mushroom, tomato, pepperoni, green chillis')));
  }

  getToppingPrice(topping: Topping, pizza: Pizza): number {
    // Check Pizza size and calculate topping price
    return .75;
  }

  getBasePrice(pizza: Pizza): number {
    return 10;
  }

}
