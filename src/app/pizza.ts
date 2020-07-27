export class Pizza {

  name: string;

  public static create(name: string): Pizza {
    const pizza = new Pizza();
    pizza.name = name;
    return pizza;
  }

}
