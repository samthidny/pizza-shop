import { Topping } from "./topping";

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

}
