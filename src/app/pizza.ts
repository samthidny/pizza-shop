import { Topping } from "./topping";
import { EventEmitter } from "@angular/core";

export class Pizza {

  toppingsChanged: EventEmitter<Pizza> = new EventEmitter();
  name: string;
  toppings: Topping[];

  constructor() {
  }

  public static create(name: string, toppings: Topping[]): Pizza {
    const pizza = new Pizza();
    pizza.name = name;
    pizza.toppings = toppings;
    return pizza;
  }

  clone(): Pizza {
    const pizza = Pizza.create(this.name, this.toppings.concat());
    return pizza;
  }

  addTopping(topping: Topping): void {
    this.toppings.push(topping);
    this.update();
  }

  removeTopping(topping: Topping): void {
    const index = this.toppings.indexOf(topping);
    this.toppings.splice(index, 1);
    this.update()
  }

  update(): void {
    this.toppingsChanged.emit(this);
  }

}
