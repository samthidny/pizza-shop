import { Topping } from "./topping";
import { ToppingsService } from "./toppings.service";

export class Pizza {

  name: string;
  toppings: Topping[];

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
  }

  removeTopping(topping: Topping): void {
    const index = this.toppings.indexOf(topping);
    this.toppings.splice(index, 1);
  }

}
