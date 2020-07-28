import { Injectable } from '@angular/core';
import { Topping } from './topping';

@Injectable({
  providedIn: 'root'
})
export class ToppingsService {

  public toppings: Topping[];

  constructor() {
    this.toppings = [];
    this.toppings.push(Topping.create('Tomato'));
    this.toppings.push(Topping.create('Onion'));
    this.toppings.push(Topping.create('Mushroom'));
    this.toppings.push(Topping.create('Green Chillis'));
    this.toppings.push(Topping.create('Sausage'));
    this.toppings.push(Topping.create('Chicken'));
    this.toppings.push(Topping.create('Pepperoni'));
    this.toppings.push(Topping.create('Ham'));
    this.toppings.push(Topping.create('Pineapple'));
    this.toppings.push(Topping.create('Peppers'));
    this.toppings.push(Topping.create('Sweetcorn'));
    this.toppings.push(Topping.create('Meatballs'));
    
  }

  getTopping(name): Topping {
    return this.toppings.find((topping: Topping) => {
      const found = (topping.name.toLowerCase() === name);
      return found;
    });
  }
}
