import { Topping } from "./topping";
import { EventEmitter } from "@angular/core";
import { PizzaSize } from "./pizza-size";

export class Pizza {

  id: number;
  toppingsChanged: EventEmitter<Pizza> = new EventEmitter();
  name: string;
  toppings: Topping[];
  private _size: PizzaSize;
  price: number;

  get size(): PizzaSize {
    return this._size;
  }

  set size(size: PizzaSize) {
    this._size = size;
    this.update();
  }

  constructor() {
    this.size = null;
    this.price = 0;
  }

  public static create(name: string, toppings: Topping[], size: PizzaSize): Pizza {
    const pizza = new Pizza();
    pizza.id = Math.round(Math.random() * 99999999);
    pizza.name = name;
    pizza.toppings = toppings;
    pizza.size = size;
    return pizza;
  }

  clone(): Pizza {
    const pizza = Pizza.create(this.name, this.toppings.concat(), this.size);
    pizza.id = Math.round(Math.random() * 99999999);
    return pizza;
  }

  addTopping(topping: Topping): void {
    this.toppings.push(topping);
    this.update();
  }

  removeTopping(topping: Topping): void {
    const index = this.toppings.indexOf(topping);
    this.toppings.splice(index, 1);
    this.update();
  }

  update(): void {
    this.toppingsChanged.emit(this);
  }

}
