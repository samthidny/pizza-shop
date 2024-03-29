import { Injectable } from '@angular/core';
import { Pizza } from './pizza';
import { Topping } from './topping';
import { ToppingsService } from './toppings.service';
import { PizzaSize } from './pizza-size';
import { PizzaOption } from './pizza-option';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  pizzas: Pizza[];
  sizes: PizzaSize[];
  options: PizzaOption[];
  defaultSize: PizzaSize;

  constructor(public toppingService: ToppingsService) {

    this.options = [];
    this.options.push(PizzaOption.create('size', 0, 'small'));
    this.options.push(PizzaOption.create('size', 1, 'medium'));
    this.options.push(PizzaOption.create('size', 2, 'large'));

    this.sizes = [];
    this.sizes.push(PizzaSize.create(0, 'small'));
    this.sizes.push(PizzaSize.create(1, 'medium'));
    this.sizes.push(PizzaSize.create(2, 'large'));

    this.defaultSize = this.sizes[1];

    // These would normally load from an API, hardcoding for test
    const getToppings = (toppings) => {
      return toppings.split(',').map((topping) => {
        return this.toppingService.getTopping(topping.trim());
      });
    };

    this.pizzas = [];
    this.pizzas.push(Pizza.create('Veggie Delight', getToppings('onion, mushroom, tomato'), this.defaultSize));
    this.pizzas.push(Pizza.create('Meat Feast', getToppings('onion, mushroom, meatballs, ham, chicken'), this.defaultSize));
    this.pizzas.push(Pizza.create('Spicy Nicey', getToppings('onion, mushroom, tomato, pepperoni, green chillis'), this.defaultSize));
    this.pizzas.push(Pizza.create('Mexicano', getToppings('onion, mushroom, tomato'), this.defaultSize));
    this.pizzas.push(Pizza.create('Chicken Run', getToppings('onion, mushroom, meatballs, ham, chicken'), this.defaultSize));
    this.pizzas.push(Pizza.create('Spanish Special', getToppings('onion, mushroom, tomato, pepperoni, green chillis'), this.defaultSize));

    // Calculate initial pizza price on the menu
    this.pizzas.forEach((pizza: Pizza) => {
      pizza.price = this.getPrice(pizza);
    });
  }

  getToppingPrice(pizza: Pizza, topping: Topping): number {
    // Check Pizza size and calculate topping price
    return 1; // pizza.size.id + 0.5;
  }

  getBasePrice(pizza: Pizza): number {
    switch (pizza.size.name) {
      case 'small': return 5;
      case 'medium': return 6;
      case 'large': return 7;
    }

    throw new Error('Pizza size not found');
  }

  getPrice(pizza: Pizza): number {
    let total = this.getBasePrice(pizza);

    pizza.toppings.forEach((topping: Topping) => {
      const toppingPrice: number = this.getToppingPrice(pizza, topping);
      total += toppingPrice;
    });
    return total;
  }

  getAvailableSizes(pizza: Pizza): PizzaSize[] {
    return this.sizes;
  }

  getAvailableOptions(optionName: string, pizza: Pizza): PizzaOption[] {
    return this.options.filter((option: PizzaOption) => {
      return option.option === optionName;
    });
  }

}
