export class Topping {

  id: number;
  name: string;

  public static create(name: string): Topping {
    const topping = new Topping();
    topping.name = name;
    return topping;
  }

}
